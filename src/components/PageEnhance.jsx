// Page-level behaviors that the Webflow runtime used to provide on the
// reference site. One instance is mounted in App.jsx; it re-initialises
// the widgets that live in the page markup (sliders, tabs, scroll
// reveals) after every route change, and attaches document-level
// delegated handlers (FAQ accordions, forms, add-to-cart) exactly once.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { addToCart, clearCart } from '../lib/cartStore.js';

/* ------------------------------------------------------------------ */
/* sliders                                                             */
/* ------------------------------------------------------------------ */
function initSliders() {
  document.querySelectorAll('.w-slider').forEach((slider) => {
    if (slider.dataset.enhanced === 'slider') return;
    const mask = slider.querySelector('.w-slider-mask');
    const slides = mask ? Array.from(mask.children).filter((el) => el.classList.contains('w-slide')) : [];
    if (!mask || slides.length < 2) return;
    slider.dataset.enhanced = 'slider';

    // The reference runs two slider flavours: a horizontal track (the Webflow
    // default) and data-animation="cross", where the slides stack in the mask
    // and fade over data-duration ms.
    const cross = slider.dataset.animation === 'cross';
    let index = 0;
    let track = null;

    if (!cross) {
      track = document.createElement('div');
      track.className = 'slider-track';
      mask.insertBefore(track, slides[0]);
      slides.forEach((slide) => track.appendChild(slide));
    } else {
      slider.classList.add('slider-cross');
    }

    const syncHeight = () => {
      const tallest = Math.max(...slides.map((s) => s.offsetHeight));
      if (tallest > 0) {
        slider.style.height = tallest + 'px';
        if (track) track.style.height = '100%';
      }
    };

    const goTo = (next) => {
      index = (next + slides.length) % slides.length;
      if (cross) {
        slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
      } else {
        track.style.transform = `translateX(-${index * 100}%)`;
      }
    };

    slider
      .querySelector('.w-slider-arrow-left')
      ?.addEventListener('click', () => goTo(index - 1));
    slider
      .querySelector('.w-slider-arrow-right')
      ?.addEventListener('click', () => goTo(index + 1));

    if (cross) {
      slider.style.setProperty('--slider-fade-ms', `${Number(slider.dataset.duration) || 500}ms`);
      slides[0].classList.add('is-active');
    } else {
      // a track lays its slides out side by side, so the slider needs the
      // height of the tallest one for the mask not to clip
      syncHeight();
      window.addEventListener('resize', syncHeight);
    }

    if (slider.dataset.autoplay === 'true') {
      const delay = Number(slider.dataset.delay) || 4000;
      setInterval(() => goTo(index + 1), delay);
    }
  });
}

/* ------------------------------------------------------------------ */
/* tabs (w-tabs)                                                       */
/* ------------------------------------------------------------------ */
function initTabs() {
  document.querySelectorAll('.w-tabs').forEach((tabs) => {
    if (tabs.dataset.enhanced === 'tabs') return;
    tabs.dataset.enhanced = 'tabs';
    const links = Array.from(tabs.querySelectorAll('.w-tab-link'));
    const panes = Array.from(tabs.querySelectorAll('.w-tab-pane'));
    links.forEach((link, i) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        // the reference marks the active tab link with w--current
        links.forEach((l, j) => {
          l.classList.toggle('w--current', i === j);
          l.classList.toggle('w--tab-active', i === j);
        });
        panes.forEach((p, j) => p.classList.toggle('w--tab-active', i === j));
      });
    });
  });
}

/* ------------------------------------------------------------------ */
/* scroll reveal for elements the reference animated in with IX2       */
/* (inline opacity:0 / scale3d / offset translate3d states).           */
/* The hidden state is moved out of the inline style and onto a class, */
/* so an element the observer never reaches stays visible instead of   */
/* being stuck at opacity 0. Reference timing: 1000ms outQuart, 100ms   */
/* delay, triggered 10% into view.                                     */
/* ------------------------------------------------------------------ */
let revealObserver = null;

