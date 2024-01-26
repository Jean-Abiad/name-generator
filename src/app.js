/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "his"];
  let adj = ["great", "big", "little"];
  let noun = ["jogger", "racoon", "puedes"];
  let extension = [".com", ".es", ".org"];

  for (let i = 0; i < pronoun.length; i++) {
    adj.forEach((adjetivo) => {
      noun.forEach((nou) => {
        extension.forEach((ext) => {
          let ultimaLetrasNoun = nou.slice((ext.length - 1) * -1);
          let ExtensionSinPunto = ext.slice((ext.length - 1) * -1);
          let elNounSinLasLetrasDeLaExtension = nou.slice(
            0,
            nou.length - (ext.length - 1)
          );

          if (ultimaLetrasNoun == ExtensionSinPunto) {
            console.log(adjetivo + elNounSinLasLetrasDeLaExtension + ext);
          }
          console.log(pronoun[i] + "" + adjetivo + "" + nou + "" + ext);
        });
      });
    });
  }
};
