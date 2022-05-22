import { getCartProducts } from "./tools/getCartProducts.js";
import createMenu from "./tools/createMenu.js";

createMenu();

const cartProducts = getCartProducts();

const cartContainer = document.querySelector(".cart-container");

if(cartProducts.length === 0) {
    cartContainer.innerHTML = "No items in cart";
}

const totalPrice = document.querySelector(".total-price");

totalPrice.innerHTML = "";

let total = 0;

cartProducts.forEach((product) => {
    
    total += parseFloat(product.price);

    totalPrice.innerHTML = `<h3>Total: $${total}</h3>`;

    cartContainer.innerHTML += `<div class="col-lg-3 col-md-6 mb-4">
                                    <div class="card">
                                        <img src="${product.image}" class="card-img-top" alt="${product.details}">
                                        <div class="card-body">
                                            <h5 class="card-title">${product.title}</h5>
                                            <p class="card-text">${product.price}$</p>
                                            <a href="product-details.html?id=${product.id}" class="btn btn-primary mb-2">View Product</a>            
                                        </div>
                                    </div>
                                </div>`
});

