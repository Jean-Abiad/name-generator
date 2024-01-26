/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#excuse").innerHTML = theExcuse();
  console.log("Hello Rigo from the console!");
};

let theExcuse = () => {
  let who = ["mi padre", "la tortuga", "el perro", "mi vecino"];
  let action = ["comio", "rompio", "perdio", "escondio"];
  let what = ["mi tarea", "la comida", "mi celular", "las llaves"];
  let when = [ "despues de clases","cuando dormia","cuando me fui","durante el almuerzo","mientras jugaba",];

  let quien = Math.floor(Math.random() * who.length);
  let accion = Math.floor(Math.random() * action.length);
  let que = Math.floor(Math.random() * what.length);
  let cuando = Math.floor(Math.random() * when.length); //

  return who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando];
};
