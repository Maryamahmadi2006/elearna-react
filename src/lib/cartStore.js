// Tiny module-level cart store. There is no backend on the reference site
// either (Webflow commerce), so this is a front-end demo cart: add to cart
// from any course/product page, see the item in the header drawer, remove
// it, and continue to the (static) checkout page.

let items = [];
const listeners = new Set();

function emit() {
  window.dispatchEvent(new CustomEvent('elearna:cart-changed'));
  listeners.forEach((fn) => fn());
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getItems() {
  return items;
}

export function getCartCount() {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

function parsePrice(price) {
  const match = String(price ?? '').match(/[\d.]+/);
  return match ? Number(match[0]) : 0;
}

export function addToCart({ title, price, image, qty = 1 }) {
  const existing = items.find((item) => item.title === title);
  if (existing) {
    items = items.map((item) =>
      item === existing ? { ...item, qty: item.qty + qty } : item
    );
  } else {
    items = [
      ...items,
      {
        title: title || 'Course',
        price: price || '$0',
        priceNum: parsePrice(price),
        image: image || '',
        qty,
      },
    ];
  }
  emit();
}

export function removeFromCart(index) {
  items = items.filter((_, i) => i !== index);
  emit();
}

export function setItemQty(index, qty) {
  items = items.map((item, i) => (i === index ? { ...item, qty } : item));
  emit();
}

export function clearCart() {
  items = [];
  emit();
}
