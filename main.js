import countdown from "./countdown.js";
import observerFunction from "./observer.js";
import modal from "./modal.js";
import formularioConfirmacion from "./formularioConfirmacion.js";
import accordion from "./accordion.js";
import formularioCanciones from "./formularioCanciones.js";


const countContainer = document.querySelector("#count_container");
countdown("Aug 19 2023 21:00:00 GMT-0300", countContainer, "Feliz Cumple Lu!!!");


//Animacion scrollUp
const animateElement = document.querySelector("#titulo_animado");
observerFunction(animateElement, "animate");

//Animacion demo pictures
const animateImg = document.querySelector("#demo_pictures");
observerFunction(animateImg, "animate_pictures");

//Abre el modal
const btnAttendance = document.querySelector("#button_attendance");
btnAttendance.addEventListener("click", modal);

formularioConfirmacion();
formularioCanciones();

accordion();

console.log("version 1.1.2");

