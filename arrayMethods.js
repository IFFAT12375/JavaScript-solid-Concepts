'use strict';

//splice()
// const arr = ["angel", "clown", "mandarin", "sturgeon"];

// arr.splice(2, 0, "drum");      // deleteCount = 0 → no removal //(start, deletecount, items..)
// console.log(arr);

// arr.splice(2, 1);              // removes "mandarin", inserts nothing
// console.log(arr);

// arr.splice(2, 2, "drum");      // removes "mandarin" + "sturgeon", inserts "drum"
// console.log(arr);

// arr.splice(2);                 // removes all from index 2 to end
// console.log(arr);

// //slice()
// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5)); //last index not include but first include
// console.log(animals.slice(-2)); // minus start from last index
// console.log(animals.slice(2, -1));

// console.log(animals.slice());

// //Reverse()
// const array = ["one", "two", "three"];
// console.log("array:", array);

// const reversed = array.reverse();
// console.log("reversed:", reversed);

// // Careful: reverse is destructive -- it changes the original array.
// console.log("array:", array);

// //lastIndexOf()
// const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

// console.log(animals.lastIndexOf("Dodo")); // return 3 because search backward
// console.log(animals.lastIndexOf("Tiger")); //not found return 1

// // join()
// const elements = ["Fire", "Air", "Water"];

// console.log(elements.join()); // Expected output: "Fire,Air,Water"
// console.log(elements.join("")); // Expected output: "FireAirWater"
// console.log(elements.join("-")); // Expected output: "Fire-Air-Water"

// //concat()
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);

// console.log(array3); // Expected output: Array ["a", "b", "c", "d", "e", "f"]

// //at()
// const array = [5, 12, 8, 130, 44];
// console.log(`An index of ${index} returns ${array.at(2)}`); // Expected output: "An index of 2 returns 8"

// //==== ====== ======= =======  forEach()  ======  =====.  ====== ====== 
// // The forEach() method of Array instances executes a provided function once for each array element.
// // return nothing and handle side Effects only

// const array = ["a", "b", "c"];
// array.forEach((element) => console.log(element));

// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // // before
// // for (let i = 0; i < items.length; i++) {
// //   copyItems.push(items[i]);
// // }

// // after
// const checkResult = items.forEach((item) => { //return nothing just handle callbacks and not even mutate original implicitly
//   copyItems.push(item);
// });

// console.log(checkResult);

///===================================== Arrays practice ====== =========== =========== =========== =========
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// const createUsernames = function (accs) {
//   accs.forEach(acc => {acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');});
// };

// console.log('before call',accounts); 

// createUsernames(accounts);

// console.log("after call", accounts); 

// console.log(account1.username); // 'js'
// console.log(account4.username); // 'jd'
// console.log(account4);

const userName = accounts.map((user) => user.owner);

// const userNames = [];

// for(const users of accounts) {
//  const {owner} = users
//   userNames.push(owner);
// }

console.log(userName);

const account6 = {
  owner: 'sarah smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const account7 = {
  owner: 'sarah smith',
  movements: [430, -1000, -700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const updateName = [account6, account7];

const updateFunctionName = function (names) {
  names.forEach(eachName => {
eachName.updatedOwner = eachName.owner.split(' ').map(word => word[0].toUpperCase()+word.slice(1)).join(' '); //updating the original object property because of refrences, and arguments pass by

eachName.sum = eachName.movements.reduce((acc, Elem) => acc+Elem, 0);

eachName.deposits = eachName.movements.filter(ele => ele > 0);
  });
};
updateFunctionName(updateName);
console.log('origianl',updateName);