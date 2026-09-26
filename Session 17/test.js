// console.log(x);
// var x = 5;

var x; // Undefined // declaration
console.log(x); // Undefined
x = 5; // 5

// Function Hoisting
sayHello();
function sayHello() {
  console.log("Hello");
}


console.log(y); // TDZ
let y = 5;
