'use strict';

const resturant = {
    name: 'Marcopolo',
    location: 'Kaghan',
    categories: ['Italian', "pizarani", 'organic'],
    starterMenu: ['focus', 'garlic'],
    mainMenu: ['pizza', 'pasta'],
    order: function (starterIndex, main) {
        return [this.starterMenu[starterIndex], this.mainMenu[main]]
    },
     orderDelivery: function ({time='22:30', address: location = '', starterIndex, main}) {
        return `${this.starterMenu[starterIndex]} and ${this.mainMenu[main]} will be delivered at ${location} around ${time}`
    }
};
//dynamically create new array out of another using destructuring
console.log(resturant.order(1,0));
const [first, second] = resturant.order(1,0);
console.log(first, second);

//complex object destructuring
console.log(resturant.orderDelivery({
    time: '22:00',
    address: 'DHA',
    starterIndex: 1,
    main: 0,
}));
const obj = {
    starterIndex: 1,
    main: 0,
};
console.log(resturant.orderDelivery(obj));

//nested destructuring
const nested = [1, 2, [3, 4]];
const [a, , b] = nested;
console.log(b);

//default values
const [w=3, p, q=1] = [0, 2]; //default values fall off when origianl not assigned & throw undefined if destructure but value not assigned
console.log(w, p, q);

const arr = [1, 2, 3];
console.log(arr);

//destructure array using any name but position using index order
const [x, y, z] = arr;
console.log (x, y, z);

//destructure objects using exact key names
// const {location, name, categories, starterMenu, mainMenu} = resturant;
// console.log(location, name, location, categories, starterMenu, mainMenu);


//To grab the first item and group the rest of the menu items together:
const [favourite, ...otherCategories] = resturant.categories;
console.log(favourite, otherCategories);

//Arrays
const rgb = ['red', 'green', 'blue'];

// Variables are mapped strictly by position
const [primaryColor, , secondaryColor] = rgb; //leaving empty 1 index using comas

console.log(primaryColor);   // 'red'   (Index 0)
console.log(secondaryColor); // 'blue' (Index 2)


//Objects
const course = {
  title: 'JavaScript 101',
  duration: '5 hours',
  level: 'Beginner'
};

// Order does not matter; names must match keys
const { level, title } = course;
console.log(title); // 'JavaScript 101'
console.log(level); // 'Beginner'

//default values and rename keys in objects destructuring
const {author= [], level: difficulty = [], duration} = course;
console.log(author, duration, difficulty);

//Renaming Keys during Object Destructuring
const user = { id: 99, username: 'starLord' };

// Target the 'username' key but create a new variable called 'handle'
const { username: handle } = user;

console.log(handle); // 'starLord'
// console.log(username); // ReferenceError: username is not defined