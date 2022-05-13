import { getCartProducts } from "./getCartProducts.js";

export function handleClick() {
    this.classList.toggle("fa-cart-plus");
    this.classList.toggle("fa-cart-shopping");

    const id = this.dataset.id;
    const title = this.dataset.title;

    const productsInCart = getCartProducts();
    console.log(productsInCart);
}