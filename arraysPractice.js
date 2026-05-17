"use strict";
const friends = ['harry', 'potter'];
const firstName = 'harry';
const me = [firstName, 2032-2045, friends, 'blue'];

const friendObj = [
   "tom",
    'jerry'
]

const meObj = {
    firstName: firstName,
    lastName: 'harry',
    age: 23-19,
    // friend: {
    //     favourite: 'tom',
    //     another: 'jerry',
    // }
    friends: friendObj
}

console.log(meObj.friends);
console.log(friendObj.length);

console.log(`${meObj.firstName} has ${meObj.friends.length} friends but ${meObj.friends[0]} is my best friend`);

console.log(meObj.firstName); //dot notation
console.log(meObj['firstName']); //bracket notation


console.log(me);
friends[1] = 'star';
console.log(friends[1]);


// const prompt = require("prompt-sync")();
// const birthYear = Number(prompt("enter your age: "));
const age = [1990, 1992, 1993];

const aclAgde = function(birthYear) {
    return 2026 - birthYear;
}

console.log(aclAgde(age[0]));
console.log(aclAgde(age[1]));

// const newAge = [];
const newAge = new Array ();
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