function hasHiddenTranslate(style) {
  const m = /translate3d\(\s*(-?[\d.]+)(px|%)\s*,\s*(-?[\d.]+)(px|%)\s*,\s*(-?[\d.]+)(px|%)/i.exec(
    style
  );
  if (!m) return false;
  return [m[1], m[3], m[5]].some((v) => parseFloat(v) !== 0);
}

// which hidden start state does this inline style describe?
function hiddenVariant(style) {
  if (/scale3d\(0\.75,\s*0\.75,\s*1\)/i.test(style)) return 'reveal-grow-hidden';
  if (/scale3d\(0,\s*0,\s*1\)/i.test(style)) return 'reveal-scale-hidden';
  return hasHiddenTranslate(style) ? 'reveal-hidden' : 'reveal-fade-hidden';
}

// 'reveal'  -> animate in when it scrolls into view
// 'clear'   -> it can never intersect (off-screen slide, closed panel, another
//              breakpoint's hidden variant): show it plainly instead of hiding
// null      -> leave the inline state alone (hover, toggle and form states)
function revealAction(el) {
  const style = el.getAttribute('style') || '';
  if (!/opacity:\s*0(\D|$)/i.test(style)) return null;
  if (/z-index:\s*-1/i.test(style)) return null;
  if (el.matches('input, textarea, select')) return null;
  // hover-only states keep their base-stylesheet hidden styles
  if (el.classList.contains('course-overlay')) return null;
  if (el.classList.contains('course-card-pop-up')) return null;
  if (el.classList.contains('contact-three-form-pop-up')) return null;
  // the counter digit trains roll from 52px-clipped windows that can never
  // intersect as a whole: show the digits, let initCounters move them
  if (el.closest('.counter-train')) return 'clear';
  // yearly pricing amounts are swapped by the pricing toggle
  if (el.classList.contains('yearly-amount')) return null;
  // not laid out at all means the element sits inside something currently
  // display:none (closed dropdown, inactive tab, the other breakpoint's copy).
  // An inline opacity:0 there would still hide it once it is shown.
  if (!isLaidOut(el)) return 'clear';
  if (el.closest('.w-slider-mask .w-slide:not(:first-child)')) return 'clear';
  if (el.closest('.w-tab-pane:not(.w--tab-active)')) return 'clear';
  return 'reveal';
}

// offsetParent is null for anything with a display:none ancestor; fixed
// elements report null too but are laid out, so they are checked separately.
function isLaidOut(el) {
  if (el.offsetParent !== null) return true;
  const cs = window.getComputedStyle(el);
  return cs.position === 'fixed' && cs.display !== 'none';
}

const TRANSFORM_PROPS = [
  'transform',
  '-webkit-transform',
  '-moz-transform',
  '-ms-transform',
];

function clearHiddenInline(el) {
  el.style.removeProperty('opacity');
  TRANSFORM_PROPS.forEach((prop) => el.style.removeProperty(prop));
}

function reveal(el, instantly) {
  revealObserver?.unobserve(el);
  el.classList.remove(
    'reveal-hidden',
    'reveal-scale-hidden',
    'reveal-grow-hidden',
    'reveal-fade-hidden'
  );
  el.classList.add('reveal-in');
  if (instantly) el.classList.add('no-anim');
  delete el.dataset.reveal;
}

// An observer only sees the frames the browser samples, so a fast flick or a
// programmatic jump can carry an element straight through the viewport and
// leave it stuck at opacity 0. After the scrolling settles, anything the
// viewport has already passed is shown (without replaying the animation).
function flushReveals() {
  const bottom = window.innerHeight;
  document.querySelectorAll('[data-reveal="pending"]').forEach((el) => {
    const box = el.getBoundingClientRect();
    if (box.top >= bottom) return;
    reveal(el, box.bottom < 0);
  });
}

let revealFlushArmed = false;

function armRevealFlush() {
  if (revealFlushArmed) return;
  revealFlushArmed = true;
  let timer = null;
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(flushReveals, 120);
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
}

function initReveal() {
  if (!revealObserver) {
    // threshold 0 + a small bottom inset: fires as soon as the element crosses
    // into view, and still fires for blocks taller than the viewport
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );
  }

  document.querySelectorAll('[style]').forEach((el) => {
    if (el.dataset.reveal) return;
    const action = revealAction(el);
    if (action === 'clear') {
      clearHiddenInline(el);
      el.dataset.reveal = 'clear';
      return;
    }
    if (action !== 'reveal') return;
    const style = el.getAttribute('style') || '';
    clearHiddenInline(el);
    el.classList.add(hiddenVariant(style));
    el.dataset.reveal = 'pending';
    revealObserver.observe(el);
  });

  armRevealFlush();
  // anything already reached when the route settles shows right away
  setTimeout(flushReveals, 0);
}


/* ------------------------------------------------------------------ */
/* counters — reference IX2 "Counter": every .counter-train inside a   */
/* .counter-box rolls up by exactly one digit height (translateY -100%) */
/* over 2000ms with cubic-bezier(.784,.325,.222,.98) when the box      */
/* scrolls into view. The box is a 52px overflow window, so the next   */
/* train's digit lands where the first one was.                        */
/* ------------------------------------------------------------------ */
function initCounters() {
  const boxes = document.querySelectorAll('.counter-box');
  if (!boxes.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const box = entry.target;
        observer.unobserve(box);
        box.querySelectorAll('.counter-train').forEach((train) => {
          train.style.transition = 'transform 2s cubic-bezier(0.784, 0.325, 0.222, 0.98)';
          ['WebkitTransform', 'MozTransform', 'MsTransform', 'transform'].forEach((prop) => {
            train.style[prop] = 'translate3d(0, -100%, 0)';
          });
        });
      });
    },
    { threshold: 0.4 }
  );

  boxes.forEach((box) => {
    if (box.dataset.enhanced === 'counter') return;
    box.dataset.enhanced = 'counter';
    observer.observe(box);
  });
}

