import { renderProducts } from './render-products.js';
import { productsArray } from './duckys.js';
import { calcOrderTotal } from '../utils.js';
import { arrayOfCartObj } from '../shopping-cart/cart-data.js';

const ul = document.getElementById('products-list');

for (let obj of productsArray) {
    let li = renderProducts(obj);
    ul.appendChild(li);
}
