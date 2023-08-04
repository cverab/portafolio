export function validar(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.querySelector(".contacto__formulario-error").innerHTML = ""
    } else {
        input.parentElement.querySelector(".contacto__formulario-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no púede estar vacio",
        patternMismatch: "El campo nombre debe contener al menos 1 caracteres y máximo 50."
    },
    correo: {
        valueMissing: "El campo correo no púede estar vacio",
        typeMismatch: "El campo correo no es válido"
    },
    asunto: {
        valueMissing: "El campo asunto no debe estar en blanco o vacío",
        patternMismatch: "El campo asunto debe contener al menos 1 caracteres y máximo 50."
    },
    msj: {
        valueMissing: "El campo mensaje no debe estar en blanco o vacío",
        customError: "El campo mensaje debe contener al menos 1 caracteres y máximo 300."
    },
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ""
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        };
    });
    return mensaje
}

export function validarTextarea() {
    const textarea = document.getElementById("textarea");
    const textareaLongitud = textarea.value.length;
    if (textareaLongitud >= 300) {
        textarea.setCustomValidity("El campo mensaje debe contener al menos 1 caracteres y máximo 300.")
    }
}