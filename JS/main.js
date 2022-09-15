// Color Array by Taahaa Rashid

//Variables for HTML elements
let containerE1 = document.getElementById("container");

//Array
let colors = ["red", "green", "blue", "orange", "cyan"];
// index ->     0        1       2       3         4

containerE1.innerHTML = `<div style = "background: ${colors[randomInt(0,5)]} "></div>`;