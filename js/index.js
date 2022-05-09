import { baseUrl } from "./settings/api.js";

const heroUrl = baseUrl + "home";

const heroContainer = document.querySelector(".hero-container");

async function getHero() {
    const heroContainer = document.querySelector(".hero-container");

    const response = await fetch(heroUrl);
    const json = response.json();
    
    console.log(json);
}

getHero();
    


