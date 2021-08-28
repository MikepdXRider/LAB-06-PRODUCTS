import { addProducts, getProducts } from './admin-utils.js';


const form = document.querySelector('#form');


form.addEventListener('submit', () => {
    event.preventDefault();

    const data = new FormData(form);
    
    //*Verifying User Input
    const objPropertiesArray = ['name', 'img', 'description', 'category', 'price'];
    for (let property of objPropertiesArray){
        if (data.get(`${property}`) === ''){
            alert('Please fill out all fields');
            return;
        }
    }
    //*
    
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