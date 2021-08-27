import { productsArray } from '../z_products/duckys.js';


export const PRODUCTS = 'PRODUCTS';


export function setProducts(array){

    const serializedProductArray = JSON.stringify(array);
  
    localStorage.setItem(PRODUCTS, serializedProductArray);
}


export function getProducts(){
   
    const serializedProductArray = localStorage.getItem(PRODUCTS);
   
    if (serializedProductArray === null){
        return productsArray;
    }

    if (serializedProductArray){
        const deserializedProductArray = JSON.parse(serializedProductArray);

        return deserializedProductArray;
    }
}


export function addProducts(object){

    const products = getProducts();
    
    products.push(object);

    setProducts(products);
}