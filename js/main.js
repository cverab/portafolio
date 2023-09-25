import { validar } from "./validador.js"
import { validarTextarea } from "./validador.js"

const inputs = document.querySelectorAll(`[data-tipo]`);

inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        validar(input.target)
        validarTextarea(input.target)
    })
});

const btn = document.querySelector(".contacto__formulario-texto-boton");
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subj = document.getElementById("subj");
    const messaje = document.getElementById("textarea");

    if (name.validity.valid && email.validity.valid && subj.validity.valid && messaje.validity.valid == true) {
        alert("Formulario validado")
    }
})