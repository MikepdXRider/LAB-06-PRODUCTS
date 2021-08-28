import { checkCartStatus } from './cart-api.js';


export function findById(id, arrayOfProducts){
    for (let item of arrayOfProducts){
        if (item.id === id){
            return item;
        }
    }
}

//* Check cart if empty before allowing link to go through.
export const cartLinkNodeList = document.querySelectorAll('.cart-link');

for (let i = 0; i < cartLinkNodeList.length; i++){
    const checkCart = checkCartStatus();
    if (checkCart === false) {
        cartLinkNodeList[i].style.visibility = 'hidden';
    }
}
//*