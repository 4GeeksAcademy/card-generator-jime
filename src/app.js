/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];
  let pintas = ["♦", "♥", "♠", "♣"];

  function elegirAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const valorAleatorio = elegirAleatorio(cardValues);
  document.querySelector(".value").innerHTML = valorAleatorio;

  const pintaAleatoria1 = elegirAleatorio(pintas);
  document.querySelector(".pinta1").innerHTML = pintaAleatoria1;
  document.querySelector(".pinta2").innerHTML = pintaAleatoria1;
  document.querySelector(".pinta3").innerHTML = pintaAleatoria1;
  document.querySelector(".pinta4").innerHTML = pintaAleatoria1;
};
