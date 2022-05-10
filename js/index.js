import { baseUrl } from "./settings/api.js";

const heroUrl = baseUrl + "home";

(async function() {
    const heroContainer = document.querySelector(".hero-container");

    try {
        const response = await fetch(heroUrl);
        const json = await response.json();

        console.log(json);
    
        heroContainer.innerHTML = `<img src="http://localhost:1337${json.hero_banner.url}" />`;
    }
    catch(error) {
        console.log(error);
    }
})();

    


