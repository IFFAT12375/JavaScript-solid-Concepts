'strict mode';

//Function declaration are hoisted, meaning they can be called before they are defined in the code. This is because the JavaScript engine reads the entire function declaration before executing any code.

// const age1 = calculateAge(1990); //can call declaration before it is defined

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

const age1 = calculateAge(1990);

//Function Expression are anonymous functions that are assigned to a variable. They cannot be called before they are defined because they are not hoisted like function declarations.

// const age2 = calculateAgeExpression(1999); //cannot call expression before it is defined

const calculateAgeExpression = function(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};

const age2 = calculateAgeExpression(1999);

//function output
console.log(`Age calculated using function declaration: ${age1}`);
console.log(`Age calculated using function expression: ${age2}`);


// --- coding challenge 1 ---

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(12, 11, 10);
const avgKoalas = calcAverage(8, 7, 6);

console.log(avgDolphins, avgKoalas);

function checkWinner (avgDolphins, avgKoalas) {
if (avgDolphins > 2 * avgKoalas) {
   console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
} else if (avgKoalas >= 2* avgDolphins){
   console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
} else {
   console.log("no one is winner");
}
}

checkWinner(avgDolphins, avgKoalas);