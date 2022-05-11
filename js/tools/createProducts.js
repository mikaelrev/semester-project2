import displayMessage from "../settings/displayMessage.js";
import { noResults } from "../settings/noResultsMessage.js";

export default function createProducts(data, targetElement) {
    const productsContainer = document.querySelector
    productsContainer.innerHTML = "";

        products.forEach(function(product) {
            productsContainer.innerHTML += `<div class="card" style="width: 18rem;">
                                                <img src="http://localhost:1337${product.image.url}" class="card-img-top" alt="${product.image.alternativeText}">
                                                <div class="card-body">
                                                    <h5 class="card-title">${product.title}</h5>
                                                    <p class="card-text">${product.description}</p>
                                                    <p class="card-text">${product.price}$</p>
                                                    <a href="#" class="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>`
        })
}