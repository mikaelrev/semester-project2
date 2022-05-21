import { baseUrl } from "../settings/api.js";
import { handleClick } from "./handleClick.js";
import { getCartProducts } from "./getCartProducts.js";
import { getUsername } from "./storage.js";

export async function renderFeatured() {
    const featuredContainer = document.querySelector(".featured-container");
    const featuredUrl = baseUrl + "products/";
    
    const cart = getCartProducts();
    
    try {
        const response = await fetch(featuredUrl);
        const product = await response.json();

        featuredContainer.innerHTML = "";

        console.log(product);

        const username = getUsername();

        product.forEach(function (product) {
            if(product.featured === true) {

                let cssClass = "fa-cart-plus";

                let pathname = `<a href="product-details.html?id=${product.id}" class="btn btn-primary mb-3">View Product</a>`;

                if(username) {
                    pathname = `<a href="edit.html?id=${product.id}" class="btn btn-primary mb-3">Edit Product</a>`;
                }

                const isProductInCart = cart.find(function(productToCheck) {
                    return parseInt(productToCheck.id) === product.id;
                });

                if(isProductInCart) {
                    cssClass = "fa-cart-shopping";
                }

                featuredContainer.innerHTML += `<div class="col-md-6 col-lg-4 col-xl-3 p-2 mb-5">
                <img src="http://localhost:1337${product.image.url}" class="w-100">
                <h5 class="my-3">${product.title}</h5>
                <p>${product.price}$</p>
                ${pathname}
                <i class="fa-solid ${cssClass} fa-2xl" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="http://localhost:1337${product.image.url}"></i>
            </div>`;
            }
            const addToCart = document.querySelectorAll("i");

            addToCart.forEach((button) => {
                button.addEventListener("click", handleClick);
            });
        })    
    }
    catch(error) {
        console.log(error);
    }
};