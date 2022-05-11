import { fetchProducts } from "../products.js";

export function searchProducts(data, targetElement) {
    const search = document.querySelector(".search");

    function filterProducts() {
        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProducts = data.filter(function(product) {
            if(product.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        console.log(search);

        fetchProducts(filteredProducts, targetElement);
    }

    search.addEventListener("keyup", filterProducts)
}