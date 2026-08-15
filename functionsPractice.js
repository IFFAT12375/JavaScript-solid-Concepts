const flight = 'LH123';

const newFlight = flight;

const iffat = {
    name: 'iffat',
    passport: 3465343,
};

const checkIn = function(flightNum, passenger) {
    flightNum='LH345';
    passenger.name = 'Ms ' + passenger.name;

}

checkIn (flight, iffat);
console.log(flight);
console.log(iffat);

// ============================== HOF ======================================

const oneWord = function(str) {
   return str.replace(/ /g, '').toLowerCase();
};

console.log(oneWord('i*am Iffar'));

const upperFirstWord = function(str) {
   const [firstLetter, ...other] = str.split('');
   return [firstLetter.toUpperCase(), ...other].join('');
}

console.log(upperFirstWord('iffat'));

//functions accepting callbacks (HOF)
const transformer = function(str, fn) {
      console.log(`Original string, ${str}`);
    console.log(`Transformed string, ${fn(str)}`);

      console.log(`Transformed By, ${fn.name}`);
}

transformer('i am Iffar', oneWord);
transformer('iffat', upperFirstWord);


// ========================================= call/apply method =======================================
//manually set this keyword poinging to which fun/obj and call imediately
//apply is old technique
//call/apply return result of function

const swiss = {
    airline: 'swiss airline',
    iatecode: 'LH',
    bookings: [],
    book(name, flightNumber) {
          console.log(this);
  console.log('first console',this === swiss);
//    console.log(this === airCanada);

        console.log(`${name}, has booked ${this.iatecode}${flightNumber} at ${this.airline}`)
        this.bookings.push({flight: `${this.iatecode}${flightNumber}`, name})
    }
}

swiss.book('iffat', 23);
console.log(swiss.bookings);

const airCanada = {
  airline: 'Air Canada',
  iatecode: 'AC',
  bookings: []
};

const book = swiss.book;

book.call(airCanada, 'tom', 25); //call it immediately
console.log(airCanada);

const data = ['duby', 30] 
book.apply(airCanada, data); //call it immediately

// or
book.apply(airCanada, [...data]);

console.log(airCanada);

// ========================================= bind method =======================================
// bind() does not execute the original function. It creates and returns a new function with this and optionally some arguments pre-set. The remaining arguments are supplied when you later call the new function.
//doesnt call immediately so can set argument later and even immediately as well whenever we want to call it.

const person = {
  name: 'Iffat'
};

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const greetIffat = greet.bind(person);

greetIffat('Hello');

//partial application
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); //a=2 //return another function

console.log(double(5)); //b=5 //now it execute it while simple function immediately called

//bind returns another function

//Pre-set both this AND an argument
// function book(name, flightNumber) {
//   console.log(
//     `${name} booked ${this.iataCode}${flightNumber} at ${this.airline}`
//   );
// }

const swissBook = book.bind(swiss);
swissBook('Iffat', 23);

const iffatsSwissBook = book.bind(swiss, 'Iffat'); //const newFunction = originalFunction.bind(thisValue, arg1, arg2);
iffatsSwissBook(23);

// =====================================closures ==========================

let f;

const g = function () {
    const a = 23;

    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;

    f = function () {
        console.log(b * 2);
    };
};

console.log(g());
console.log(f());
// console.dir(f);

h();
console.log(h());
f();
console.log(f());
// console.dir(f);