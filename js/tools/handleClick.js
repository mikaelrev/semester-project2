import { getCartProducts } from "./getCartProducts.js";

export function handleClick() {
    this.classList.toggle("fa-cart-plus");
    this.classList.toggle("fa-cart-shopping");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const image = this.dataset.image;
    const price = this.dataset.price;

    const productsInCart = getCartProducts();

    const productExists = productsInCart.find(function(product) {
        return product.id === id;
    });

    if(!productExists) {
        const product = { 
            id: id, 
            title: title,
            image_url: image,
            price: price};
        
        productsInCart.push(product);
        
        addToCart(productsInCart);    
    }
    else {
        const newCart = productsInCart.filter((product) => product.id !== id);
        addToCart(newCart);
    }    
}

function addToCart(productsToAdd) {
    localStorage.setItem("products", JSON.stringify(productsToAdd));
}