//switch statements
const day = "wednesday";

switch (day) {
  case "monday":
    console.log("plan course structure");
    break;
  case "tuesday":
    console.log("plan course structure");
    break;
  default:
    console.log("not a valid day");
}

//conditional statements
const bill = 200;

const tip = (bill >=50 && bill <=300) ? bill * .15 : bill * .2;
console.log(`The total bill value is ${bill}, and tip is ${tip}`)