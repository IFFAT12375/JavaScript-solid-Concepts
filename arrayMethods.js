'use strict';

//splice()
const arr = ["angel", "clown", "mandarin", "sturgeon"];

arr.splice(2, 0, "drum");      // deleteCount = 0 → no removal //(start, deletecount, items..)
console.log(arr);

arr.splice(2, 1);              // removes "mandarin", inserts nothing
console.log(arr);

arr.splice(2, 2, "drum");      // removes "mandarin" + "sturgeon", inserts "drum"
console.log(arr);

arr.splice(2);                 // removes all from index 2 to end
console.log(arr);

//slice()
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5)); //last index not include but first include
console.log(animals.slice(-2)); // minus start from last index
console.log(animals.slice(2, -1));

console.log(animals.slice());

//Reverse()
const array = ["one", "two", "three"];
console.log("array:", array);

const reversed = array.reverse();
console.log("reversed:", reversed);

// Careful: reverse is destructive -- it changes the original array.
console.log("array:", array);

//lastIndexOf()
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo")); // return 3 because search backward
console.log(animals.lastIndexOf("Tiger")); //not found return 1

// join()
const elements = ["Fire", "Air", "Water"];

console.log(elements.join()); // Expected output: "Fire,Air,Water"
console.log(elements.join("")); // Expected output: "FireAirWater"
console.log(elements.join("-")); // Expected output: "Fire-Air-Water"

//concat()
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3); // Expected output: Array ["a", "b", "c", "d", "e", "f"]

//at()
const array = [5, 12, 8, 130, 44];
console.log(`An index of ${index} returns ${array.at(2)}`); // Expected output: "An index of 2 returns 8"

//forEach()
// The forEach() method of Array instances executes a provided function once for each array element.

const array = ["a", "b", "c"];
array.forEach((element) => console.log(element));

const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});

console.log(items);