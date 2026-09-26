"use strict";
let name_1 = "Ritik";
console.log(name_1);
// Types of Scope
// 1. Global Scope
const company = "PW"; // global scope
function employee() {
    const company = "PW";
    console.log(company);
}
employee();
console.log(company);
let score = 100;
function changeScore() {
    score = 50;
}
changeScore();
console.log(score);
// Block Scope
// {
//   let message = "Hello";
// }
// console.log(message);
// Let and const are blocked scope
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Outside ", i);
// {
//   {
//     let a = 20;
//     console.log(a);
//   }
//   console.log(a);
// }
const msg = "Hello";
function greet() {
    console.log(msg);
}
greet();
// Scope Chain
const a = 10;
function outer() {
    const b = 20;
    function inner() {
        const c = 30;
        console.log(c);
        console.log(b);
        console.log(a);
    }
    inner();
}
outer();
// Variable Shadowing
const name_2 = "Global";
function outer_1() {
    const name_2 = "Outer";
    function inner() {
        const name_2 = "Inner";
        console.log(name_2);
    }
    inner();
}
outer_1();
// console.log(x);
// var x = 5;
function createCounter() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = createCounter();
counter();
counter();
counter();
function createCounter_2() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const counter1 = createCounter_2();
const counter2 = createCounter_2();
counter1();
counter1();
counter2();
function sayHello_1() {
    console.log("Hello");
}
// HOF
function runTwice(fn) {
    // logic
    fn();
    fn();
}
runTwice(sayHello_1);
// HOF
function createGreeting() {
    return function () {
        console.log("Hello");
    };
}
// Map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => {
    return num * 2;
});
console.log(doubled);
const price = [100, 200, 300, 400];
const expensive = price.filter((price) => {
    return price > 200;
});
console.log(expensive);
const total = expensive.reduce((sum, price) => {
    return sum + price;
}, 0);
console.log(total);
console.log("Start");
setTimeout(() => {
    console.log("Timer start");
}, 0);
console.log("End");
setInterval(() => {
    console.log("Hello");
}, 2000);
