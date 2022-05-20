import { baseUrl } from "./settings/api.js";
import createMenu from "./tools/createMenu.js";

createMenu();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const productUrl = baseUrl + "products/" + id;

(async function() {
    const response = await fetch(productUrl);
    const details = await response.json();

    document.title = details.title;

    const detailsContainer = document.querySelector(".details-container");

        detailsContainer.innerHTML = `<div class="card" style="width: 18rem;">
                                        <img src="http://localhost:1337${details.image.url}" class="card-img-top" alt="${details.image.alternativeText}">
                                            <div class="card-body">
                                                <h5 class="card-title">${details.title}</h5>
                                                <p class="card-text">${details.description}</p>
                                                <p class="card-text">${details.price}$</p>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                            </div>
                                    </div>`

    console.log(details);
})();
