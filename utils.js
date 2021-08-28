
export function findById(id, arrayOfProducts){
    for (let item of arrayOfProducts){
        if (item.id === id){
            return item;
        }
    }
}

import { checkCartStatus } from './cart-api.js';

export const cartLinkNodeList = document.querySelectorAll('.cart-link');
// Check cart if empty before allowing link to go through.


for (let i = 0; i < cartLinkNodeList.length; i++){
    const checkCart = checkCartStatus();
    if (checkCart === false) {
        cartLinkNodeList[i].style.visibility = 'hidden';
    }
}