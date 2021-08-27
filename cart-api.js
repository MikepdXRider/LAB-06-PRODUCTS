import { findById } from './utils.js';


export function setCart(array){

    const serializedCartArray = JSON.stringify(array);
  
    localStorage.setItem('CART', serializedCartArray);
}
    
    
export function getCart(){
   
    const serializedCartArray = localStorage.getItem('CART');
   
    if (serializedCartArray === null){
        return [];
    }

    if (serializedCartArray){
        const deserializedCartArray = JSON.parse(serializedCartArray);

        return deserializedCartArray;
    }
}
    
    
export function addItemToCart(id, userInput){

    const cart = getCart();

    const objInCart = findById(id, cart);

    if (!objInCart){
        const newObj = { id : id, quantity: userInput };
        cart.push(newObj);
    }
   
    if (objInCart){
        objInCart.quantity += userInput;
    }

    setCart(cart);
}
    
    
export function clearCart(){
    localStorage.clear('CART');    
}


export function checkCartStatus(){
    const stringyArray = localStorage.getItem('CART');
    return stringyArray ? true : false;
}