"use strict";
// Function: A function is a reusuable block of code that performs specific action/task
// console.log("Hello Ritik");
// console.log("Welcome to Typescript");
function welcome() {
    console.log("Hello Ritik");
    console.log("Welcome to Typescript");
}
// welcome();
// welcome();
// welcome();
// welcome();
function functionName() {
    //...code
}
functionName();
sendMsg("Piyush"); // Function Invokation
function sendMsg(msg) {
    // Function declaration
    console.log(msg);
}
// Function Expression
const greet = function () {
    // anonymous function
    console.log("Hello");
};
greet();
const greet1 = function fx1() {
    // Named Function
    console.log("Hello");
};
greet1();
// fx1()
// function add(a: number, b: number) {
//   return a + b;
// }
// console.log(add(10, 5));
function fx1() {
    console.log(arguments);
}
fx1();
// const add = () => {
//    console.log(arguments);
// }
// console.log(add());
// Parameter -> Variable/place holder in function's declaration
function greet_1(name) {
    console.log("Hello " + name);
}
// Argument -> actual value that is passed during the function invokation
greet_1("Ritik");
function add(a, b) {
    console.log(a + b);
}
add(10, 20);
function i1(name, age, city) { }
// i1("Ritik", 26, "Delhi", ..,..,..);
// Default parameters
// function greet_2(name: string) {
//   console.log(name);
// }
// greet_2();
// function add_3(a: number, b: number) {
//   return a + b;
// }
// let result_1 = add_3(20, 30);
// console.log(result_1);
// function test() {
//   console.log("A");
//   return;
//   console.log("B");
// }
// test();
// function greet_3(){
//   return "Hello"
// }
// greet_3()
function add_4(a, b) {
    return "hello";
}
let result_1 = add_4(20, 30);
function isAdult(age) {
    return age >= 18;
}
console.log(isAdult(10));
function printMessage(message) {
    console.log(message);
}
printMessage("Hello");
const add_5 = (a, b) => {
    return a + b;
};
const add_6 = (a, b) => {
    return a + b;
};
// while(true){
//   console.log("running");
// }
// console.log("A");
// SetTimeout and SetInterval -> Web API's
// console.log("start");
// setTimeout(() => {
//   console.log("Timer finished");
// }, 2000);
// console.log("End");
function first_1() {
    console.log("Inside First");
    Second_1();
}
function Second_1() {
    console.log("Inside Second");
}
first_1();
function test_2() {
    test_2();
}
test_2();
const name8 = "Ritik";
console.log(name8);
