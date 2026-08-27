// 'use strict';

// //splice()
// // const arr = ["angel", "clown", "mandarin", "sturgeon"];

// // arr.splice(2, 0, "drum");      // deleteCount = 0 → no removal //(start, deletecount, items..)
// // console.log(arr);

// // arr.splice(2, 1);              // removes "mandarin", inserts nothing
// // console.log(arr);

// // arr.splice(2, 2, "drum");      // removes "mandarin" + "sturgeon", inserts "drum"
// // console.log(arr);

// // arr.splice(2);                 // removes all from index 2 to end
// // console.log(arr);

// // //slice()
// // const animals = ["ant", "bison", "camel", "duck", "elephant"];

// // console.log(animals.slice(2));
// // console.log(animals.slice(2, 4));
// // console.log(animals.slice(1, 5)); //last index not include but first include
// // console.log(animals.slice(-2)); // minus start from last index
// // console.log(animals.slice(2, -1));

// // console.log(animals.slice());

// // //Reverse()
// // const array = ["one", "two", "three"];
// // console.log("array:", array);

// // const reversed = array.reverse();
// // console.log("reversed:", reversed);

// // // Careful: reverse is destructive -- it changes the original array.
// // console.log("array:", array);

// // //lastIndexOf()
// // const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

// // console.log(animals.lastIndexOf("Dodo")); // return 3 because search backward
// // console.log(animals.lastIndexOf("Tiger")); //not found return 1

// // // join()
// // const elements = ["Fire", "Air", "Water"];

// // console.log(elements.join()); // Expected output: "Fire,Air,Water"
// // console.log(elements.join("")); // Expected output: "FireAirWater"
// // console.log(elements.join("-")); // Expected output: "Fire-Air-Water"

// // //concat()
// // const array1 = ["a", "b", "c"];
// // const array2 = ["d", "e", "f"];
// // const array3 = array1.concat(array2);

// // console.log(array3); // Expected output: Array ["a", "b", "c", "d", "e", "f"]

// // //at()
// // const array = [5, 12, 8, 130, 44];
// // console.log(`An index of ${index} returns ${array.at(2)}`); // Expected output: "An index of 2 returns 8"

// // //==== ====== ======= =======  forEach()  ======  =====.  ====== ======
// // // The forEach() method of Array instances executes a provided function once for each array element.
// // // return nothing and handle side Effects only

// // const array = ["a", "b", "c"];
// // array.forEach((element) => console.log(element));

// // const items = ["item1", "item2", "item3"];
// // const copyItems = [];

// // // // before
// // // for (let i = 0; i < items.length; i++) {
// // //   copyItems.push(items[i]);
// // // }

// // // after
// // const checkResult = items.forEach((item) => { //return nothing just handle callbacks and not even mutate original implicitly
// //   copyItems.push(item);
// // });

// // console.log(checkResult);

// ///===================================== Arrays practice ====== =========== =========== =========== =========
// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
//   type: 'premium',
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
//   type: 'standard',
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
//   type: 'premium',
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
//   type: 'basic',
// };

// const accounts = [account1, account2, account3, account4];

// // const createUsernames = function (accs) {
// //   accs.forEach(acc => {acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');});
// // };

// // console.log('before call',accounts);

// // createUsernames(accounts);

// // console.log("after call", accounts);

// // console.log(account1.username); // 'js'
// // console.log(account4.username); // 'jd'
// // console.log(account4);

// const userName = accounts.map((user) => user.owner);

// // const userNames = [];

// // for(const users of accounts) {
// //  const {owner} = users
// //   userNames.push(owner);
// // }

// console.log(userName);

// const account6 = {
//   owner: 'sarah smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
//   type: 'basic',
// };

// const account7 = {
//   owner: 'sarah smith',
//   movements: [430, -1000, -700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
//   type: 'basic',
// };

// const updateName = [account6, account7];

// const updateFunctionName = function (names) {
//   names.forEach(eachName => {
// eachName.updatedOwner = eachName.owner.split(' ').map(word => word[0].toUpperCase()+word.slice(1)).join(' '); //updating the original object property because of refrences, and arguments pass by

// eachName.sum = eachName.movements.reduce((acc, Elem) => acc+Elem, 0);

// eachName.deposits = eachName.movements.filter(ele => ele > 0);
//   });
// };
// updateFunctionName(updateName);
// console.log('origianl',updateName);

// ///===================================== for-of practice ====== =========== =========== =========== =========

// const users = [
//   { id: 1, name: 'Asim', age: 22 },
//   { id: 2, name: 'Sara', age: 25 },
//   { id: 3, name: 'John', age: 30 }
// ];

// let foundUser;

// for(const user of users){
//   if(user.id === 2) {
//     foundUser = user;
//     break;
//   }
// }

// console.log(foundUser);

// const result = users.find((user, index, arr) => {
  // console.log(user);   // current object
  // console.log(index);  // current index
  // console.log(arr);    // original users array

//   return user.id === 2;
// });

// console.log(result);

// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// function isCherries(fruit) {
//   return fruit.name === "cherries";
// }

// console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

// ==========================================
// ARRAY METHODS PRACTICE
// ==========================================

// ------------------------------------------
// 1. SORT() - Default behavior
// ------------------------------------------

const numbers = [10, 5, 20, 1, 100, 2];

console.log("Original:", numbers);

console.log("sort():", [...numbers].sort());

console.log("Original:", numbers);

/*
STOP AND PREDICT 👆

What do you think this gives?

Why doesn't it simply give:
[1, 2, 5, 10, 20, 100]?

Run it and see.
*/


// ------------------------------------------
// 2. SORT() - Ascending numbers
// ------------------------------------------

