import { addProducts, PRODUCTS } from '../z_admin-page/admin-utils.js';

const test = QUnit.test;

test('call addProducts, expect static object', (expect) => {
    //clears storage of any products
    localStorage.clear(PRODUCTS);
    
    const staticProductObject = { name: 'Test Ducky', img: 'https://placekitten.com/', description: 'Test description', category: 'Test', price: 200 };
    
    addProducts(staticProductObject);

    const productsArray = JSON.parse(localStorage.getItem(PRODUCTS));

    const actual = productsArray[6];

    expect.deepEqual(actual, staticProductObject);
});