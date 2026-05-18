"use strict";
const friends = ["harry", "potter"];
const firstName = "harry";
const me = [firstName, 2032 - 2045, friends, "blue"];

const friendObj = ["tom", "jerry"];

console.log(typeof friendObj, friendObj);

const meObj = {
  firstName: firstName,
  lastName: "harry",
  age: 23 - 19,
  // friend: {
  //     favourite: 'tom',
  //     another: 'jerry',
  // }
  friends: friendObj,
};

console.log(typeof meObj, meObj);

console.log(meObj.friends);
console.log(friendObj.length);

console.log(
  `${meObj.firstName} has ${meObj.friends.length} friends but ${meObj.friends[0]} is my best friend`,
);

console.log(meObj.firstName); //dot notation
console.log(meObj["firstName"]); //bracket notation

console.log(me);
friends[1] = "star";
console.log(friends[1]);

// const prompt = require("prompt-sync")();
// const birthYear = Number(prompt("enter your age: "));
const age = [1990, 1992, 1993];

const aclAgde = function (birthYear) {
  return 2026 - birthYear;
};

console.log(aclAgde(age[0]));
console.log(aclAgde(age[1]));

// const newAge = [];
const newAge = new Array();
console.log(newAge);
newAge.push(aclAgde(age[0]));
const age1 = aclAgde(age[0]);
const age2 = aclAgde(age[2]);
newAge.push(age2);
console.log("first push: ", newAge);

newAge.push(age1, age2, aclAgde(age[0]));

console.log(newAge);
newAge.unshift(1);
console.log(newAge);

console.log(newAge.length, newAge[1]);

// ______________ for loops inside loop _____________________

for (let exercise = 0; exercise <= 3; exercise++) {
  console.log(`------starting exercise ${exercise}`);

  for (let rep = 0; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetation ${rep}`);
  }
}

// ______________ for loops backwards _____________________
const tom = ["tom", "jerry", 2026 - 1999, ["jonas", "schmedtmann"]];

for (let i = tom.length - 1; i >= 0; i--) {
  console.log(i, tom[i]);
}

// --------- coding Challange -----------

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill = [22, 1234, 345, 345, 756, 987];
const tips = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {
  const tip = calcTip(bill[i]);
  tips.push(Number(tip.toFixed(2)));
  totals.push(Number((tip + bill[i]).toFixed(2)));
}

console.log("Bills:", bill);
console.log("Tips:", tips);
console.log("Totals:", totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return Number((sum / arr.length).toFixed(2));
};

console.log(calcAverage(totals));


/* ----------------- method 2 using modern syntax ------------------- */

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 1234, 345, 345, 756, 987];

// .map() creates a new array by transforming each element
const tips = bills.map(bill => Number(calcTip(bill).toFixed(2)));
const totals = bills.map((bill, index) => Number((bill + tips[index]).toFixed(2)));

// .reduce() accumulates all values into a single sum
const calcAverage = arr => Number((arr.reduce((sum, val) => sum + val, 0) / arr.length).toFixed(2));

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
console.log("Average Total:", calcAverage(totals));

