// Color Array by Taahaa Rashid

//Variables for HTML elements
let containerE1 = document.getElementById("container");
let inputE1 = document.getElementById("color-in");

//Global Variables 
let colors ;

//Fetch content from colors.txt
fetch("colors.txt").then(convertData).then(processData);

function convertData(rawData){
    return rawData.text();
}

function processData(stringData){
    colors = stringData.split("\r\n")
    displayColors(colors);
}
//Event Listener
inputE1.addEventListener("keydown", submitHandler);

function submitHandler(event){
    if (event.keyCode ===13){
        //Create Color array based on user input
        colors.push(inputE1.value)
        inputE1.value = "";
        displayColors(colors)
    }
}

function displayColors(colors){
    //Display all colores on page 
    let divStr = "";
    for (let i =0; i < colors.length; i++){
    divStr += `<div style = "background: ${colors[i]} "></div>`
    }   
    containerE1.innerHTML = divStr;
}




