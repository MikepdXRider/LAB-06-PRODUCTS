import { renderLineItems } from './render-line-items.js';
import { arrayOfCartObj } from './cart-data.js';
import { calcOrderTotal } from '../utils.js';
import { productsArray } from '../products/duckys.js';

const tBodyEl = document.querySelector('#t-body');
const tdCartTotal = document.getElementById('cart-total');

for (let obj of arrayOfCartObj) {
    const newTD = renderLineItems(obj);
    tBodyEl.append(newTD);
}

const cartTotal = calcOrderTotal(arrayOfCartObj, productsArray);

tdCartTotal.textContent = cartTotal;
