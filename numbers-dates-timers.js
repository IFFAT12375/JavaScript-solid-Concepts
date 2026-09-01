// ============================================================
// JAVASCRIPT NUMBERS, MATH, DATES, BIGINT, INTERNATIONALIZATION
// AND TIMERS
// ============================================================


// ============================================================
// 1. CONVERTING STRINGS TO NUMBERS
// ============================================================

// ------------------------------------------------------------
// parseInt()
// ------------------------------------------------------------
// Converts a string into an INTEGER.
//
// Syntax:
// parseInt(value, radix)
//
// radix 10 means decimal number system.

console.log(parseInt("42"));        // 42
console.log(parseInt("42px"));      // 42
console.log(parseInt("42.99"));     // 42

console.log(parseInt("101", 2));    // 5
// "101" in binary = 5


// Important:
console.log(parseInt("hello"));     // NaN

// parseInt stops reading when it encounters something
// that doesn't belong to the number.

console.log(parseInt("123abc"));    // 123
console.log(parseInt("abc123"));    // NaN


// ------------------------------------------------------------
// Number()
// ------------------------------------------------------------
// Converts a value into a number.
//
// Usually better when you want the WHOLE value to be valid.

console.log(Number("42"));          // 42
console.log(Number("42.5"));        // 42.5
console.log(Number(""));            // 0
console.log(Number("42px"));        // NaN
console.log(Number(true));          // 1
console.log(Number(false));         // 0


// ------------------------------------------------------------
// Unary +
// ------------------------------------------------------------
// A short way to convert something into a number.

console.log(+"42");                 // 42
console.log(+"42.5");               // 42.5
console.log(+"hello");              // NaN

// These are basically common alternatives:
//
// Number("42")
// +"42"


// ------------------------------------------------------------
// parseFloat()
// ------------------------------------------------------------
// Converts a string into a floating-point number.
//
// Floating point = number with decimal portion.

console.log(parseFloat("42.5"));        // 42.5
console.log(parseFloat("42.99px"));     // 42.99
console.log(parseFloat("42"));          // 42
console.log(parseFloat("hello"));       // NaN


// Difference between parseInt and parseFloat:

console.log(parseInt("42.99"));         // 42
console.log(parseFloat("42.99"));       // 42.99


// ============================================================
// 2. CHECKING NUMBERS
// ============================================================


// ------------------------------------------------------------
// Number.isNaN()
// ------------------------------------------------------------
// Checks whether a value is actually NaN.
//
// Returns true or false.

console.log(Number.isNaN(NaN));          // true
console.log(Number.isNaN(42));           // false
console.log(Number.isNaN("hello"));      // false


// Be careful:
//
// global isNaN() converts the value first.

console.log(isNaN("hello"));             // true
console.log(isNaN("42"));                // false

// Number.isNaN() is generally safer when you specifically
// want to check for the NaN value.


// ------------------------------------------------------------
// Number.isFinite()
// ------------------------------------------------------------
// Checks whether a value is a finite number.
//
// Finite means:
// not Infinity
// not -Infinity
// not NaN

console.log(Number.isFinite(42));        // true
console.log(Number.isFinite(3.14));      // true
console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(NaN));       // false
console.log(Number.isFinite("42"));      // false


// ------------------------------------------------------------
// Number.isInteger()
// ------------------------------------------------------------
// Checks whether a value is an integer.

console.log(Number.isInteger(10));       // true
console.log(Number.isInteger(10.5));     // false
console.log(Number.isInteger("10"));     // false
console.log(Number.isInteger(-5));       // true


// ============================================================
// 3. MATH
// ============================================================


// ------------------------------------------------------------
// Math.sqrt()
// ------------------------------------------------------------
// Square root.

console.log(Math.sqrt(25));              // 5
console.log(Math.sqrt(16));              // 4
console.log(Math.sqrt(2));               // 1.414...


/*
    5 × 5 = 25
    Therefore:
    sqrt(25) = 5
*/


// ------------------------------------------------------------
// Math.max()
// ------------------------------------------------------------
// Returns the largest number.

console.log(Math.max(10, 20, 5, 30));    // 30


// ------------------------------------------------------------
// Math.min()
// ------------------------------------------------------------
// Returns the smallest number.

console.log(Math.min(10, 20, 5, 30));    // 5


// ------------------------------------------------------------
// Math.random()
// ------------------------------------------------------------
// Generates a random decimal number.
//
// Range:
// 0 inclusive
// 1 exclusive
//
// Example:

