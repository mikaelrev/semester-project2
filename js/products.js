import { renderProducts } from "./tools/renderProducts.js";
import { searchProducts } from "./tools/searchProducts.js";
import { productsUrl } from "./settings/api.js";


async function getProducts() {
    try {
        const response = await fetch(productsUrl);
        const products = await response.json();

        renderProducts(products);
        searchProducts(products);
    }
    catch(error) {
        console.log(error);
    }
}

getProducts();

