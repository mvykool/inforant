import './style.css'
import axios from "axios";

const API = axios.create({
    baseURL: "https://valorant-api.com/v1/",
    params: {
        "isPlayableCharacter": "true"
    }
});

//button functionallity

const burgerMenu = document.querySelector(".side-nav-bar-mobile-menu");
const menu = document.querySelector(".side-nav-bar-container");
burgerMenu.addEventListener("click", () => {
    menu.style.marginRight = "0"
    burgerMenu.style.display = "none";
});

const closeMenu = document.querySelector(".side-nav-bar-close-menu");
closeMenu.addEventListener("click", () => {
    const menu = document.querySelector(".side-nav-bar-container");
    menu.style.marginRight = "-100%"
    burgerMenu.style.display = "block";
});


async function getBackground() {
    const results = await API("playercards/2d91369b-4fb5-28c6-3111-c285c9a32c2c");
    const data = results.data;
    console.log(data)

    const container = document.querySelector(".background");
    const img = document.createElement("img");
    img.setAttribute("src", data.data.largeArt);
    img.classList.add("img-bg-size");
    container.appendChild(img);


}

getBackground()

//call api for previews

async function getAgentPreview() {
    const results = await API("agents");
    const data = results.data.data.slice(0, 5);

    console.log(data)

    data.forEach(data => {
        const container = document.querySelector(".agents");
        const img = document.createElement("img");
        img.setAttribute("src", data.displayIcon);
        img.classList.add("img-preview-size");
        container.appendChild(img);
    });
}

getAgentPreview()