console.log(Math.random());

// Possible:
// 0.123
// 0.782
// 0.456
// etc.


// ------------------------------------------------------------
// Random integer
// ------------------------------------------------------------
// JavaScript does NOT have Math.randomInt().
//
// We can create one.

const randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber);

// Gives integers:
// 0 through 9


// Random integer between MIN and MAX:
//
// Formula:
//
// Math.floor(Math.random() * (max - min + 1)) + min

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 10));
// Random integer from 1 to 10


// ============================================================
// 4. ROUNDING NUMBERS
// ============================================================


// ------------------------------------------------------------
// Math.round()
// ------------------------------------------------------------
// Rounds to nearest integer.

console.log(Math.round(4.4));     // 4
console.log(Math.round(4.5));     // 5
console.log(Math.round(4.9));     // 5


// ------------------------------------------------------------
// Math.ceil()
// ------------------------------------------------------------
// Always rounds UP toward positive infinity.

console.log(Math.ceil(4.1));      // 5
console.log(Math.ceil(4.9));      // 5


// ------------------------------------------------------------
// Math.floor()
// ------------------------------------------------------------
// Always rounds DOWN toward negative infinity.

console.log(Math.floor(4.1));     // 4
console.log(Math.floor(4.9));     // 4


// ------------------------------------------------------------
// Math.trunc()
// ------------------------------------------------------------
// Removes decimal portion.
//
// It does NOT round.

console.log(Math.trunc(4.9));     // 4
console.log(Math.trunc(4.1));     // 4
console.log(Math.trunc(-4.9));    // -4


// Difference:
//
// round(4.9) = 5
// floor(4.9) = 4
// ceil(4.1)  = 5
// trunc(4.9) = 4


// ------------------------------------------------------------
// toFixed()
// ------------------------------------------------------------
// Controls how many decimal places are displayed.
//
// IMPORTANT:
// toFixed() returns a STRING.

const price = 123.45678;

console.log(price.toFixed(2));    // "123.46"

console.log(typeof price.toFixed(2)); // string

// Useful for:
// prices
// currency
// displaying measurements


// ============================================================
// 5. REMAINDER OPERATOR %
// ============================================================

// % gives the REMAINDER after division.

console.log(10 % 3);              // 1
console.log(10 % 2);              // 0
console.log(15 % 4);              // 3


// Very useful for checking EVEN / ODD numbers.

const number = 10;

console.log(number % 2 === 0);
// true = even


console.log(11 % 2 === 0);
// false = odd


// Example:
//
// 10 / 3 = 3 remainder 1
//
// Therefore:
// 10 % 3 = 1


// ============================================================
// 6. SLASH / DIVISION
// ============================================================

console.log(10 / 2);              // 5
console.log(10 / 3);              // 3.333...


const total = 100;
const people = 4;

console.log(total / people);      // 25


// ============================================================
// 7. NUMERIC SEPARATORS
// ============================================================

// Underscores make large numbers easier to read.

const population = 1_000_000;

console.log(population);          // 1000000


const billion = 1_000_000_000;

console.log(billion);


// They don't change the actual value.

console.log(1_000 === 1000);      // true


// Useful for:
// 1_000
// 100_000
// 1_000_000
// 1_000_000_000


// ============================================================
// 8. DATES
// ============================================================


// ------------------------------------------------------------
// new Date()
// ------------------------------------------------------------

const now = new Date();

console.log(now);

// Example output:
// 2026-09-01T10:04:00.000Z
//
// Your exact output depends on current date/time.


/*
    Date object represents a specific point in time.

    JavaScript internally represents time using
    milliseconds since:

    January 1, 1970 00:00:00 UTC
*/


// ------------------------------------------------------------
// Creating a specific date
// ------------------------------------------------------------

const birthday = new Date("2000-05-15");

console.log(birthday);


// You can also provide date/time:

const meeting = new Date("2026-09-10T15:30:00");

console.log(meeting);


// ============================================================
// 9. GETTING DATE INFORMATION
// ============================================================


// ------------------------------------------------------------
// getFullYear()
// ------------------------------------------------------------

console.log(now.getFullYear());

// Example:
// 2026


// ------------------------------------------------------------
// getMonth()
// ------------------------------------------------------------

// IMPORTANT:
// getMonth() starts from ZERO.

console.log(now.getMonth());

/*
    January = 0
    February = 1
    March = 2
    ...
    September = 8
    December = 11
*/

console.log(now.getMonth() + 1);
// Easier if you want normal month number.


