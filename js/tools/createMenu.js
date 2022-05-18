import { getUsername } from "./storage.js";

export default function createMenu() {

    const username = getUsername();

    let authLink = `<a href="login.html" class="nav-link">Login</a>`;
    const adminLink = `<a href="admin.html" class="nav-link">Admin Page</a>`;

    if(username) {
        authLink = `<span>Hi ${username}</span>
                    <span> ${adminLink}</span>`;
    }

    const container = document.querySelector(".login-container");

    container.innerHTML = `<div class="d-flex align-items-center gap-3">
                                ${authLink}
                            </div>`;
}