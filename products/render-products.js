import { addItemToCart } from '../cart-api.js';

export function renderProducts(obj){
    const li = document.createElement('li');
    const titleDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    const button = document.createElement('button');
    const img = document.createElement('img');
    const descriptionP = document.createElement('p');
    const priceDiv = document.createElement('div');
    const categoryP = document.createElement('p');
    const priceP = document.createElement('p');

    h3.textContent = obj.name;
    button.textContent = '+';
    img.src = obj.img;
    descriptionP.textContent = obj.description;
    categoryP.textContent = obj.category;
    priceP.textContent = `$${obj.price}`;

    li.classList.add('product-list-item');
    titleDiv.classList.add('title-button-container');
    h3.classList.add('product-name');
    button.classList.add('add-to-cart-button');
    button.setAttribute('id', 'add-to-cart-button');
    img.setAttribute('alt', 'product-image');
    descriptionP.classList.add('description');
    priceDiv.classList.add('flex-price-category');

    button.addEventListener('click', () => {
        addItemToCart(obj.id);
    });

    titleDiv.append(h3, button);
    priceDiv.append(categoryP, priceP);
    li.append(titleDiv, img, descriptionP, priceDiv);
    
    return li;
}