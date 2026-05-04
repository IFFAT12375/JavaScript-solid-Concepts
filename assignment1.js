const prompt = require("prompt-sync")();

//person1 input values
let mass1 = Number(prompt("Enter person1 mass:"));
let height1 = Number(prompt("Enter person1 height in meters):"));

//person2 input values
let mass2 = Number(prompt("Enter person2 mass:"));
// const mass2= 12;
let height2 = Number(prompt("Enter person2 height in meters):"));

//BMI Calculation
let bmi1 = (mass1/(height1**2));
let bmi2 = (mass2/(height2*height2));

// boolean flag
let markHigherBMI = bmi1 > bmi2;

// output
console.log("Is Person 1 BMI higher?", markHigherBMI);

if(markHigherBMI){
    console.log("Person 1 has higher BMI: ");
} else if (bmi2 > bmi1) {
    console.log("Person 2 has higher BMI:", bmi2.toFixed(2));
} else {
    console.log("Both have equal BMI");
}

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);

let today = new Date();

console.log(today.toLocaleString("en-US"));
console.log(today.toLocaleString("en-PK"));

console.log(today.toISOString());

console.log(today.toString());

console.log(today.toLocaleString());

