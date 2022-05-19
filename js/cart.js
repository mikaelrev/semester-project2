import { getCartProducts } from "./tools/getCartProducts.js";
import createMenu from "./tools/createMenu.js";

createMenu();

const cartProducts = getCartProducts();

const cartContainer = document.querySelector(".cart-container");


if(cartProducts.length === 0) {
    cartContainer.innerHTML = "No items in cart";
}

cartProducts.forEach((product) => {
    cartContainer.innerHTML += `<div class="card" style="width: 18rem;">
                                    <img src="${product.image.url}" class="card-img-top" alt="${product.image.alternativeText}">
                                    <div class="card-body">
                                        <h5 class="card-title">${product.title}</h5>
                                        <p class="card-text">${product.price}$</p>
                                        <a href="product-details.html?id=${product.id}" class="btn btn-primary">View Product</a>
                                        <i class="fa-solid fa-cart-plus fa-2xl" data-id="${product.id}" data-title="${product.title}"></i>
                                    </div>
                                </div>`
});

