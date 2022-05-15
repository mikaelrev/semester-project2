import { baseUrl } from "./settings/api.js";
import { handleClick } from "./tools/handleClick.js";
import { getCartProducts } from "./tools/getCartProducts.js";

const cart = getCartProducts();

const heroUrl = baseUrl + "home";

(async function() {
    const heroContainer = document.querySelector(".hero-container");

    try {
        const response = await fetch(heroUrl);
        const json = await response.json();
    
        heroContainer.innerHTML = `<img src="http://localhost:1337${json.hero_banner.url}" />`;
    }
    catch(error) {
        console.log(error);
    }
})();


const featuredUrl = baseUrl + "products/";

(async function() {
    const featuredContainer = document.querySelector(".featured-container");

    try {
        const response = await fetch(featuredUrl);
        const product = await response.json();

        featuredContainer.innerHTML = "";

        product.forEach(function (product) {
            if(product.featured === true) {

                let cssClass = "fa-cart-plus";

                const isProductInCart = cart.find(function(productToCheck) {
                    return parseInt(productToCheck.id) === product.id;
                });

                if(isProductInCart) {
                    cssClass = "fa-cart-shopping";
                }

                featuredContainer.innerHTML += `<div class="card" style="width: 18rem;">
                                                    <img src="http://localhost:1337${product.image.url}" class="card-img-top" alt="${product.image.alternativeText}">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${product.title}</h5>
                                                        <p class="card-text">${product.price}$</p>
                                                        <a href="product-details.html?id=${product.id}" class="btn btn-primary">View Product</a>
                                                        <i class="fa-solid ${cssClass} fa-2xl" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="http://localhost:1337${product.image.url}"></i>
                                                    </div>
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
})();






    


