import { baseUrl } from "./settings/api.js";
import createMenu from "./tools/createMenu.js";
import displayMessage from "./tools/displayMessage.js";
import deleteButton from "./ui/deleteButton.js";
import { getToken } from "./tools/storage.js";

const token = getToken();

if(!token) {
    location.href = "/";
}

createMenu();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const productUrl = baseUrl + "products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");

(async function() {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        console.log(details);

        title.value = details.title;
        description.value = details.description;
        price.value = details.price;
        idInput.value = details.id;

        deleteButton(details.id);
    }
    catch(error) {
        console.log(error);
    }
})();

form.addEventListener("submit", submitForm);

function submitForm() {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const descriptionValue = description.value.trim();
    const priceValue = parseFloat(price.value);
    const idValue = idInput.value;

    if(titleValue.length === 0 || descriptionValue.length === 0 || isNaN(priceValue) || priceValue.lenth === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    }

    updateProduct(titleValue, descriptionValue, priceValue, idValue);
}

async function updateProduct(title, description, price, id) {
    const url = baseUrl + "products/" + id;

    const data = JSON.stringify( { title: title, description: description, price: price });

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.updated_at) {
            displayMessage("success", "Product updated", ".message-container");
        }
        if(json.error) {
            displayMessage("error", json.error, ".message-container");
        }
    }
    catch(error) {
        console.log(error);
    }

}

