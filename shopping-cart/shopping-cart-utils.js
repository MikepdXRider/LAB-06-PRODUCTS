import { findById } from '../utils.js';

export function calcItemTotal(price, quantity){
    return price * quantity;
}

export function calcOrderTotal(cartArray, arrayofProducts){
    let accumulator = 0;

    for (let item of cartArray){
        const product = findById(item.id, arrayofProducts);
        accumulator = accumulator + calcItemTotal(product.price, item.quantity);
    }

    return accumulator.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}