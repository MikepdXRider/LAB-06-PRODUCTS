import { addProducts, getProducts } from './admin-utils.js';


const form = document.querySelector('#form');


form.addEventListener('submit', () => {
    event.preventDefault();

    const data = new FormData(form);

    const products = getProducts();

    const newObj = {
        id: products.length + 1,
        name: data.get('name'),
        img: data.get('img'),
        description: data.get('description'),
        category: data.get('category'),
        price: data.get('price')
    };

    addProducts(newObj);

    window.location = '../z_products/index.html';
});