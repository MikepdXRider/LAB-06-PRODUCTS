import { productsArray } from './products/duckys.js';

export function findById(id, arrayOfProducts){
    for (let item of arrayOfProducts){
        if (item.id === id){
            return item;
        }
    }
}


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


// - function setCart(array)
export function setCart(array){
//     1. Serialize array(JSON.stringify()).
    const stringyArray = JSON.stringify(array);
//     2. localStorage.setItem('ARRAY KEY', serialized array)
    localStorage.setItem('CART', stringyArray);
}

// - function getCart()
export function getCart(){
//     1. localStorage.getItem('ARRAY KEY')
    const retrievedCart = localStorage.getItem('CART');
//     2. deserialize array(JSON.parse())
    const unpackedCart = JSON.parse(retrievedCart);
//     3. return cart
    return unpackedCart;
}

// - function addItemToCart(id)
export function addItemToCart(id){
//     1. call getCart()
    const cart = getCart()
//     2. call findByID(id)
    const objInCart = findById(id, productsArray);
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