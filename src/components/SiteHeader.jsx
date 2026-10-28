import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { useLocation } from 'react-router-dom';
import { subscribe, getItems, getCartCount, removeFromCart } from '../lib/cartStore.js';
import { syncCartDom } from '../lib/cartDom.js';

const COURSES = {
  Free: [
    ['Corporate Finance And Investments', '/understanding-corporate-finance-and-investments/course-details'],
    ['Advanced Photoshop Techniques', '/advanced-photoshop-techniques-for-designers/course-details'],
    ['Crisis Management', '/crisis-management-and-problem-solving-strategies/course-details'],
    ['Single Page Applications With Angular', '/building-single-page-applications-with-angular/course-details'],
  ],
  Paid: [
    ['Personal And Business Finance', '/the-complete-guide-to-personal-and-business-finance/course-details'],
    ['Management And Process Improvement', '/operations-management-and-process-improvement/course-details'],
    ['Interactive Web Design', '/course-three'],
    ['Design Systems And Pattern Libraries', '/design-systems-and-pattern-libraries/course-details'],
    ['Grow Your Brand And Reach Your Audience', '/grow-your-brand-and-reach-your-audience/course-details'],
    ['Risk Management', '/risk-management-and-business-continuity/course-details'],
    ['Database Integration With MongoDB', '/database-integration-with-mongodb/course-details'],
    ['Full-Stack Development with MERN Stack', '/full-stack-development-with-the-mern-stack/course-details'],
  ],
};

const PAGES = [
  ['About', '/about-two'],
  ['Course', '/course-three'],
  ['FAQ', '/faq'],
  ['Pricing', '/pricing-three'],
  ['Career', '/career'],
  ['Events', '/events'],
  ['Team', '/team'],
];

const ROUTES = {
  home: '/home-three',
  blogs: '/blog-three',
  contacts: '/contact-three',
};

const isCurrent = (pathname, target) =>
  pathname === target || (target === ROUTES.home && (pathname === '/' || pathname === ''));

/* Reference IX2 "Navbar Scroll": the bar starts transparent and fills to
   #0f252a across the first 5% of scroll progress, eased by rAF smoothing.
   The transparent start only works over a dark hero, so pages whose first
   section resolves to a light background start already filled — the nav text
   is white and would otherwise be unreadable. */
const BAR_DARK = [15, 37, 42];

function effectiveBackground(el) {
  let node = el;
  while (node && node.nodeType === 1) {
    const match = /rgba?\(([^)]+)\)/.exec(
      window.getComputedStyle(node).backgroundColor
    );
    if (match) {
      const parts = match[1].split(/[\s,]+/).map(Number);
      if (parts.length < 4 || parts[3] > 0.05) return parts.slice(0, 3);
    }
    node = node.parentElement;
  }
  return [255, 255, 255];
}

// WCAG relative luminance, good enough to split light from dark
function isDark(color) {
  const [r, g, b] = color.map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.2;
}

function heroIsDark() {
  const first = document.querySelector('#root section');
  if (!first) return false;
  const cs = window.getComputedStyle(first);
  const hasImage = cs.backgroundImage && cs.backgroundImage !== 'none';
  if (isDark(effectiveBackground(first))) return true;
  // photo heroes carry their darkness in the image (usually with a scrim) and
  // always set light type on it — that is the signal the bar is transparent
  if (hasImage) {
    const head = first.querySelector('h1, h2, .heading-one, .heading-two');
    if (head) {
      const m = /rgba?\(([^)]+)\)/.exec(window.getComputedStyle(head).color);
      if (m) {
        const parts = m[1].split(/[\s,]+/).map(Number);
        if (!isDark(parts.slice(0, 3))) return true;
      }
    }
  }
  return false;
}

function useScrollBackground(ref, forceSolid) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const dark = heroIsDark();
    let current = forceSolid || !dark ? 1 : 0;
    let target = current;
    let raf = null;
    const paint = () => {
      el.style.backgroundColor = forceSolid || !dark
        ? `rgb(${BAR_DARK.join(',')})`
        : `rgba(15, 37, 42, ${current.toFixed(3)})`;
      el.classList.toggle('is-solid', current > 0.6);
    };
    const tick = () => {
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.004) {
        current = target;
        raf = null;
      } else {
        raf = requestAnimationFrame(tick);
      }
      paint();
    };
    const onScroll = () => {
      if (forceSolid || !dark) {
        paint();
        return;
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max / 0.05)) : 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, forceSolid]);
}

