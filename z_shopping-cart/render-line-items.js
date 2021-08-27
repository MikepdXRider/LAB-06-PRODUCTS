import { findById } from '../utils.js';
import { getProducts } from '../z_admin-page/admin-utils.js';
// import { productsArray } from '../z_products/duckys.js';
import { calcItemTotal } from './shopping-cart-utils.js';

const products = getProducts();

export function renderLineItems(cartObj){
    const tablerow = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    const productObj = findById(cartObj.id, products);
    tdName.textContent = productObj.name;
    tdPrice.textContent = productObj.price;
    tdQuantity.textContent = cartObj.quantity;
    tdTotal.textContent = calcItemTotal(productObj.price, cartObj.quantity);

    tablerow.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tablerow;
}

