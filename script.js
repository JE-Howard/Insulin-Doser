let sugarReading = prompt("What is your current blood sugar reading?","6.2");
let carbsReading = prompt("How many grams of carbs do you intend on eating?","22");

let correctionDose = 0; 
let carbUnits = 0; 
let desiredReading = 6.5; 
let unitsAdminister= 0;

correctionDose = (sugarReading - desiredReading)/4.5; 
carbUnits = carbsReading/21;
unitsAdminister = carbUnits-correctionDose;

if (unitsAdminister> 0 ){
    alert(`Use ${unitsAdminster} before your meal`);
} else{
    alert(`You do not need to use any units with your meal!`)
};
