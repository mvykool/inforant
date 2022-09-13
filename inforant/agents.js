//agents page

import axios from "axios";
const API = axios.create({
    baseURL: "https://valorant-api.com/v1/",
    params: {
        "isPlayableCharacter": "true"
    }
});


export async function getAgentPage() {
    const results = await API("agents");
    const data = results.data.data;

    console.log(data)

    data.forEach(data => {
        const container = document.querySelector(".agents-page-container");
        const img = document.createElement("img");
        img.setAttribute("src", data.displayIcon);
        img.classList.add("img-agent-size");
        const name = document.createElement("p");
        name.innerText = data.displayName;
        name.classList.add("agent-name");
        container.appendChild(img);
        container.appendChild(name);
    });
}

export function agentsPage(e) { document.querySelector("#agents-page").innerHTML = `
<section class="agents-page-section" id="agents-page-section">
      <h1 class="agents-page-title">Agents</h1>
    <div class="agents-page-container">

    </div>
</section>
` }