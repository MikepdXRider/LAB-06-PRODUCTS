import { renderProducts } from './render-products.js';
import { productsArray } from './duckys.js';

const ul = document.getElementById('products-list');

for (let obj of productsArray) {
    let li = renderProducts(obj);
    ul.appendChild(li);
}
