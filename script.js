let convertBtn = document.getElementById("convert-btn");
let input = document.getElementById("input");
let meterFeet = document.getElementById("meter-feet");
let litersGallons = document.getElementById("liters-gallons");
let kiloPounds = document.getElementById("kilograms-pounds");

convertBtn.addEventListener ('click', function() {
    let userInput = input.value;
    measureLength(userInput);

    measureVolume(userInput);

    measureMass(userInput);
})

function measureLength(userInput) {
    let mToFt = userInput * 3.281;
    let ftToM = userInput * 0.3048;
    let result = `${userInput} meters = ${mToFt.toFixed(3)} feet | ${userInput} feet = ${ftToM.toFixed(3)} meters`;
    meterFeet.textContent = result;
}

function measureVolume(userInput) {
    let lToGal = userInput * 0.264;
    let galToL = userInput * 3.7854;
    let result2 = `${userInput} liters = ${lToGal.toFixed(3)} gallons | ${userInput} gallons = ${galToL.toFixed(3)} liters`;
    litersGallons.textContent = result2;
}

function measureMass(userInput) {
    let kgToLb = userInput * 2.204;
    let lbToKg = userInput * 0.4536;
    let result3 = `${userInput} kilos = ${kgToLb.toFixed(3)} pounds | ${userInput} pounds = ${lbToKg.toFixed(3)} kilos`;
    kiloPounds.textContent = result3;
}