export default function SiteHeader() {
  const rootRef = useRef(null);
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  useSyncExternalStore(subscribe, getItems, getItems);
  useScrollBackground(rootRef, menuOpen);

  // the mobile drawer is positioned under the bar, so publish its height
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;
    const publish = () =>
      document.documentElement.style.setProperty(
        '--site-header-height',
        `${Math.round(el.getBoundingClientRect().height)}px`
      );
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    syncCartDom();
    const onChanged = () => syncCartDom();
    const onOpenCart = () => setCartOpen(true);
    window.addEventListener('elearna:cart-changed', onChanged);
    window.addEventListener('elearna:open-cart', onOpenCart);
    return () => {
      window.removeEventListener('elearna:cart-changed', onChanged);
      window.removeEventListener('elearna:open-cart', onOpenCart);
    };
  }, []);

  // every route change closes the mobile drawer and any open group
  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
    setCartOpen(false);
  }, [pathname]);

  // the mobile drawer locks body scroll while it is open
  useEffect(() => {
    if (!menuOpen) return undefined;
    document.body.classList.add('nav-locked');
    return () => document.body.classList.remove('nav-locked');
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setOpenGroup(null);
        setCartOpen(false);
      }
    };
    const onDocClick = (event) => {
      if (!event.target.closest?.('.site-header')) {
        setMenuOpen(false);
        setOpenGroup(null);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onDocClick);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onDocClick);
    };
  }, []);

  const toggleGroup = useCallback((name) => {
    setOpenGroup((open) => (open === name ? null : name));
  }, []);

  const onNavClick = (event) => {
    const target = event.target;
    if (target.closest?.('.w-commerce-commercecartopenlink')) {
      event.preventDefault();
      setCartOpen(true);
      return;
    }
    if (
      target.closest?.('.w-commerce-commercecartcloselink') ||
      target.classList?.contains('w-commerce-commercecartcontainerwrapper')
    ) {
      event.preventDefault();
      setCartOpen(false);
      return;
    }
    const removeLink = target.closest?.('a[aria-label="Remove item from cart"]');
    if (removeLink) {
      event.preventDefault();
      removeFromCart(Number(removeLink.dataset.cartIndex || 0));
      return;
    }
    if (target.closest?.('.w-nav-button')) {
      event.preventDefault();
      setMenuOpen((open) => !open);
      return;
    }
    const toggle = target.closest?.('[data-group]');
    if (toggle) {
      // desktop hover already reveals the panel; the click state matters for
      // touch and keyboard, where it expands the group inline
      if (window.matchMedia('(min-width: 992px)').matches && window.matchMedia('(hover: hover)').matches) {
        return;
      }
      event.preventDefault();
      toggleGroup(toggle.getAttribute('data-group'));
    }
  };

  const renderDropdown = (name, children) => (
    <div
      className={`dropdown w-dropdown${openGroup === name ? ' is-open' : ''}`}
      data-hover="true"
      data-delay="0"
    >
      <button
        type="button"
        className="dropdown-toggle w-dropdown-toggle"
        data-group={name}
        aria-expanded={openGroup === name}
      >
        {name}
        <svg
          className="dropdown-caret"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1.75 6 6.5l5-4.75"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <nav className={`dropdown-list w-dropdown-list${openGroup === name ? ' w--open' : ''}`}>
        {children}
      </nav>
    </div>
  );

  return (
    <header ref={rootRef} className="site-header navbar-two" onClick={onNavClick}>
      <div className="navbar-two-top">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-layout-hflex top-nav-main">
            <div className="top-nav-text">
              {'Are you interested in online coaching? '}
              <a href={`#${ROUTES.contacts}`} className="text-light-white">
                {'Contact us.'}
              </a>
            </div>
            <div className="w-layout-hflex top-nav-right">
              <a href="mailto:support@example.com" className="top-nav-text">
                {'support@example.com'}
              </a>
              <div className="top-nav-text">
                {'Call: '}
                <a href="tel:8881234567" className="top-nav-text">
                  {'(888) 123 4567'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div role="banner" className="nav-two w-nav" data-collapse="medium">
        <div className="container w-container">
          <div className="navbar-wrapper">
            <a href="#/" className="no-padding w-nav-brand" aria-label="Elearna home">
              <img
                src="./assets/img/Elearna.svg"
                width="105"
                height="26"
                alt="Elearna"
                className="elerna"
              />
            </a>

            <nav
              role="navigation"
              className={`nav-menu w-nav-menu${menuOpen ? ' is-open' : ''}`}
              data-nav-menu-open={menuOpen ? '' : undefined}
              aria-label="Main"
            >
              <a
                href={`#${ROUTES.home}`}
                className={`nav-link dropdown-toggle w-nav-link${isCurrent(pathname, ROUTES.home) ? ' w--current' : ''}`}
              >
                {'Home'}
              </a>

              {renderDropdown(
                'Courses',
                <div className="dropdown-columns">
                  {Object.entries(COURSES).map(([group, links]) => (
                    <div className="dropdown-column" key={group}>
                      <div className="dropdown-group-label">{group}</div>
                      {links.map(([label, href]) => (
                        <a
                          key={href + label}
                          href={`#${href}`}
                          className={`dropdown-link w-dropdown-link${isCurrent(pathname, href) ? ' w--current' : ''}`}
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {renderDropdown(
                'Pages',
                PAGES.map(([label, href]) => (
                  <a
                    key={href}
                    href={`#${href}`}
                    className={`dropdown-link w-dropdown-link${isCurrent(pathname, href) ? ' w--current' : ''}`}
                  >
                    {label}
                  </a>
                ))
              )}

              <a
                href={`#${ROUTES.blogs}`}
                className={`nav-link dropdown-toggle w-nav-link${isCurrent(pathname, ROUTES.blogs) ? ' w--current' : ''}`}
              >
                {'Blogs'}
              </a>
              <a
                href={`#${ROUTES.contacts}`}
                className={`nav-link dropdown-toggle w-nav-link${isCurrent(pathname, ROUTES.contacts) ? ' w--current' : ''}`}
              >
                {'Contacts'}
              </a>

              <div className="nav-menu-auth">
                <a href="#/sign-up">{'Register'}</a>
                <a href="#/log-in">{'Log in'}</a>
              </div>
            </nav>

            <div className="w-layout-hflex navbar-right">
              <div data-open-product="" className="w-commerce-commercecartwrapper cart">
                <a
                  className="w-commerce-commercecartopenlink cart-button w-inline-block"
                  role="button"
                  aria-haspopup="dialog"
                  aria-label="Open cart"
                  href="#"
                >
                  <img
                    src="./assets/img/Cart.svg"
                    loading="lazy"
                    width="18"
                    height="23"
                    alt="Icon"
                    className="cart-icon"
                  />
                  <div className="w-commerce-commercecartopenlinkcount cart-quantity">
                    {getCartCount()}
                  </div>
                </a>
                <div
                  style={{ display: cartOpen ? 'block' : 'none' }}
                  className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar"
                >
                  <div role="dialog" className="w-commerce-commercecartcontainer cart-container">
                    <div className="w-commerce-commercecartheader cart-header">
                      <h4 className="w-commerce-commercecartheading">{'Your Cart'}</h4>
                      <a
                        className="w-commerce-commercecartcloselink close-button w-inline-block"
                        role="button"
                        aria-label="Close cart"
                      >
                        <svg width="16px" height="16px" viewBox="0 0 16 16">
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g fillRule="nonzero" fill="#333333">
                              <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                    <div className="w-commerce-commercecartformwrapper">
                      <form style={{ display: 'none' }} className="w-commerce-commercecartform">
                        <div className="w-commerce-commercecartlist">
                          <div className="w-commerce-commercecartitem">
                            <img
                              alt=""
                              style={{ display: 'none' }}
                              className="w-commerce-commercecartitemimage w-dyn-bind-empty"
                            />
                            <div className="w-commerce-commercecartiteminfo">
                              <div className="w-commerce-commercecartproductname heading-six w-dyn-bind-empty" />
                              <div className="body-small-text">{'$0 '}</div>
                              <a
                                href="#"
                                role="button"
                                className="w-inline-block"
                                aria-label="Remove item from cart"
                              >
                                <div className="remove-button">{'Remove'}</div>
                              </a>
                            </div>
                            <input
                              aria-label="Update quantity"
                              className="w-commerce-commercecartquantity cart-quantity-input"
                              required
                              pattern="^[0-9]+$"
                              inputMode="numeric"
                              type="number"
                              name="quantity"
                              autoComplete="off"
                              defaultValue="1"
                            />
                          </div>
                        </div>
                        <div className="w-commerce-commercecartfooter cart-footer">
                          <div aria-atomic="true" aria-live="polite" className="w-commerce-commercecartlineitem">
                            <div>{'Subtotal'}</div>
                            <div className="w-commerce-commercecartordervalue heading-six" />
                          </div>
                          <div>
                            <a
                              href="#/checkout"
                              className="w-commerce-commercecartcheckoutbutton checkout-button"
                            >
                              {'Continue to Checkout'}
                            </a>
                          </div>
                        </div>
                      </form>
                      <div className="w-commerce-commercecartemptystate">
                        <div aria-label="This cart is empty" aria-live="polite">
                          {'No items found.'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-layout-hflex log-in-wrapper">
                <a href="#/sign-up" className="menu-font text-white">
                  {'Register'}
                </a>
                <div className="menu-border" />
                <a href="#/log-in" className="menu-font text-white">
                  {'Log in'}
                </a>
              </div>
            </div>

            <div
              className={`menu-button w-nav-button${menuOpen ? ' w--open' : ''}`}
              role="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              tabIndex={0}
            >
              <div className="menu-bars">
                <div className="bar menu-bar-one" />
                <div className="bar menu-bar-two" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
