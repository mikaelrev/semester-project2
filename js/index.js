import { baseUrl } from "./settings/api.js";

const heroUrl = baseUrl + "home/1";

(async function() {
    const heroContainer = document.querySelector(".hero-container");

    try {
        const response = await fetch(heroUrl);
        const json = await response.json();

        console.log(json);
    }
    catch(error) {
        console.log(error);
    }
})();

