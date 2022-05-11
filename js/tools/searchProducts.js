import { renderProducts } from "./renderProducts.js";

export default function searchProducts(data, targetElement) {
    const search = document.querySelector(".search");

    function filterProducts() {
        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProducts = data.filter(function(article) {
            if(article.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderProducts(filteredProducts, targetElement);
    }

    search.addEventListener("keyup", filterProducts)
}