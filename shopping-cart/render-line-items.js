import { arrayOfCartObj } from './cart-data.js';
import { findById, calcItemTotal } from '../utils.js';
import { productsArray } from '../products/duckys.js';

export function renderLineItems(cartObj){
    const tablerow = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    const productObj = findById(cartObj.id, productsArray);
    tdName.textContent = productObj.name;
    tdPrice.textContent = productObj.price;
    tdQuantity.textContent = cartObj.quantity;
    tdTotal.textContent = calcItemTotal(productObj.price, cartObj.quantity);

    tablerow.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tablerow;
}

