const main = document.querySelector(".main")
const container = document.createElement("div")
container.classList.add("container")
main.appendChild(container)

const title = document.createElement("h1")
title.classList.add("title")
title.textContent = "App Title"
container.appendChild(title)