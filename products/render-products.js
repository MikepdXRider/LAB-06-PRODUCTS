import { addItemToCart } from '../cart-api.js';


export function renderProducts(obj){
    const li = document.createElement('li');
    const titleDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    const button = document.createElement('button');
    const form = document.createElement('form');
    const select = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    const img = document.createElement('img');
    const descriptionP = document.createElement('p');
    const priceDiv = document.createElement('div');
    const categoryP = document.createElement('p');
    const priceP = document.createElement('p');

    h3.textContent = obj.name;
    button.textContent = '+';
    option1.textContent = '1';
    option2.textContent = '2';
    option3.textContent = '3';
    img.src = obj.img;
    descriptionP.textContent = obj.description;
    categoryP.textContent = obj.category;
    priceP.textContent = `$${obj.price}`;

    li.classList.add('product-list-item');
    titleDiv.classList.add('title-button-container');
    h3.classList.add('product-name');
    button.classList.add('add-to-cart-button');
    button.setAttribute('id', 'add-to-cart-button');
    select.setAttribute('id', 'user-input');
    img.setAttribute('alt', 'product-image');
    descriptionP.classList.add('description');
    priceDiv.classList.add('flex-price-category');

    button.addEventListener('click', () => {
        const userQtyInput = Number(select.value);
        addItemToCart(obj.id, userQtyInput);
    });

    select.append(option1, option2, option3);
    form.append(select);
    titleDiv.append(h3, button, form);
    priceDiv.append(categoryP, priceP);
    li.append(titleDiv, img, descriptionP, priceDiv);
    
    return li;
}