const nums = [10, 5, 20, 1, 100, 2];

const ascending = [...nums].sort((a, b) => a - b);

console.log("Ascending:", ascending);


// ------------------------------------------
// 3. SORT() - Descending numbers
// ------------------------------------------

const descending = [...nums].sort((a, b) => b - a);

console.log("Descending:", descending);


// ------------------------------------------
// 4. Understanding a - b
// ------------------------------------------

console.log([5, 2].sort((a, b) => a - b));
console.log([2, 5].sort((a, b) => a - b));

/*
Think:

a - b < 0
a comes before b

a - b > 0
b comes before a

a - b === 0
keep their relative order
*/


// ------------------------------------------
// 5. SORT() MUTATES ORIGINAL ARRAY
// ------------------------------------------

const original = [5, 1, 10, 3];

console.log("Before:", original);

original.sort((a, b) => a - b);

console.log("After:", original);


// ------------------------------------------
// 6. TO SORTED() - Non-destructive
// ------------------------------------------

const original2 = [5, 1, 10, 3];

const sorted = original2.toSorted((a, b) => a - b);

console.log("Original:", original2);
console.log("Sorted:", sorted);
console.log("Original:", original2);


// ==========================================
// STRINGS
// ==========================================

const names = ["Zara", "Ali", "John", "Bob", "Adam"];

console.log("Names:", names);

console.log(
  "Alphabetical:",
  [...names].sort()
);


// ==========================================
// SORT OBJECTS
// ==========================================

const users = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 20 },
  { name: "John", age: 30 },
  { name: "Zain", age: 22 },
];

console.log("Users:", users);


// Sort by age ASC
const usersByAge = [...users].sort((a, b) => a.age - b.age);

console.log("Age ASC:", usersByAge);


// Sort by age DESC
const usersByAgeDesc = [...users].sort((a, b) => b.age - a.age);

console.log("Age DESC:", usersByAgeDesc);


// Sort by name
const usersByName = [...users].sort((a, b) =>
  a.name.localeCompare(b.name)
);

console.log("Name:", usersByName);


// ==========================================
// INCLUDE()
// ==========================================

const fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("mango"));
console.log(fruits.includes("orange"));


// ==========================================
// SOME()
// ==========================================

const ages = [12, 15, 18, 21];

const hasAdult = ages.some(age => age >= 18);

console.log("Someone is adult?", hasAdult);


// ==========================================
// EVERY()
// ==========================================

const marks = [70, 80, 90, 60];

const everyonePassed = marks.every(mark => mark >= 50);

console.log("Everyone passed?", everyonePassed);


// Experiment
console.log(
  [40, 60, 70].every(mark => mark >= 50)
);


// ==========================================
// FILL()
// ==========================================

const arr = new Array(5);

console.log("Empty array:", arr);

arr.fill(0);

console.log("Filled:", arr);


// Fill only part of the array
const numbers2 = [1, 2, 3, 4, 5];

numbers2.fill(100, 1, 4);

console.log("Partial fill:", numbers2);


// ==========================================
// NEW ARRAY + FILL()
// ==========================================

const fiveZeros = new Array(5).fill(0);

console.log("Five zeros:", fiveZeros);

const tenStars = new Array(10).fill("*");

console.log("Ten stars:", tenStars);


// ==========================================
// ARRAY.FROM()
// ==========================================

// Convert string to array
const word = "HELLO";

const letters = Array.from(word);
// const letters = word.split("");

console.log("Letters:", letters);


// Create array from length
const indexes = Array.from({ length: 5 }, (_, index) => index);

console.log("Indexes:", indexes);


// 1 to 10
const oneToTen = Array.from(
  { length: 10 },
  (_, index) => index + 1
);

console.log("1-10:", oneToTen);


// ==========================================
// GROUPBY()
// ==========================================

const people = [
  { name: "Ali", department: "IT" },
  { name: "Sara", department: "HR" },
  { name: "John", department: "IT" },
  { name: "Ayesha", department: "Finance" },
  { name: "Zain", department: "HR" },
];

const grouped = Object.groupBy(
  people,
  person => person.department
);

console.log("Grouped:", grouped);

console.log("IT:", grouped.IT);
console.log("HR:", grouped.HR);


// ==========================================
// TOREVERSED()
// ==========================================

const numbers3 = [1, 2, 3, 4, 5];

const reversed = numbers3.toReversed();

console.log("Original:", numbers3);
console.log("Reversed:", reversed);


// ==========================================
// TO SPLICE()
// ==========================================

const fruits2 = ["apple", "banana", "mango", "orange"];

// Normal splice MUTATES
const fruits3 = [...fruits2];

fruits3.splice(1, 1, "grape");

console.log("splice:", fruits3);


// toSpliced() does NOT mutate
const fruits4 = fruits2.toSpliced(1, 1, "grape");

console.log("Original:", fruits2);
console.log("toSpliced:", fruits4);


// ==========================================
// WITH()
// ==========================================

const names2 = ["Ali", "Sara", "John"];

const updatedNames = names2.with(1, "Ayesha");

console.log("Original:", names2);
console.log("Updated:", updatedNames);


// ==========================================
// QUERYSELECTORALL()
// ==========================================

// This part works in the browser.

// Create this HTML first:
//
// <div class="box">One</div>
// <div class="box">Two</div>
// <div class="box">Three</div>

// Then:

// const boxes = document.querySelectorAll(".box");

// console.log(boxes);
// console.log("Number of boxes:", boxes.length);

// // Convert NodeList to Array
// const boxesArray = Array.from(boxes);

// console.log("Array:", boxesArray);