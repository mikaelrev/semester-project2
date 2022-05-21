import { getCartProducts } from "./tools/getCartProducts.js";
import createMenu from "./tools/createMenu.js";

createMenu();

const cartProducts = getCartProducts();

console.log(cartProducts);

const cartContainer = document.querySelector(".cart-container");


if(cartProducts.length === 0) {
    cartContainer.innerHTML = "No items in cart";
}

cartProducts.forEach((product) => {
    cartContainer.innerHTML += `<div class="col-md-6 col-lg-4 col-xl-3 p-2 mb-5">
                                    <img src="${product.image}" class="w-100" alt="${product.image.alternativeText}">
                                    <h5>${product.title}</h5>
                                    <p>${product.price}$</p>
                                    <a href="product-details.html?id=${product.id}" class="btn btn-primary mb-2">View Product</a>
                                    <button class="btn btn-secondary">Remove from cart</button>
                                </div>`
});

