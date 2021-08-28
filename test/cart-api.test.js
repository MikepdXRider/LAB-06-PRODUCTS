import { addItemToCart, CART, clearCart, getCart, setCart } from '../cart-api.js';


const test = QUnit.test;


test('call getCart, expect a staticCart', (expect) => {
    const staticCart = [{ id: 1, quantity: 1 }, { id: 2, quantity: 2 }];
    
    const serializedStateCart = JSON.stringify(staticCart);

    localStorage.setItem(CART, serializedStateCart);
    
    const actual = getCart(CART);

    expect.deepEqual(actual, staticCart);
});


test('call setCart, expect a staticCart', (expect) => {
    const staticCartArr = [{ id: 3, quantity: 3 }, { id: 4, quantity: 4 }];
    
    setCart(staticCartArr);
    
    const expected = JSON.parse(localStorage.getItem(CART));

    expect.deepEqual(staticCartArr, expected);
});


test('call clearCart, expect null', (expect) => {
    const anotherStaticCartArr = [{ id: 5, quantity: 5 }, { id: 6, quantity: 6 }];

    localStorage.setItem(CART, JSON.stringify(anotherStaticCartArr));
    
    clearCart();

    const actual = localStorage.getItem(CART);
    const expected = null;

    expect.equal(actual, expected);
});


test('call addItemToCart, expect a mutated cart', (expect) => {
    const beforeCart = [{ id: 1, quantity: 1 }, { id: 2, quantity: 2 }];

    localStorage.setItem(CART, JSON.stringify(beforeCart));

    addItemToCart(1, 1);
   
    const afterCart = [{ id: 1, quantity: 2 }, { id: 2, quantity: 2 }];
    
    const actual = JSON.parse(localStorage.getItem(CART));

    expect.deepEqual(actual, afterCart);
});


