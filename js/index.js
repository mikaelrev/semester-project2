import { baseUrl } from "./settings/api.js";
import { renderFeatured } from "./tools/renderFeatured.js";
import createMenu from "./tools/createMenu.js";


createMenu();

const heroUrl = baseUrl + "home";

(async function() {
    const heroContainer = document.querySelector(".hero-container");

    try {
        const response = await fetch(heroUrl);
        const json = await response.json();
    
        heroContainer.innerHTML = `<img src="http://localhost:1337${json.hero_banner.url}" />`;
    }
    catch(error) {
        console.log(error);
    }
})();

renderFeatured();









    


