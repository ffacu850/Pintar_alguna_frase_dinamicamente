import funPintar from "./pintar.js"

const detectarClick = (e,selector) => {
    
    // if(e.target === (document.getElementById("button"))){
    if(e.target.matches(selector)){    
        funPintar()
        console.log("CLICK")
    }
}

export default detectarClick