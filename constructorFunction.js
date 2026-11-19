// 'use strict'
// // 1. Define the Constructor Function
// // Convention dictates that constructor names start with a Capital Letter.
// function Car(make, model, year) {
//   // 'this' points to the brand-new object being created
//   this.make = make;
//   this.model = model;
//   this.year = year;

//   // Note: No 'return' statement is needed. It returns 'this' automatically.
// }

// // 2. Add a method to the prototype
// // This ensures all Car objects share one copy of the function in memory.
// Car.prototype.getSpecs = function() {
//   return `${this.year} ${this.make} ${this.model}`;
// };

// // 3. Instantiate objects using the 'new' keyword
// const car1 = new Car("Toyota", "Camry", 2022);
// const car2 = new Car("Tesla", "Model 3", 2024);

// // 4. Access properties and call methods
// console.log(car1.make);       // Output: "Toyota"
// console.log(car2.model);      // Output: "Model 3"

// console.log(car1.getSpecs()); // Output: "2022 Toyota Camry"
// console.log(car2.getSpecs()); // Output: "2024 Tesla Model 3"

// // What happens under the hood when you use new?
// // When you call new Car(...), JavaScript automatically executes four steps behind the scenes:
// // Creates a brand-new, empty object ({}).
// // Links this object’s prototype (__proto__) to the constructor function's prototype (Car.prototype).
// // Binds this inside the function to point directly to our new empty object.
// // Returns the newly created object automatically (unless the constructor explicitly returns a different object).

// const Person = function (firstName, birthYear) {
//     //instance properties (things that unique to each object)
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     console.log(`${firstName}, ${birthYear} of each user`)
// //       this.calcAge = function () { //to solve this create prototype
// //     console.log(2026 - this.birthYear);
// //   };
// console.log(this);
// };

// //constructor prototype (methods that can be shared)
// Person.prototype.calcAge = function () {
//     console.log(2026 - this.birthYear);
//   };

// const userName = new Person('iffat', '1999');
// const constanotherUser = new Person('shaista', '2000');

// const test = 'test';

// console.log(userName instanceof Person);
// console.log(test instanceof Person);
// console.log(userName.calcAge === constanotherUser.calcAge);

// console.log(userName);

// console.log(Person);
// console.log(Person.prototype); //constructor prototype property
// console.log(userName.__proto__); //object prototype property
// console.log(Person.prototype.constructor === Person);
// console.log(Object.getPrototypeOf(userName));

// console.log(userName.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(userName));
// console.log(Person.prototype.isPrototypeOf(Person));

// userName.calcAge();

// console.log(userName.__proto__);
// console.log(Object.getPrototypeOf(userName));
// console.log(Person.prototype);
// console.log(userName);
// console.log(Person);
// console.log(userName.hasOwnProperty('firstName'));
// console.log(userName instanceof Person);

/* Object.create() — another way to create delegation */

// const PersonProto = {
//   calcAge() {
//     console.log(2026 - this.birthYear);
//   },

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// };
// const iffat = Object.create(PersonProto);
// console.log(iffat);
// console.log(PersonProto);

// iffat.birthYear = 1999;
// iffat.firstName = 'iffat';

// console.log(iffat);
// console.log(PersonProto);

/* ES6 classes — syntax modern JavaScript */

// class Person {
//   constructor (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// //  calcAge() {
// //     console.log(2026 - this.birthYear);
// //   }

//  greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }
// const iffat = new Person('Iffat', 1999);
// console.log(iffat.age);
// console.log(iffat);

/* ES6 classes — getterss/setters/static methods */

class Person {
  constructor(fullName) {
    this.fullName = fullName;
  }

  set fullName(fullName) {
    if (fullName.includes('')) {
      this._fullName = fullName;
    } else {
      console.log('Please provide first and last name');
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const p = new Person('Iffat sattar');

console.log(p.fullName);
