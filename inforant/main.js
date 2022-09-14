import './style.css'
import axios from "axios";
import { agentsPage } from './agents';
import { agentPageSection, homeSection } from './nodes';
import { getAgentPage } from './agents';


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


//get maps preview

async function getMapPreview() {
    const results = await API("maps");
    const data = results.data.data.slice(0, 3);


    console.log(data)

    data.forEach(data => {
        const container = document.querySelector(".maps");
        const img = document.createElement("img");
        img.setAttribute("src", data.splash);
        img.classList.add("img-preview-size");
        container.appendChild(img);
    });
}


//get cards preview

async function getCardPreview() {
    const results = await API("playercards");
    const data = results.data.data.slice(0, 5);

    console.log(data)

    data.forEach(data => {
        const container = document.querySelector(".cards");
        const img = document.createElement("img");
        img.setAttribute("src", data.displayIcon);
        img.classList.add("img-preview-size");
        container.appendChild(img);
    });
}


//get weapons preview

async function getWeaponPreview() {
    const results = await API("weapons");
    const data = results.data.data.slice(0, 5);

    console.log(data)

    data.forEach(data => {
        const container = document.querySelector(".weapons");
        const img = document.createElement("img");
        img.setAttribute("src", data.displayIcon);
        img.classList.add("img-preview-size");
        container.appendChild(img);
    });
}

//get modules

agentsPage()



window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchanged", navigator, false);


function navigator() {
    if (location.hash.startsWith("#agents")) {
        agentPage()
    } else if (location.hash.startsWith("#maps")) {
        mapsPage()
    } else if (location.hash.startsWith("#cards")) {
        cardsPage()
    } else if (location.hash.startsWith("#weapons")) {
        weaponsPage()
    } else if (location.hash.startsWith("#agent-info")) {
        agentInfoPage()
    } else {
        homePage()
    }
}

function homePage() {
    getWeaponPreview()
    getCardPreview()
    getMapPreview()
    getAgentPreview()
    agentPageSection.classList.add("inactive")

}

function agentPage() {
    homeSection.classList.add("inactive");
    getAgentPage()
}

import { toAgents } from './nodes';

toAgents.addEventListener("click", () => {
    location.hash = "#agents";
    window.location.reload();
})

import { toAgentsMenu } from './nodes';

toAgentsMenu.addEventListener("click", () => {
    location.hash = "#agents";
    window.location.reload();
})