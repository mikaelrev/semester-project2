import { baseUrl } from "./settings/api.js";
import { renderProducts } from "./tools/renderProducts.js";
import { searchProducts } from "./tools/searchProducts.js";
import createMenu from "./tools/createMenu.js";

createMenu();

const productsUrl = baseUrl + "products/";

(async function() {
    try {
        const response = await fetch(productsUrl);
        const products = await response.json();

        renderProducts(products);
        searchProducts(products);
    }
    catch(error) {
        console.log(error);
    }
})();





