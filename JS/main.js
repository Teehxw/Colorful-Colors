// Color Array by Taahaa Rashid

//Variables for HTML elements
let containerE1 = document.getElementById("container");
let inputE1 = document.getElementById("color-in");

//Global Variables 
let colors = [];

//Fetch content from colors.txt
fetch("colours.txt").then(convertData).then(processData);

function convertData(rawData){
    return rawData.text();
}

function processData(stringData){
    console.log(stringData);
}

//Event Listener
inputE1.addEventListener("keydown", submitHandler);

function submitHandler(event){
    if (event.keyCode ===13){
        //Create Color array based on user input
        let inputStr = inputE1.value;
        let colorsArray = inputStr.split(",");
        displayColors(colorsArray)
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




