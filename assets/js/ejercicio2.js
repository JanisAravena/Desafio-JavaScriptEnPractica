// Obtiene referencias a los botones y al div usando sus ID
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");
let divCaja = document.getElementById("caja");

// Cambia el color de fondo del div al hacer click en btn1
btn1.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #e53e3e");
});

// Cambia el color de fondo del div al hacer click en btn2
btn2.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #dd6b20");
});

// Cambia el color de fondo del div al hacer click en btn3
btn3.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #faf089");
});

// Cambia el color de fondo del div al hacer click en btn4
btn4.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #48bb78");
});

// Cambia el color de fondo del div al hacer click en btn5
btn5.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #81e6d9");
});

// Cambia el color de fondo del div al hacer click en btn6
btn6.addEventListener("click", function(){
    divCaja.setAttribute("style", "border:1px solid black;width: 100%;height: 100%; background-color: #d53f8c");
});
