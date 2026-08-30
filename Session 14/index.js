"use strict";
let age = 20;
// age --> 20
age = 21;
// age ---> 21
// Let  -> use let when the value might change
let marks = 80;
// marks = 90;  ✅
console.log(marks);
// const -> use const when the variable should not be reassigned.
const pi = 3.14;
// pi = 3.19; ❌
// var -> javascript historically had var, but modern js prefers using let and const
// var -> older style
// let -> value can change
// const -> value cannot be reassigned here
// Muptiple data types : numbers , strings, boolean (true/false), symbols, null and undefined.
// undefined
var a;
a = 20;
// null
let b = null;
// Type Inference
let age1 = 20;
// age1 -> number
// this is called as Type Inference
// let age2 = 20;
// age2 = 35;
// age2 = 40;
// age2 = "Ritik";
let name1 = "Ritik";
name1 = "Rahul";
name1 = "Aman";
// name1 = 100;
let c;
c = 100;
c = "masand";
// Var vs let vs Const
if (true) {
    var x = 20;
}
// console.log(x);
// Type annotations
let age4 = 20;
let name4 = "Ritik";
// name4 = 100;
let isStudent = true;
// Inference Vs Annotation
// Inference -> Automatic
// Annotation -> Explicitly
// let price = 499;
// let price: HTMLButtonElement = 499;
let username;
username = "ritik";
// username = 100;
// Template Literals
const employee = "Rohan";
const role = "Engineer";
// Rohan is working as an Engineer
// const message = employee + " is working as an " + role;
// console.log(message);
const message = `${employee} is working as an ${role}`;
// console.log(message);
// ${} --> interpolation
const price = 400;
const qty = 3;
// console.log(`total = ${price * qty}`);
const name5 = "Ritik";
const age5 = 26;
const html = `
<div> 
<h1> ${name5} </h1>
<p> ${age5} </p>
`;
console.log(html);
// Operators.
// An operator is a symbol that tells js/ts to perfrom some functions
let result = 10 + 5;
// Arithmetic
// + - * / % ** ++ --
// Assignment
// = += -= /= %=
// Comparision
// == === !== != > < >= <=
// Logical Operators
// && || !
// Uniary operators
// + - ! ~
let d = 10;
let e = 20;
console.log(d + e);
console.log(d - e);
console.log(d / e);
console.log(d * e);
console.log(10 % 3);
console.log(2 ** 3);
let count = 10;
count++;
// count = count + 1;
console.log(count);
// count --. count = count - 1
let balance = 100;
balance /= 50;
// balance = balance + 50;
console.log(balance);
// = , == , ===
// console.log(10 == 10); // true
// console.log(10 == "10"); // true
// console.log(10 === "10"); // false
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(5 !== 5);
const age6 = "10";
console.log(Number(age6));
console.log(typeof Number(age6));
// Logical Operators
// && -> it returns true only when both the conditions match (Logical And)
const age7 = 20;
const hasID = true;
// console.log(age7 >= 18 && hasID == false);
// || -> it returns true  even if one condition is true. (Logical OR)
// ! -> simply reverse a boolean value (Logical Not)
console.log(!true);
let f = 5;
let g = f--; // post decremenet
// let g = --f // pre decrement
console.log(f); // ans =
console.log(g); // ans =
let result_1 = (5 + 2) * 10;
// BODMAS
// 5 + 2 = 7
// 7 * 10 = 70❌
// 2*10 = 20;
// 20 + 5 = 25
console.log(result_1);
let check = 10 + 5 === 15;
// 15 === 15 -> true
const input = "50";
input + 10;
console.log(input);
// string + number => concat 
// "50" + 10 => 5010
// string - number => arithmetic calculation => 40
