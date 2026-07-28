const prompt = require('prompt-sync')();
// const jessica = {
//     firstName: 'jessica',
//     lastName: 'bud',
//     age: 25,
// }

// const jessaMarriage = {...jessica};
// console.log(jessaMarriage === jessica);
// jessica.level= '1';
// jessaMarriage.lastName = 'dogar';

// // console.log(jessica);
// // console.log(jessaMarriage);

// jessica.age = '30';

// console.log(jessica);
// console.log(jessaMarriage);

// // const person = {
// //   name: "Jessica",
// //   address: {
// //     city: "Lahore",
// //   },
// // };

// // const copy = { ...person };
// // console.log(copy === person);
// // console.log(copy.name === person.name); //compare by value for primitives
// // console.log(copy.address === person.address); //compare through refrence for non-permitive

// // copy.name = "Sarah";
// // copy.address.city = "Karachi";

// // console.log(person);
// // console.log(copy);

// const user = {
//   username: "Tom",
//   lastName:"dogar",
//   skills: ["HTML", "CSS"],
// };

// const copy = { ...user };
// // const copy = structuredClone(user)

// console.log(user == copy);

// // copy.username = "Jerry";
// // copy.skills.push("JavaScript");

// // console.log(user);
// // console.log(copy);

// // ---------------------------------spread operaTOR ------------------------

// const arr = [1,2,3]
// const copy = [...arr,];
// console.log(copy===arr)
// const [favourite, ,...other] = arr
// console.log(favourite);
// console.log(other);
// console.log(...arr);


const resturant = {
    name: 'Marcopolo',
    location: 'Kaghan',
    categories: ['Italian', "pizarani", 'organic'],
    starterMenu: ['focus', 'garlic'],
    mainMenu: ['pizza', 'pasta'],
   orderPasta: function(ing1, ...ing) { //can pas rest pattern in function call as well
    return `pasta is delicious made of ${ing1}, & ${ing}`
   }
};

const {name, ...info} = resturant;
console.log(info);
// const ingredient = [prompt('let\'s make pasta, ingredient 1?'), prompt('ingredient 2?'), prompt('ingredient 3?')];

// use spread operator to pass value to a function as an argument
// console.log(resturant.orderPasta(...ingredient));

// use spread operator to create an array as well specially string
// const str = 'iff';
// console.log(...str);


// // Rest with Array Destructuring
// const [fav, secondFav, ...others] = resturant.categories;

// console.log(fav);       // 'Italian'
// console.log(secondFav); // 'pizarani'
// console.log(others);    // ['organic'] -> A brand new array box!
