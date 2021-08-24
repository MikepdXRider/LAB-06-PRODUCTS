// IMPORT MODULES under test here:
import { renderProducts } from '../products/render-products.js';
import { renderLineItems } from '../shopping-cart/render-line-items.js';

const test = QUnit.test;

test('input an object and return an HTML element', (expect) => {
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

test('input an object and return an HTML element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td>Classic Ducky</td><td>250000</td><td>2</td><td>500000</td></tr>'
    // Call the function you're testing and set the result to a const
    const actual = renderLineItems({ id: 1, quantity: 2 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});
