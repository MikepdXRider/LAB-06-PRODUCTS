import { calcItemTotal, calcOrderTotal } from '../shopping-cart/shopping-cart-utils.js';

const test = QUnit.test;

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
