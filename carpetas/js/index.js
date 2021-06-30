import detectarClick from "./detectarClick.js"

document.addEventListener("click", (e) => {
    e.preventDefault()
    detectarClick(e, "#button")
})