/* ------------------------------------------------------------------ */
/* home-three "Explore our top programs": the reference moved the      */
/* .course-list-box with the mouse (IX2 a-30, MOUSE_Y keyframes:       */
/* pointer at the top of section .home-three-courses-full ->           */
/* translateY(30%), at the bottom -> translateY(-30%), smoothing 90,   */
/* resting at neutral. Touch devices keep the static layout.            */
/* ------------------------------------------------------------------ */
function initCourseParallax() {
  const boxes = document.querySelectorAll('.course-list-box');
  if (!boxes.length) return () => {};
  if (window.matchMedia('(hover: none)').matches) return () => {};
  const section =
    boxes[0].closest('.home-three-courses-full') ||
    boxes[0].closest('section') ||
    boxes[0].parentElement;
  if (!section) return () => {};

  let targetY = 50;
  let currentY = 50;
  let raf = null;
  const apply = () => {
    currentY += (targetY - currentY) * 0.05;
    const y = 30 - (currentY / 100) * 60; // keyframe0 -> +30, keyframe100 -> -30
    boxes.forEach((box) => {
      box.style.transform = `translate3d(0, ${y.toFixed(2)}%, 0)`;
    });
    if (Math.abs(targetY - currentY) > 0.05) {
      raf = requestAnimationFrame(apply);
    } else {
      raf = null;
    }
  };
  const onMove = (event) => {
    const rect = section.getBoundingClientRect();
    targetY = Math.min(100, Math.max(0, ((event.clientY - rect.top) / rect.height) * 100));
    if (!raf) raf = requestAnimationFrame(apply);
  };
  const onLeave = () => {
    targetY = 50;
    if (!raf) raf = requestAnimationFrame(apply);
  };

  section.addEventListener('mousemove', onMove);
  section.addEventListener('mouseleave', onLeave);
  return () => {
    section.removeEventListener('mousemove', onMove);
    section.removeEventListener('mouseleave', onLeave);
    if (raf) cancelAnimationFrame(raf);
    boxes.forEach((box) => {
      box.style.transform = '';
    });
  };
}

