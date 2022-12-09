/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the !");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  console.log(who[Math.floor(Math.random() * (who.length - 1))]);
  document.innerHTML = "Hello world";
  let excuse = document.querySelector("#excuse");
  let who1 = who[Math.floor(Math.random() * (who.length - 1))];
  let action1 = action[Math.floor(Math.random() * (action.length - 1))];
  let what1 = what[Math.floor(Math.random() * (what.length - 1))];
  let when1 = when[Math.floor(Math.random() * (when.length - 1))];
  excuse.innerHTML = who1 + " " + action1 + " " + what1 + " " + when1;
};
