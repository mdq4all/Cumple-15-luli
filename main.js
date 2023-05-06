// import slideFade from "./slideFade.js";
import countdown from "./countdown.js";
import observerFunction from "./observer.js";
import modal from "./modal.js";
import formularioConfirmacion from "./formularioConfirmacion.js";
import accordion from "./accordion.js";

// const images = ["./img/luli-bg-1.jpg", "./img/luli-bg-2.jpg"];

// const imageContainer = document.querySelector("#slider-container");
// slideFade(images, imageContainer, 4000);
const countContainer = document.querySelector("#count_container");
countdown("May 10 2023 12:08:09 GMT-0300", countContainer, "finalFeliz");


//Animacion scrollUp
const animateElement = document.querySelector("#titulo_animado");
observerFunction(animateElement, "animate");

//Animacion demo pictures
const animateImg = document.querySelector("#demo_pictures");
observerFunction(animateImg, "animate_pictures");

modal();
formularioConfirmacion();
accordion();
