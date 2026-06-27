"use strict";

// example

const tom = {
  firstName: "tom",
  lastName: "jerry",
  job: "developer",
  birthYear: 1999,
  hasDrivingLicense: true,

  // method 1
  // calcAge: function(birthYear) {
  //     return 2026-birthYear;
  // }

  // method 2
  // calcAge: function() {
  //     return 2026-this.birthYear;
  // }

  // calcAge: () => 2026 - this.birthYear // throw nan because arrow not have own this

  // method 3
  calcAge: function () {
    this.age = 2026 - this.birthYear; //tom.age = 27 like adding in object
    return this.age;
  },

  //challange
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDrivingLicense ? "a" : "no"} drivers license`;
  },
};

console.log(tom['getSummary']()); //using bracket notation

// method 1
// console.log(tom.calcAge(1999)); //using dot notation
// console.log(tom['calcAge'](1999)); //using bracket notation

// method 2
// console.log(tom.calcAge());
// console.log(tom["calcAge"]());

// METHOD 3
const age = tom.calcAge();
console.log(age);

console.log(tom);

// challange
// const summary = tom['getSummary']();
// tom.summary = summary; //add into object
// console.log(summary);
console.log(tom["getSummary"]());

console.log(tom);

/* coding challange */
const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.65,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

// Calculate BMIs
const markBmi = markMiller.calcBMI();
const johnBmi = johnSmith.calcBMI();

console.log(`Mark's BMI: ${markBmi.toFixed(1)}`);
console.log(`Mark's BMI using obj key: ${markMiller.bmi.toFixed(1)}`);
console.log(`John's BMI: ${johnBmi.toFixed(1)}`);
console.log(`Mark's BMI using obj key: ${johnSmith.bmi.toFixed(1)}`);

if (markBmi > johnBmi) {
  console.log(
    `${markMiller.fullName}'s BMI (${markBmi.toFixed(1)}) is higher than ${johnSmith.fullName}'s (${johnBmi.toFixed(1)})!`,
  );
} else if (johnBmi > markBmi) {
  console.log(
    `${johnSmith.fullName}'s BMI (${johnBmi.toFixed(1)}) is higher than ${markMiller.fullName}'s (${markBmi.toFixed(1)})!`,
  );
}
