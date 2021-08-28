import { renderProducts } from '../z_products/render-products.js';

const test = QUnit.test;

test('call renderProducts function, expect a string of HTML elements', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="product-list-item"><div class="title-button-container"><h3 class="product-name">product-name</h3><div><button class="add-to-cart-button" id="add-to-cart-button">+</button><form><select id="user-input"><option>1</option><option>2</option><option>3</option></select></form></div></div><img src="https://placekitten.com/320/200" alt="product-image"><p class="description">Product description that is cool AF</p><div class="flex-price-category"><p>product-category</p><p>$4</p></div></li>';
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