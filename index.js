const body = document.querySelector("body")
const container = document.createElement("div")
container.classList.add("container")
body.appendChild(container)

const title = document.createElement("h1")
title.classList.add("title")
title.textContent = "App Title"
container.appendChild(title)