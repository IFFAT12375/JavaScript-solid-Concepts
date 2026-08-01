const str = 'iffat';
console.log(...str);

console.log(new Set('iffat'));

const orderSet = new Set(['a', 'b', 'a']); //sets are also iterable
console.log(orderSet);
for(const order of orderSet) console.log(order);

//set chainable instance methods 
console.log(orderSet.delete('a'));
console.log(orderSet.add('c'));
console.log(orderSet.has('c'));
// console.log(orderSet.clear());
console.log(orderSet.size);
console.log([...orderSet]);

//Set Iteration Methods
const foodSet = new Set(['pizza', 'pasta']);

console.log(foodSet.values());  // Output: SetIterator {'pizza', 'pasta'}
console.log(foodSet.keys());    // Output: SetIterator {'pizza', 'pasta'} (Alias for values)
console.log(foodSet.entries()); // Output: SetIterator { ['pizza', 'pizza'], ['pasta', 'pasta'] }

//sets mathematical type operations
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);// only common from both sets
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods); //all unique from both sets 
console.log('Union:', italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods); //first set except common
console.log('Difference italian', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods); 
console.log('Difference mexican', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods); // all except common in both
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));


// ============================Map====================================

const rest = new Map();

// 1. .set(key, value) -> Adds key-value and returns the entire updated Map
rest.set('name', 'Classico');
console.log(rest.set(1, 'Italy')); // Output: Map(2) { 'name' => 'Classico', 1 => 'Italy' }

// 2. .get(key) -> Retrieves value by key. Returns undefined if key doesn't exist
console.log(rest.get('name')); // Output: 'Classico'

// 3. .has(key) -> Returns boolean checking if key exists
console.log(rest.has(1)); // Output: true

// 4. .size -> Property reflecting total number of elements
console.log(rest.size); // Output: 2

// 5. .delete(key) -> Removes key-value pair. Returns true if successful
rest.delete(1);
console.log(rest.has(1)); // Output: false

// 6. .clear() -> Empties out the entire map
rest.clear();
console.log(rest.size); // Output: 0


// The Wrong Way (Common Trap ❌)
// const myMap = new Map();

// myMap.set([1, 2], 'Blueprint');

// // Returns undefined!
// console.log(myMap.get([1, 2])); 

const myMap = new Map();

// 1. Define the non-primitive variables first
const keyArray =[0,1];
const keyObject = { id: 99 };

// 2. Map them as keys
myMap.set(keyArray, 'Successful Array Mapping!');
myMap.set(keyObject, 'Successful Object Mapping!');

// 3. Retrieve them using the exact same variable references
console.log(myMap.get(keyArray));  // Output: 'Successful Array Mapping!'
console.log(myMap.get(keyObject)); // Output: 'Successful Object Mapping!'
console.log(myMap);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

console.log('Jonas Schmedtmann'.split(' '));
console.log('a+very+nice+string'.split('+'));


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}