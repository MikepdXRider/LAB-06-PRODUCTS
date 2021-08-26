// IMPORT MODULES under test here:
import { renderProducts } from '../products/render-products.js';
import { renderLineItems } from '../shopping-cart/render-line-items.js';
import { findById } from '../utils.js';
import { calcItemTotal, calcOrderTotal } from '../shopping-cart/shopping-cart-utils.js';
// import { productsArray } from '../products/duckys.js';
// import { arrayOfCartObj } from '../shopping-cart/cart-data.js';

const test = QUnit.test;


test('input an id and array of products into findById function, expect an object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 1,
        name: 'Classic Ducky',
        img: '../assets/classic-ducky.png',
        description: 'Are all your friends "getting into coding"? This is perfect present for all the junior developers you might know.',
        category: 'Junior Dev',
        price: 250000
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, [{
        id: 1,
        name: 'Classic Ducky',
        img: '../assets/classic-ducky.png',
        description: 'Are all your friends "getting into coding"? This is perfect present for all the junior developers you might know.',
        category: 'Junior Dev',
        price: 250000
    }]);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected.outerHTML);
});


test('input 3 and 3 into calcItemTotal function, expect 9', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 9;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(3, 3);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('input an object into renderProducts function, expect an HTML element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="product-list-item"><div class="title-button-container"><h3 class="product-name">product-name</h3><button class="add-to-cart-button" id="add-to-cart-button">+</button></div><img src="https://placekitten.com/320/200" alt="product-image"><p class="description">Product description that is cool AF</p><div class="flex-price-category"><p>product-category</p><p>$4</p></div></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProducts({
        id: 1,
        name: 'product-name',
        img: 'https://placekitten.com/320/200',
        description: 'Product description that is cool AF',
        category: 'product-category',
        price: 4
    });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('Input a cart object into renderLineItems function, expect a string of HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td>Classic Ducky</td><td>250000</td><td>2</td><td>500000</td></tr>';
    // Call the function you're testing and set the result to a const
    const actual = renderLineItems({ id: 1, quantity: 2 });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});


test('Input arrayOfCartObj array and productsArray into calcOrderTotal function, expect 6000000', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '$250,000.00';
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal([{ id: 1, quantity: 1 }], [{
        id: 1,
        name: 'Classic Ducky',
        img: '../assets/classic-ducky.png',
        description: 'Are all your friends "getting into coding"? This is perfect present for all the junior developers you might know.',
        category: 'Junior Dev',
        price: 250000
    }]);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


// Test only works if cart and products are static.
// test('Input arrayOfCartObj array and productsArray into calcOrderTotal function, expect 6000000 out', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = '$6,000,000.00';
//     // Call the function you're testing and set the result to a const
//     const actual = calcOrderTotal(arrayOfCartObj, productsArray);
//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });


