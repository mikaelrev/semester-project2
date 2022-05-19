import { getCartProducts } from "./getCartProducts.js";
import { handleClick } from "./handleClick.js";


export function renderProducts(productsToRender) {
    const productsContainer = document.querySelector(".products-container");
    productsContainer.innerHTML = "";

    const cart = getCartProducts();

    productsToRender.forEach(function(product) {
        let cssClass = "fa-cart-plus";

        const isProductInCart = cart.find(function(productToCheck) {
            return parseInt(productToCheck.id) === product.id;
        });

        if(isProductInCart) {
            cssClass = "fa-cart-shopping";
        }

        productsContainer.innerHTML += `<div class="card" style="width: 18rem;">
                                            <img src="http://localhost:1337${product.image.url}" class="card-img-top" alt="${product.image.alternativeText}">
                                            <div class="card-body">
                                                <h5 class="card-title">${product.title}</h5>
                                                <p class="card-text">${product.price}$</p>
                                                <a href="product-details.html?id=${product.id}" class="btn btn-primary">View Product</a>
                                                <i class="fa-solid ${cssClass} fa-2xl" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="http://localhost:1337${product.image.url}"></i>
                                            </div>
                                        </div>`
    });
    const addToCart = document.querySelectorAll("i");

    addToCart.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
}