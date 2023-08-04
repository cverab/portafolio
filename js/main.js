import { validar } from "./validador.js"
import { validarTextarea } from "./validador.js"

const inputs = document.querySelectorAll(`[data-tipo]`);

inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        validar(input.target)
        validarTextarea(input.target)
    })
});