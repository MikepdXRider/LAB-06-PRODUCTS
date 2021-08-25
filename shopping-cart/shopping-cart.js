import { renderLineItems } from './render-line-items.js';
import { calcOrderTotal } from './shopping-cart-utils.js';
import { productsArray } from '../products/duckys.js';
import { getCart, clearCart } from '../cart-api.js';

const tBodyEl = document.querySelector('#t-body');
const tdCartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

const cart = getCart();

for (let obj of cart) {
    const newTD = renderLineItems(obj);
    tBodyEl.append(newTD);
}

const cartTotal = calcOrderTotal(cart, productsArray);

tdCartTotal.textContent = cartTotal;

    //User clicks 'Check Out' button.
checkoutButton.addEventListener('click', () => {
    //     - getCart() to retrieve cart array
    const cartContents = getCart();
    //     - stringify array so it's pretty.
    const cartContentsString = JSON.stringify(cartContents, true, 2);
    // 1. Alert user of cart contents
    alert(cartContentsString);
    // 2. Clear cart contents.
    clearCart();
    // 3. Take user to home. 
    window.location = '../index.html';
});

