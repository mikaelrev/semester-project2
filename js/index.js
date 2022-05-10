import { baseUrl } from "./settings/api.js";

const heroUrl = baseUrl + "home";

(async function() {
    const heroContainer = document.querySelector(".hero-container");

    try {
        const response = await fetch(heroUrl);
        const json = await response.json();

        console.log(json);
    
        heroContainer.innerHTML = `<img src="http://localhost:1337${json.hero_banner.url}" />`;
    }
    catch(error) {
        console.log(error);
    }
})();


const featuredUrl = baseUrl + "products";

(async function() {
    const featuredContainer = document.querySelector(".featured-container");

    try {
        const response = await fetch(featuredUrl);
        const product = await response.json();

        featuredContainer.innerHTML = "";

        console.log(product);

        product.forEach(function (product) {
            if(product.featured === true) {
                featuredContainer.innerHTML += `<div class="card" style="width: 18rem;">
                                                    <img src="http://localhost:1337${product.image.url}" class="card-img-top" alt="${product.image.alternativeText}">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${product.title}</h5>
                                                        <p class="card-text">Description: ${product.description}</p>
                                                        <p class="card-text">Price: ${product.price}</p>
                                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>`;
            }
        })

        
    }
    catch(error) {
        console.log(error);
    }
})();

    


