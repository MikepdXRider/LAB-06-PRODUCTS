import { renderLineItems } from '../shopping-cart/render-line-items.js';

const test = QUnit.test;

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