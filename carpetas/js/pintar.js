const nombre = document.querySelector(".name")
const apellido = document.querySelector(".surname")
const bodyy = document.querySelector(".body")
const funPintar = () => {
    const crearHuno = document.createElement("h1")
    crearHuno.textContent = `${nombre.value} ${apellido.value}`
    bodyy.appendChild(crearHuno)
}

export default funPintar