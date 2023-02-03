/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = nombreDominio();
  });

  var pronoun = ["el", "la", "nuestro"];
  var adj = ["grande", "valiente", "nuevo", "viejo"];
  var noun = ["amor", "avion", "perro", "gato", "loba"];

  let names = [
    "carro",
    "disco",
    "salPique",
    "clara-mente",
    "ferrari",
    "twingo",
    "rolex",
    "casio"
  ];
  let domain = [".es", ".com", ".eu", ".org", ".net", ".info"];
};

// /* CÓDIGO PARA CABIAR EL BACKGROUND DE COLOR */ //
const button = document.getElementById("change");
const color = document.getElementById("color");
const body = document.body;

button.addEventListener("click", changeBg);

function changeBg() {
  const col1 = randomBg();
  const col2 = randomBg();
  const col3 = randomBg();
  const colorString = `rgb(${col1},${col2},${col3})`;
  body.style.background = colorString;
  // color.innerText = colorString;
}

function randomBg() {
  return Math.floor(Math.random() * 256);
}
// /* FIN - CÓDIGO PARA CABIAR EL BACKGROUND DE COLOR */ //
