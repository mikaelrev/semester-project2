export function addToCart(productsToAdd) {
    localStorage.setItem("products", JSON.stringify(productsToAdd));
}