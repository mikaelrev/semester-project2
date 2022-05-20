import { getUsername } from "./storage.js";
import { getToken } from "./storage.js";
import logoutButton from "../ui/logoutButton.js";

export default function createMenu() {

    const username = getUsername();

    let authLink = `<a href="login.html" class="nav-link">Login</a>`;
    const adminLink = `<a href="admin.html" class="nav-link">Add Product</a>`;

    if(username) {
        authLink = `<button class="btn btn-primary" id="logout">Logout ${username}</button>
                    <span>${adminLink}</span>`;
    }

    const container = document.querySelector(".login-container");

    container.innerHTML = `<div class="d-flex align-items-center gap-3">
                                ${authLink}
                            </div>`;

    logoutButton();
}