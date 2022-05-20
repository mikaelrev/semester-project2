import { baseUrl } from "./settings/api.js";
import displayMessage from "./tools/displayMessage.js";
import { saveToken, saveUser } from "./tools/storage.js";
import createMenu from "./tools/createMenu.js";

const form =  document.querySelector("form");
const message = document.querySelector(".message-container");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

createMenu();

form.addEventListener("submit", submitForm);

function submitForm() {
    event.preventDefault();

    message.innerHTML = "";

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "Invalid values", ".message-container");
    }

    doLogin(emailValue, passwordValue);
}

async function doLogin(email, password) {
    const url = baseUrl + "auth/local";

    const data = JSON.stringify({ identifier: email, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.user) {
            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "/";
        }
        if(json.error) {
            displayMessage("warning", "Email or password incorrect", ".message-container");
        }
    }
    catch(error) {
        console.log(error)
    }
}