console.log(now.getDate());

// Day of month:
//
// 1
// 2
// 3
// ...
// 31


// ------------------------------------------------------------
// getDay()
// ------------------------------------------------------------
// Day of WEEK.
//
// Also starts at 0.

console.log(now.getDay());

/*
    Sunday = 0
    Monday = 1
    Tuesday = 2
    ...
    Saturday = 6
*/


// ------------------------------------------------------------
// UTC versions
// ------------------------------------------------------------

console.log(now.getUTCFullYear());
console.log(now.getUTCMonth());
console.log(now.getUTCDate());


// ============================================================
// 10. TIMESTAMPS
// ============================================================


// Timestamp = number of milliseconds since
// January 1, 1970 UTC.

const timestamp = now.getTime();

console.log(timestamp);

// Example:
// 1788269040000


// This number represents the exact point in time.


// ------------------------------------------------------------
// Date.now()
// ------------------------------------------------------------

// Gives the current timestamp.

console.log(Date.now());


// These are approximately equivalent:

console.log(Date.now());

console.log(new Date().getTime());


// Why timestamps are useful?

// Databases often store:
// createdAt
// updatedAt
// login time
// expiry time
// order time
// etc.


// Example:

const createdAt = Date.now();

console.log(createdAt);


// Later:

const currentTime = Date.now();

const difference = currentTime - createdAt;

console.log(difference);


// Difference is in MILLISECONDS.


// ============================================================
// 11. ISO STRING
// ============================================================


// toISOString()
// Converts Date into standard ISO format.

console.log(now.toISOString());


// Example:
//
// "2026-09-01T10:04:00.000Z"


/*
    ISO 8601 format is commonly used for:

    APIs
    databases
    backend systems
    logs
    timestamps
*/


// Example API object:

const user = {
    name: "Jerry",
    createdAt: new Date().toISOString()
};

console.log(user);


// ============================================================
// 12. setFullYear()
// ============================================================


// Changes the year of a Date object.

const date = new Date("2020-05-15");

console.log(date);

date.setFullYear(2025);

console.log(date);


// Now the year is 2025.


// Other useful setters:

date.setMonth(10);
date.setDate(20);

console.log(date);


// ============================================================
// 13. BIGINT
// ============================================================


// JavaScript Number has a safe integer limit.
//
// Maximum safe integer:

console.log(Number.MAX_SAFE_INTEGER);


// BigInt is used for VERY LARGE INTEGERS.

const bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);

console.log(typeof bigNumber);
// bigint


// Notice the "n" at the end.
//
// 123n
// 999999999999999999999n


// You can also use BigInt():

const anotherBigNumber = BigInt("12345678901234567890");

console.log(anotherBigNumber);


// BigInt arithmetic:

console.log(100n + 200n);          // 300n
console.log(10n * 5n);             // 50n


// IMPORTANT:
//
// You cannot directly mix Number and BigInt.

const normalNumber = 10;
const bigIntNumber = 20n;

// console.log(normalNumber + bigIntNumber);
// ERROR


// Convert if necessary:

console.log(BigInt(normalNumber) + bigIntNumber);


// ============================================================
// 14. INTERNATIONALIZATION
// ============================================================


// JavaScript provides Intl for formatting numbers,
// currencies, dates and more.


// ------------------------------------------------------------
// Number formatting
// ------------------------------------------------------------

const amount = 1234567.89;

console.log(
    new Intl.NumberFormat("en-US").format(amount)
);

// 1,234,567.89


console.log(
    new Intl.NumberFormat("de-DE").format(amount)
);

// 1.234.567,89


// ------------------------------------------------------------
// Currency formatting
// ------------------------------------------------------------

const priceInPKR = 250000;

console.log(
    new Intl.NumberFormat("en-PK", {
        style: "currency",
        currency: "PKR"
    }).format(priceInPKR)
);


// Example:
// PKR 250,000.00


// USD:

console.log(
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(1000)
);


// ============================================================
// 15. ISO LANGUAGE CODES
// ============================================================


// Examples:
//
// en = English
// ur = Urdu
// ar = Arabic
// fr = French
// de = German
// es = Spanish
// hi = Hindi
//
//
// Country can also be included:
//
// en-US = English - United States
// en-GB = English - United Kingdom
// en-PK = English - Pakistan
// ur-PK = Urdu - Pakistan


console.log(
    new Intl.NumberFormat("en-PK").format(1234567.89)
);

console.log(
    new Intl.NumberFormat("ur-PK").format(1234567.89)
);


