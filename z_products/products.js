import { renderProducts } from './render-products.js';
// import { productsArray } from './duckys.js';
import { getProducts } from '../z_admin-page/admin-utils.js';


const ul = document.getElementById('products-list');


const products = getProducts();

for (let obj of products) {
    let li = renderProducts(obj);
    ul.appendChild(li);
}