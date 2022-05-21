import { getCartProducts } from "./getCartProducts.js";
import { getUsername } from "./storage.js";
import { handleClick } from "./handleClick.js";


export function renderProducts(productsToRender) {
    const productsContainer = document.querySelector(".products-container");
    productsContainer.innerHTML = "";

    console.log(productsToRender);

    const cart = getCartProducts();

    const username = getUsername();

    productsToRender.forEach(function(product) {
        let cssClass = "fa-cart-plus";

        let pathname = `<a href="product-details.html?id=${product.id}" class="btn btn-primary">View Product</a>`;

        if(username) {
            pathname = `<a href="edit.html?id=${product.id}" class="btn btn-primary">Edit Product</a>`;
        }

        const isProductInCart = cart.find(function(productToCheck) {
            return parseInt(productToCheck.id) === product.id;
        });

        if(isProductInCart) {
            cssClass = "fa-cart-shopping";
        }   

        productsContainer.innerHTML += `<div class="col-md-6 col-lg-4 col-xl-3 p-2 mb-5">
                                            <img src="http://localhost:1337${product.image.url}" class="w-100">
                                            <h5 class="my-3">${product.title}</h5>
                                            <p>${product.price}$</p>
                                            ${pathname}
                                            <i class="fa-solid ${cssClass} fa-2xl" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="http://localhost:1337${product.image.url}"></i>
                                        </div>`
    });

    const addToCart = document.querySelectorAll("i");

    addToCart.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
}