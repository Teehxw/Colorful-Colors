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
inputE1.addEventListener("keyup", submitHandler);

function submitHandler(event){
    //Display all colores on page 
    let divStr = "";
    for (let i =0; i < colors.length; i++){
        if(colors[i].includes(inputE1.value)) {
          divStr += `<div style = "background: ${colors[i]}"  >${colors[i]}</div>`
        }
    }   
    containerE1.innerHTML = divStr;  
}


function displayColors(colors){
    //Display all colores on page 
    let divStr = "";
    let count=0;
    for (let i =0; i < colors.length; i++){
        if (colors[i][0]==="P" || colors[i][0] ==="B") {
            divStr += `<div style = "background: ${colors[i]} ">${colors[i]}</div>`
            count++;
        }
    }   
    
}




