// create a date object with Date class
let date = new Date();

/* WE have 3 kind of time format:
1. UTC ( Coordinated Universal Time ) (Think of UTC as "global time" — it's the same everywhere.)
2. ISO ( international standard) ( has Z at the end)
3. unix timestamp (milliseconds passed since 1970)
*/

// date object methods

// 1. formatting methods
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());
console.log(date.toLocaleTimeString());

// 2. accessing components methods ( get specific part from date object)
console.log(date.getFullYear());
console.log(date.getMonth()); // month start from 0
console.log(date.getDate());
console.log(date.getDay());

// Date.now() method ( generally used to create timestamp)
console.log(Date.now()); // returns the current time in milliseconds

// how to get millisecond passed since 1970 from date object?
console.log(date.getTime());

// **** To format date in a more advance pattern, for that we can use packages like date-fns, moment, day.js. These packages provides better support for localization, timezones, advanced formatting..

// get ISO time
console.log(date.toISOString());

// get unix timestamp
console.log(date.getTime());

// get UTC time
console.log(date.toUTCString());

// 1 sec = 1000 milliseconds

// write a function to calculate my age?
function calculateAge(dob) {
  const currentDate = new Date();
  const myDOB = new Date(dob);

  // return currentDate - myDOB; // will return in millisecond

  let years = currentDate.getFullYear() - myDOB.getFullYear();

  let months = currentDate.getMonth() - myDOB.getMonth();

  let days = currentDate.getDate() - myDOB.getDate();

  // adjust if birthday hasn't appeared this year yet
  if (days < 0) {
    months -= 1;
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

console.log(calculateAge("2000/07/31"));

// locale based formatting
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());
