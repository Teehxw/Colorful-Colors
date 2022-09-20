// Color Array by Taahaa Rashid

//Variables for HTML elements
let containerE1 = document.getElementById("container");
let inputE1 = document.getElementById("color-in");

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




