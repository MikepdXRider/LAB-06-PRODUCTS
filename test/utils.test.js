import { findById } from '../utils.js';

const test = QUnit.test;

test('call findById, expect an object', (expect) => {
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