// ============================================================
// 16. INTERNATIONALIZED DATES
// ============================================================

const today = new Date();


// US style:

console.log(
    new Intl.DateTimeFormat("en-US").format(today)
);


// UK style:

console.log(
    new Intl.DateTimeFormat("en-GB").format(today)
);


// Pakistan:

console.log(
    new Intl.DateTimeFormat("en-PK").format(today)
);


// Urdu:

console.log(
    new Intl.DateTimeFormat("ur-PK").format(today)
);


// More detailed formatting:

console.log(
    new Intl.DateTimeFormat("en-US", {
        dateStyle: "full"
    }).format(today)
);


// Example:
//
// Tuesday, September 1, 2026


console.log(
    new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(today)
);


// ============================================================
// 17. TIMERS
// ============================================================


// ------------------------------------------------------------
// setTimeout()
// ------------------------------------------------------------
// Executes a function ONCE after a delay.
//
// Delay is in milliseconds.
//
// 1000 ms = 1 second.

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);


// IMPORTANT:
//
// setTimeout does NOT stop JavaScript.
// It schedules the callback for later.


// ------------------------------------------------------------
// clearTimeout()
// ------------------------------------------------------------

const timeoutId = setTimeout(() => {
    console.log("You will NOT see this message");
}, 5000);


// Cancel it:

clearTimeout(timeoutId);


// ============================================================
// 18. setInterval()
// ============================================================


// Executes repeatedly after every interval.

const intervalId = setInterval(() => {
    console.log("Running every 1 second");
}, 1000);


// Stop it after 5 seconds:

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
}, 5000);


// ============================================================
// 19. PRACTICAL EXAMPLE: COUNTDOWN
// ============================================================

let count = 5;

const countdown = setInterval(() => {

    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(countdown);
        console.log("Done!");
    }

}, 1000);


// ============================================================
// 20. PRACTICAL EXAMPLE: DATE + TIMESTAMP
// ============================================================

const order = {
    id: 101,
    createdAt: Date.now()
};

console.log(order);


// Convert timestamp back to Date:

const orderDate = new Date(order.createdAt);

console.log(orderDate);


// Convert to ISO:

console.log(orderDate.toISOString());


// ============================================================
// 21. PRACTICAL EXAMPLE: CHECK USER INPUT
// ============================================================

const userInput = "25";

const age = Number(userInput);

if (Number.isFinite(age) && Number.isInteger(age)) {
    console.log("Valid age:", age);
} else {
    console.log("Invalid age");
}


// ============================================================
// 22. PRACTICAL EXAMPLE: PRICE CALCULATION
// ============================================================

const itemPrice = 499.99;
const quantity = 3;

const totalPrice = itemPrice * quantity;

console.log(totalPrice);

console.log(totalPrice.toFixed(2));


// ============================================================
// 23. PRACTICAL EXAMPLE: RANDOM OTP
// ============================================================

// Generate a 6-digit OTP.

const otp = randomInt(100000, 999999);

console.log("OTP:", otp);


// ============================================================
// 24. PRACTICAL EXAMPLE: PAGINATION
// ============================================================

// % is also useful in programming logic.

const page = 3;
const itemsPerPage = 10;

console.log(
    page % 2 === 0
        ? "Even page"
        : "Odd page"
);


// ============================================================
// QUICK SUMMARY
// ============================================================

/*

NUMBER CONVERSION
-----------------

parseInt("42.5")       -> 42
parseFloat("42.5")     -> 42.5
Number("42")           -> 42
+"42"                  -> 42


CHECKING
--------

Number.isNaN(value)
Number.isFinite(value)
Number.isInteger(value)


MATH
----

Math.sqrt()
Math.max()
Math.min()
Math.random()
Math.round()
Math.ceil()
Math.floor()
Math.trunc()


NUMBER FORMATTING
-----------------

number.toFixed(2)


OPERATORS
---------

/    division
%    remainder


LARGE NUMBERS
-------------

1_000_000


DATES
-----

new Date()
Date.now()
date.getTime()

date.getFullYear()
date.getMonth()
date.getDate()
date.getDay()

date.toISOString()
date.setFullYear()


BIGINT
------

12345678901234567890n
BigInt("12345678901234567890")


INTERNATIONALIZATION
--------------------

Intl.NumberFormat()
Intl.DateTimeFormat()

"en-US"
"en-GB"
"en-PK"
"ur-PK"


TIMERS
------

setTimeout()
clearTimeout()

setInterval()
clearInterval()

*/