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

        productsContainer.innerHTML += `<div class="card" style="width: 18rem;">
                                            <img src="http://localhost:1337${product.image.url}" class="card-img-top">
                                            <div class="card-body">
                                                <h5 class="card-title">${product.title}</h5>
                                                <p class="card-text">${product.price}$</p>
                                                ${pathname}
                                                <i class="fa-solid ${cssClass} fa-2xl" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="http://localhost:1337${product.image.url}"></i>
                                            </div>
                                        </div>`
    });

    const addToCart = document.querySelectorAll("i");

    addToCart.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
}