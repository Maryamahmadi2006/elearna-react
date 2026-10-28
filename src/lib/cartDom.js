// Renders the cart store into the reference drawer markup that both header
// components contain (there can be more than one instance per page). The
// static template item shipped by Webflow is reused as the per-row template;
// the empty-state and subtotal blocks are toggled around it.

import { getItems, getCartCount, setItemQty } from './cartStore.js';

export function syncCartDom() {
  const items = getItems();

  document
    .querySelectorAll('.w-commerce-commercecartcontainerwrapper')
    .forEach((drawer) => {
      const form = drawer.querySelector('.w-commerce-commercecartform');
      const list = drawer.querySelector('.w-commerce-commercecartlist');
      const empty = drawer.querySelector('.w-commerce-commercecartemptystate');
      const tmpl = list?.querySelector('.w-commerce-commercecartitem');
      if (!form || !list || !tmpl) return;

      // remove rows rendered on a previous pass, keep the template row
      Array.from(list.children).forEach((el) => {
        if (el !== tmpl) el.remove();
      });

      if (!items.length) {
        form.style.display = 'none';
        tmpl.style.display = 'none';
        if (empty) empty.style.display = '';
        return;
      }

      form.style.display = '';
      tmpl.style.display = '';
      if (empty) empty.style.display = 'none';

      items.forEach((item, idx) => {
        const row = idx === 0 ? tmpl : tmpl.cloneNode(true);
        if (idx !== 0) list.appendChild(row);

        const img = row.querySelector('.w-commerce-commercecartitemimage');
        if (img) {
          if (item.image) {
            img.src = item.image;
            img.style.display = '';
          } else {
            img.style.display = 'none';
          }
        }

        const name = row.querySelector('.w-commerce-commercecartproductname');
        if (name) name.textContent = item.title;

        const info = row.querySelector('.w-commerce-commercecartiteminfo');
        const priceEl = info?.querySelector('.body-small-text');
        if (priceEl) priceEl.textContent = item.price;

        // the static template shows CMS option lists / empty-bind styling
        row.querySelectorAll('.w-dyn-bind-empty').forEach((el) => {
          el.style.display = 'none';
        });
        const options = row.querySelector('.w-commerce-commercecartoptionlist');
        if (options) options.style.display = 'none';

        const qty = row.querySelector('.cart-quantity-input');
        if (qty) {
          qty.value = String(item.qty);
          qty.onchange = () => {
            const next = Math.max(1, Number(qty.value) || 1);
            setItemQty(idx, next);
          };
        }

        const remove = row.querySelector(
          'a[aria-label="Remove item from cart"]'
        );
        if (remove) remove.dataset.cartIndex = String(idx);
      });

      const subtotal = items.reduce((sum, it) => sum + it.priceNum * it.qty, 0);
      const value = drawer.querySelector('.w-commerce-commercecartordervalue');
      if (value) value.textContent = '$' + subtotal;
    });

  const count = getCartCount();
  document
    .querySelectorAll('.w-commerce-commercecartopenlinkcount')
    .forEach((el) => {
      el.textContent = String(count);
    });

  syncCheckoutDom(items);
}

/* Fills the checkout page's static "Items in Order" / order summary
   template rows from the demo cart (same clone-the-template approach). */
function syncCheckoutDom(items) {
  const subtotal = items.reduce((sum, it) => sum + it.priceNum * it.qty, 0);

  document
    .querySelectorAll('.w-commerce-commercecheckoutorderitemslist')
    .forEach((list) => {
      const tmpl = list.querySelector('.w-commerce-commercecheckoutorderitem');
      if (!tmpl) return;
      Array.from(list.children).forEach((el) => {
        if (el !== tmpl) el.remove();
      });
      if (!items.length) {
        tmpl.style.display = 'none';
        return;
      }
      tmpl.style.display = '';
      items.forEach((item, idx) => {
        const row = idx === 0 ? tmpl : tmpl.cloneNode(true);
        if (idx !== 0) list.appendChild(row);
        const img = row.querySelector('img');
        if (img) {
          if (item.image) {
            img.src = item.image;
            img.style.display = '';
          } else {
            img.style.display = 'none';
          }
        }
        const name = row.querySelector('.w-commerce-commerceboldtextblock');
        if (name) name.textContent = item.title;
        const qtyParts = row.querySelectorAll(
          '.w-commerce-commercecheckoutorderitemquantitywrapper div'
        );
        if (qtyParts[1]) qtyParts[1].textContent = String(item.qty);
        row.querySelectorAll('.w-dyn-bind-empty').forEach((el) => {
          el.style.display = 'none';
        });
        const options = row.querySelector(
          '.w-commerce-commercecheckoutorderitemoptionlist'
        );
        if (options) options.style.display = 'none';
      });
    });

  document
    .querySelectorAll('.w-commerce-commercecheckoutsummarylineitem')
    .forEach((line) => {
      const label = line.querySelector('div');
      const value = line.querySelector('div:last-child');
      if (!label || !value || label === value) return;
      const isTotal = value.classList.contains(
        'w-commerce-commercecheckoutsummarytotal'
      );
      if (isTotal || /total/i.test(label.textContent)) {
        value.textContent = '$' + subtotal;
      } else if (/subtotal/i.test(label.textContent)) {
        value.textContent = '$' + subtotal;
      }
    });

  // the static "extra items" (taxes/shipping) row stays at $0
  document
    .querySelectorAll('.w-commerce-commercecheckoutordersummaryextraitemslist')
    .forEach((el) => {
      el.style.display = 'none';
    });
}
