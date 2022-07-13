
const userInput = document.querySelector("#userInput");
const convertBtn = document.getElementById("convertBtn");
const meterPara = document.getElementById("meter");
const litersPara = document.getElementById("liters");
const kilosPara = document.getElementById("kilos");

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function stringWrite( value, unit1_to_unit2, unit2_to_unit1, unit1, unit2 )
{
    return `${value} ${unit1} = ${unit1_to_unit2} ${unit2} | ${value} ${unit2} = ${unit2_to_unit1} ${unit1} `
}

function convertBtnClickHandler(){
    let num = parseInt(userInput.value);
    let meterToFeet = (num * 3.281).toFixed(3);
    let literToGallon = (num * 0.264).toFixed(3);
    let kiloToPound = (num * 2.204).toFixed(3);
    let feetToMeter = (num * 0.304).toFixed(3);
    let gallonToLiter = (num * 3.787).toFixed(3);
    let poundToKilo = (num * 0.453).toFixed(3);

   meterPara.textContent = stringWrite( num, meterToFeet, feetToMeter,"meters", "feet");
   litersPara.textContent = stringWrite( num, literToGallon, gallonToLiter, "liter", "gallons");
   kilosPara.textContent = stringWrite( num , kiloToPound , poundToKilo , "kilo", "pound");
}


convertBtn.addEventListener("click", convertBtnClickHandler);