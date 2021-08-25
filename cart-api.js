import { findById } from './utils.js';

// - function setCart(array)
export function setCart(array){
    //     1. Serialize array(JSON.stringify()).
    const serializedCartArray = JSON.stringify(array);
    //     2. localStorage.setItem('ARRAY KEY', serialized array)
    localStorage.setItem('CART', serializedCartArray);
}
    
    
    // - function getCart()
export function getCart(){
    //     1. localStorage.getItem('ARRAY KEY')
    const serializedCartArray = localStorage.getItem('CART');
    //     1a. if retrieved cart is null, return an empty array.
    if (serializedCartArray === null){
        return [];
    } else {
    //     2. deserialize array(JSON.parse())
        const deserializedCartArray = JSON.parse(serializedCartArray);
    //     3. return cart
        return deserializedCartArray;
    }
}
    
    
    // - function addItemToCart(id)
export function addItemToCart(id){
    //     1. call getCart()
    const cart = getCart();
    //     2. call findByID(id)
    const objInCart = findById(id, cart);
    //     3. if there is no object that matches the id:
    if (!objInCart){
    //         - Create new object with the passed id and a new quantity.
        const newObj = { id : id, quantity: 1 };
    //         - push new object to array.
        cart.push(newObj);
    }
    //     4. if there is a matching object:
    if (objInCart){
    //         - increase the objects quantity
        objInCart.quantity++;
    //         - **Stretch Goal: Allow user to set/specificy a desired quantity before clicking add.
    }
    //     5. call setCart(returned array from step 1).
    setCart(cart);
}
    
    
    // - function clearCart()
export function clearCart(){
    //     1. localStorage.clear('ARRAY KEY');
    localStorage.clear('CART');    
}