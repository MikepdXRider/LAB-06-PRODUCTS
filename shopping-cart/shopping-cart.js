import { renderLineItems } from './render-line-items.js';
import { calcOrderTotal, getCart } from '../utils.js';
import { productsArray } from '../products/duckys.js';

const tBodyEl = document.querySelector('#t-body');
const tdCartTotal = document.getElementById('cart-total');

const cart = getCart();

for (let obj of cart) {
    const newTD = renderLineItems(obj);
    tBodyEl.append(newTD);
}

const cartTotal = calcOrderTotal(cart, productsArray);

tdCartTotal.textContent = cartTotal;
