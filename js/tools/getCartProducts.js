export function getCartProducts() {
    const productsInCart = localStorage.getItem("products");

    if (productsInCart === null) {
        return [];
    }
    else {
        return JSON.parse(productsInCart);
    }
}