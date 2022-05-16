export function renderProducts(productsToRender) {
    const productsContainer = document.querySelector(".products-container");
    productsContainer.innerHTML = "";

    productsToRender.forEach(function(product) {
        productsContainer.innerHTML += `<div class="card" style="width: 18rem;">
                                            <img src="http://localhost:1337${product.image.url}" class="card-img-top" alt="${product.image.alternativeText}">
                                            <div class="card-body">
                                                <h5 class="card-title">${product.title}</h5>
                                                <p class="card-text">${product.price}$</p>
                                                <a href="product-details.html?id=${product.id}" class="btn btn-primary">View Product</a>
                                            </div>
                                        </div>`
    });
}