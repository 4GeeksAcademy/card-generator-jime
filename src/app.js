/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let customHeight = 400;
let customWidth = 300;
let intervalId;
window.onload = function() {
  document
    .querySelector("#button")
    .addEventListener("click", generarCartaNueva);
  document.querySelector("#button1").addEventListener("click", () => {
    intervalId = setInterval(generarCartaNueva, 10000);
  });
  document.querySelector("#button2").addEventListener("click", () => {
    clearInterval(intervalId);
  });
  document.querySelector("#inputHeight").addEventListener("change", event => {
    customHeight = event.target.value;
    document.querySelector(".card").style.height = customHeight + "px";
  });

  document.querySelector("#inputWidth").addEventListener("change", event => {
    customWidth = event.target.value;
    document.querySelector(".card").style.width = customWidth + "px";
  });

  let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];

  function generarCartaNueva() {
    let pintas = ["♦", "♥", "♠", "♣"];

    function elegirAleatorio(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    const valorAleatorio = elegirAleatorio(cardValues);
    document.querySelector(".value").innerHTML = valorAleatorio;

    const pintaAleatoria = elegirAleatorio(pintas);
    document.querySelectorAll(".pinta").forEach(elementoPinta => {
      elementoPinta.innerHTML = pintaAleatoria;
      if (pintaAleatoria == "♥" || pintaAleatoria === "♦") {
        elementoPinta.style.color = "red";
      } else {
        elementoPinta.style.color = "black";
      }
    });
  }
  generarCartaNueva();
};
