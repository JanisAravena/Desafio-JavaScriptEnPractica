// Obtiene referencias a los botones y campos de entrada
let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let resultado = document.querySelector(".resultado");

// Suma los valores de los campos y muestra el resultado
btnSumar.addEventListener("click", function(){
    var num1 = parseInt(valor1.value); // Convierte el valor1 a número entero
    var num2 = parseInt(valor2.value); // Convierte el valor2 a número entero
    let suma = num1 + num2; // Calcula la suma
    resultado.innerHTML = `${suma}`; // Muestra el resultado
});

// Resta los valores de los campos y muestra el resultado o 0 si es negativo
btnRestar.addEventListener("click", function(){
    var num1 = parseInt(valor1.value); // Convierte el valor1 a número entero
    var num2 = parseInt(valor2.value); // Convierte el valor2 a número entero
    let resta = num1 - num2; // Calcula la resta

    // Muestra 0 si el resultado es negativo, de lo contrario muestra el resultado
    if (resta < 0) {
        resultado.innerHTML = "0";
    } else {
        resultado.innerHTML = `${resta}`;
    }
});
