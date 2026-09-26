// if

// let age = 10;

// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("You cannot vote");
// }

let marks = 55;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else if (marks >= 70) {
  console.log("C");
} else if (marks >= 60) {
  console.log("D");
} else {
  console.log("F");
}

let cardValid = false;
let pincorrect = true;

let balance = 5000;

if (cardValid) {
  if (pincorrect === true) {
    if (balance >= 1000) {
      console.log("transaction successful");
    } else {
      console.log("Insufficient funds");
    }
  } else {
    console.log("Wrong Pin");
  }
} else {
  console.log("Invalid Card");
}

// if (checkin) {
//   if (boardingpaas) {
//     log("Boarding successful");
//   }
// }

// Switch

let day = 20;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

if (0) {
  console.log("Yes");
} else {
  console.log("No");
}

// if (10) {
//   console.log("10");
// } else {
//   console.log("Not 10");
// }
// 0 is false, everything else is true

let username = "Ritik";

if (username) {
  console.log("Welcome " + username);
} else {
  console.log("Pls enter proper name");
}

// empty string is always falsy

// Ternary operator  ? :

let age = 20;

// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("You cannot vote");
// }

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

let num = 10;

if (num > 20) {
  console.log("A");
}
if (num > 30) {
  console.log("B");
}
if (num > 40) {
  console.log("C");
} else {
  console.log("F");
}
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");

for (let i = 1; i <= 5; i++) {
  console.log("Hello world");
}

// for(initialize;condition;update)

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(5 * i);
// }

// while(condition)
// let i = 6;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// 5 = 5*4*3*2*1 // 1*2=2, 2*3 = 6, 6*4 = 24; 24*5  = 120
// 4 = 4*3*2*1
// let factorial = 1;

// for (let i = 1; i <= 5; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);

// do while

// let j = 6;
// do {
//   console.log(j);
//   j++;
// } while (j <= 5);

// for (let k = 1; k <= 5; ) {
//   console.log(k);
// }

// Break statement

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// Counter

let nums = [7, 2, 7, 5, 7, 8];

// Q - I have to find the count of occurence of seven
let count = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 7) {
    count++;
  }
}
// count = 3
console.log("Seven count " + count);

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Q - Find how many even numbers are there?

let count1 = 0;

for (let i = 0; i < num1.length; i++) {
  if (num1[i] % 2 === 0) {
    count1++;
  }
}

console.log(count1);

// Accumaltor

// Q -> find sum of first 5 num starting from 1
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}

console.log(sum);

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
  // col
  let row = "";
  for (let j = 1; j <= i; j++) {
    // row
    row += "*";
  }
  console.log(row);
}

// ****
// ****
// ****
// ****

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    row += "*";
  }
  console.log(row);
}

// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

// 1
// 22
// 333
// 4444
// 55555

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i;
  }
  console.log(row);
}
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// Increasing part

for (let i = 1; i <= 5; i++) {
  let rows = "";
  for (let j = 1; j <= i; j++) {
    rows += "*";
  }
  console.log(rows);
}

for (let i = 4; i >= 1; i--) {
  let rows = "";
  for (let j = 1; j <= i; j++) {
    rows += "*";
  }
  console.log(rows);
}

//     *
//    * *
//   * * *
//  * * * *
// 4 clos

// 4 - 1 = 3
let n = 4;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