function showToast(message) {
  let toast = document.querySelector('.elearna-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'elearna-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
}

/* ------------------------------------------------------------------ */
/* add to cart: scope the product/course info around the buy form      */
/* ------------------------------------------------------------------ */
function handleAddToCart(form) {
  const scope =
    form.closest('section') ||
    form.closest('article') ||
    document.body;
  const title =
    scope.querySelector('h1')?.textContent.trim() ||
    document.querySelector('h1')?.textContent.trim() ||
    'Course';
  const price =
    form.querySelector('.heading-two, .heading-five')?.textContent.trim() ||
    '$0';
  const img =
    scope.querySelector('img:not([class*="icon"]):not([class*="logo"])')
      ?.getAttribute('src') || '';
  const qty = Math.max(1, Number(form.querySelector('input[name="quantity"]')?.value) || 1);
  addToCart({ title, price, image: img, qty });
  window.dispatchEvent(new CustomEvent('elearna:open-cart'));
}

/* ------------------------------------------------------------------ */
/* course detail panels on touch devices                               */
/* ------------------------------------------------------------------ */
/* The panel is a :hover reveal, so on a touch device the Course Details link
   inside it is unreachable. Tap opens it; a tap on the link is left alone so
   the panel is still there when the click fires. */
function initCoursePopups() {
  if (!window.matchMedia('(hover: none)').matches) return () => {};

  const onPointerDown = (event) => {
    const target = event.target;
    if (target.closest?.('a')) return;
    const card = target.closest?.('.course-cards-two');
    document.querySelectorAll('.course-cards-two.is-popped').forEach((open) => {
      if (open !== card) open.classList.remove('is-popped');
    });
    card?.classList.toggle('is-popped');
  };

  document.addEventListener('pointerdown', onPointerDown);
  return () => document.removeEventListener('pointerdown', onPointerDown);
}

/* ------------------------------------------------------------------ */
/* component                                                            */
/* ------------------------------------------------------------------ */
export default function PageEnhance() {
  const { pathname } = useLocation();

  // delegated handlers — attached once
  useEffect(() => {
    const onClick = (event) => {
      // demo checkout: place order clears the cart and confirms
      if (event.target.closest?.('.w-commerce-commercecheckoutplaceorderbutton')) {
        event.preventDefault();
        clearCart();
        showToast('Thank you! Your order has been received.');
        return;
      }
      // pricing Monthly/Yearly switch (PricingThree)
      if (event.target.closest?.('.toggle-box')) {
        event.target
          .closest('section')
          ?.classList.toggle('pricing-yearly');
        return;
      }
      // career detail pages: "Apply now" style links use data-anchor
      const anchorLink = event.target.closest?.('[data-anchor]');
      if (anchorLink) {
        event.preventDefault();
        const target = document.getElementById(anchorLink.getAttribute('data-anchor'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      // contact-three: the round .icon-box opens / closes the form pop-up
      const iconBox = event.target.closest?.('.icon-box');
      if (iconBox) {
        const popup = document.querySelector('.contact-three-form-pop-up');
        if (popup) {
          const open = popup.dataset.elearnaOpen !== '1';
          popup.dataset.elearnaOpen = open ? '1' : '0';
          popup.style.transition = 'transform 0.3s ease';
          popup.style.transform = open
            ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
            : 'translate3d(0, 0, 0) scale3d(0, 0, 1)';
        }
        return;
      }
      // FAQ accordions (.faq.w-dropdown with a faq-toggle) — both the
      // .faq-answer and .faq-two-list panels animate their height
      const toggle = event.target.closest?.('.faq-toggle');
      if (toggle) {
        const wrap = toggle.closest('.w-dropdown');
        if (!wrap) return;
        const list = wrap.querySelector(':scope > .w-dropdown-list');
        const open = !wrap.classList.contains('w--open');
        wrap.classList.toggle('w--open', open);

        // the "+" is the second bar rotated 90deg; flatten it when open
        wrap.querySelectorAll('.plus-bar.plus-two').forEach((bar) => {
          bar.style.transition = 'transform 0.3s ease';
          bar.style.transform = open ? 'rotateZ(0deg)' : 'rotateZ(90deg)';
        });

        if (list) {
          const animate =
            list.classList.contains('faq-two-list') || list.classList.contains('faq-answer');
          if (animate) {
            list.style.overflow = 'hidden';
            list.style.transition = 'height 0.3s ease';
            if (open) {
              list.classList.add('w--open');
              list.style.display = 'block';
              const target = list.scrollHeight;
              list.style.height = '0px';
              void list.offsetHeight; // force layout so the transition starts
              list.style.height = target + 'px';
              const done = (e) => {
                if (e.propertyName !== 'height') return;
                list.style.height = 'auto';
                list.removeEventListener('transitionend', done);
              };
              list.addEventListener('transitionend', done);
            } else {
              list.style.display = 'block';
              list.style.height = list.scrollHeight + 'px';
              void list.offsetHeight;
              list.style.height = '0px';
              const done = (e) => {
                if (e.propertyName !== 'height') return;
                list.classList.remove('w--open');
                list.style.display = '';
                list.removeEventListener('transitionend', done);
              };
              list.addEventListener('transitionend', done);
            }
          } else {
            list.classList.toggle('w--open', open);
          }
        }
        return;
      }
    };

    const onSubmit = (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      if (form.classList.contains('w-commerce-commerceaddtocartform')) {
        event.preventDefault();
        handleAddToCart(form);
        return;
      }
      if (form.classList.contains('w-commerce-commercecartform')) {
        event.preventDefault();
        return;
      }
      // demo submission: no backend, show the reference success message
      event.preventDefault();
      const wrap = form.closest('.w-form') || form.parentElement;
      const done = wrap?.querySelector('.w-form-done');
      if (done) {
        form.style.display = 'none';
        done.style.display = 'block';
      } else {
        showToast('Thank you! Your submission has been received!');
      }
    };

    const onChange = (event) => {
      // checkout: unchecking "Billing address same as shipping" reveals
      // the (statically hidden) billing address form
      const input = event.target;
      if (
        input.id === 'billing-address-toggle' ||
        input.classList?.contains(
          'w-commerce-commercecheckoutbillingaddresstogglecheckbox'
        )
      ) {
        const billing = document.querySelector(
          '.w-commerce-commercecheckoutbillingaddresswrapper'
        );
        if (billing) billing.style.display = input.checked ? 'none' : '';
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('submit', onSubmit);
    document.addEventListener('change', onChange);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('submit', onSubmit);
      document.removeEventListener('change', onChange);
    };
  }, []);

  // per-route widget initialisation
  useEffect(() => {
    initSliders();
    initTabs();
    initReveal();
    initCounters();
    const stopParallax = initCourseParallax();
    const stopPopups = initCoursePopups();
    return () => {
      stopParallax();
      stopPopups();
    };
  }, [pathname]);

  return null;
}
