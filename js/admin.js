import { getToken } from "./tools/storage.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./tools/displayMessage.js";
import createMenu from "./tools/createMenu.js";

createMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm() {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const descriptionValue = description.value.trim();
    const priceValue = parseFloat(price.value);
    const imageValue = image.value;


    if(titleValue.length === 0 || descriptionValue.length === 0 || isNaN(priceValue) || priceValue.lenth === 0 || imageValue.length === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    }

    addProduct(titleValue, descriptionValue, priceValue, imageValue);
}

async function addProduct(title, description, price, image) {
    const url = baseUrl + "products";
    
    const data = JSON.stringify( { title: title, description: description, price: price, image_url: image });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.created_at) {
            displayMessage("success", "New product added", ".message-container");
            form.reset();
        }

        if(json.error) {
            displayMessage("error", json.message, ".message-container");
        }
        
    }
    catch(error) {
        console.log(error);
        displayMessage("error", "An error occured", ".message-container");
    }
}

