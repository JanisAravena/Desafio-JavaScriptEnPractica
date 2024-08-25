let resultado = document.querySelector(".resultado");
let formulario = document.getElementById("formulario");

let txtNombre = document.getElementById("nombre");
let errorNombre = document.querySelector(".errorNombre");

let txtAsunto = document.getElementById("asunto");
let errorAsunto = document.querySelector(".errorAsunto");

let txtMensaje = document.getElementById("mensaje");
let errorMensaje = document.querySelector(".errorMensaje");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let regExLetras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    var nombre = txtNombre.value;
    var asunto = txtAsunto.value;
    var mensaje = txtMensaje.value;

    // Validación del nombre
    if (nombre == "") {
        errorNombre.innerHTML = "El nombre es requerido.";
    } else if (!regExLetras.test(nombre)) {
        errorNombre.innerHTML = "Por favor ingrese solo letras de la 'a' a la 'z'";
    } else {
        errorNombre.innerHTML = "";
    }

    // Validación del asunto
    if (asunto == "") {
        errorAsunto.innerHTML = "El asunto es requerido.";
    } else if (!regExLetras.test(asunto)) {
        errorAsunto.innerHTML = "Por favor ingrese solo letras de la 'a' a la 'z'";
    } else {
        errorAsunto.innerHTML = "";
    }

    // Validación del mensaje
    if (mensaje == "") {
        errorMensaje.innerHTML = "El mensaje es requerido.";
    } else if (!regExLetras.test(mensaje)) {
        errorMensaje.innerHTML = "Por favor ingrese solo letras de la 'a' a la 'z'";
    } else {
        errorMensaje.innerHTML = "";
    }

    // Si todos los campos son válidos, muestra éxito
    if (regExLetras.test(nombre) && regExLetras.test(asunto) && regExLetras.test(mensaje)) {
        resultado.innerHTML = "Mensaje enviado con éxito!!!";
        // Ya no se vacían los campos, mantén los valores
    } else {
        resultado.innerHTML = "";
    }
});
