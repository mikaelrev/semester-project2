import { baseUrl } from "./settings/api.js";
import displayMessage from "./tools/displayMessage.js";

const form =  document.querySelector("form");
const message = document.querySelector(".message-container");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


function submitForm() {
    event.preventDefault();

    message.innerHTML = "";

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue.length === 0 || passwordValue.length === 0) {
        displayMessage("warning", "Invalid values", ".message-container");
    }

    doLogin(emailValue, passwordValue);
}

form.addEventListener("submit", submitForm);

async function doLogin(email, password) {
    const url = baseUrl + "auth/local";

    const data = JSON.stringify({ identifier: email, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        },
    };

    try {
        const response = await fetch(url, options);
        const json = response.json();

        if(json.user) {
            displayMessage("Success", "Successfully logged in", ".message-container");
        }
        if(json.error) {
            displayMessage("warning", "Invalid login details", ".message-container");
        }
        console.log(json);
    }
    catch(error) {
        console.log(error)
    }
}



