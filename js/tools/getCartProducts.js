export function getCartProducts() {
    const productsInCart = localStorage.getItem("cart");

    if (productsInCart === null) {
        return [];
    }
    else {
        return inCart;
    }
}