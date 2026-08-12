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

book.call(airCanada, 'tom', 25);
console.log(airCanada);

const data = ['duby', 30] 
book.apply(airCanada, data);

// or
book.apply(airCanada, [...data]);

console.log(airCanada);