import { baseUrl } from "./settings/api.js";
import { getCartProducts } from "./tools/getCartProducts.js";
import { handleClick } from "./tools/handleClick.js";
import { getUsername } from "./tools/storage.js";
import createMenu from "./tools/createMenu.js";


createMenu();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const productUrl = baseUrl + "products/" + id;

const username = getUsername();

const cart = getCartProducts();

(async function() {
    const response = await fetch(productUrl);
    const details = await response.json();

    document.title = details.title;

    let cssClass = "fa-cart-plus";

    let pathname = `<a href="product-details.html?id=${details.id}" class="btn btn-primary">View Product</a>`;

    if(username) {
        pathname += `<a href="edit.html?id=${details.id}" class="btn btn-secondary">Edit Product</a>`;
    }

    const isProductInCart = cart.find(function(productToCheck) {
        return parseInt(productToCheck.id) === details.id;
    });

    if(isProductInCart) {
        cssClass = "fa-cart-shopping";
    }   

    const detailsContainer = document.querySelector(".details-container");

    detailsContainer.innerHTML = `<div class="col">
                                        <div class="card" style="width: 40rem;">
                                            <img src="http://localhost:1337${details.image.url}" class="card-img-top" alt="${details.image.alternativeText}">
                                            <div class="card-body">
                                                <h5 class="card-title">${details.title}</h5>
                                                <p class="card-text">${details.description}</p>
                                                <p class="card-text">${details.price}$</p>
                                                <div class="btn-group">
                                                    ${pathname}
                                                </div>
                                                <i class="fa-solid ${cssClass} fa-2xl mt-4" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-image="http://localhost:1337${details.image.url}"></i>            
                                            </div>
                                        </div>
                                    </div>`

    const addToCart = document.querySelectorAll("i");

    addToCart.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
})();
