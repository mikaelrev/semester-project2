import { baseUrl } from "./settings/api.js";

const heroUrl = baseUrl + "home";

(async function() {
    const heroContainer = document.querySelector(".hero-container");

    try {
        const response = await fetch(heroUrl);
        const json = await response.json();

        const hero = json.hero_banner;
        console.log(json);
    
        heroContainer.innerHTML = `<img src="${json.hero_banner.formats.large.url}" />`;
    }
    catch(error) {
        console.log(error);
    }
})();

    


