// Arrays - An Array is a data structure that allows multiple values inside a single variable

// const name_1 = "Ritik", "Masand"

let students: string[] = [
  "Ritik",
  "Masand",
  "Aman",
  "Krish",
  "Piyush",
  "Priyanshu",
];
// console.log(students);

const items: string[] = [];

items.push("laptop");
items.push("Mobile");
// console.log(items);

const colors = new Array("red", "blue", "green");

const data = [1, "hello", true, null];

// console.log(students[6]);

let stack = [1, 2];

stack.push(3);

stack.push(4, 5);

stack.pop();
stack.pop();
// console.log(stack);

// Shift and unshit - they remove and add elements from the starting of the array and return it.

let number = [1, 2, 3];

const removed = number.shift();
// console.log(number, removed);

let color = ["red", "green"];

let lnth = color.unshift("blue");

// console.log(color);
// console.log(lnth);

//unshift() returns the new length

// Slice - Taking a portion
// slice() returns a portion of an array as a new array
// does not change the original array
// array.slice(start,end).
// start is included
// end is not included

let animals = ["cat", "dog", "rabbit", "fish"];

const slicedportion = animals.slice(1, 3);

console.log(slicedportion);
console.log(animals);

// Splice - it can change the original array

const splicedanimals = animals.splice(1, 2);
console.log(splicedanimals);
console.log(animals);

let num = [1, 2, 3, 4];
// num.splice(2, 0, 3);
// console.log(num);

// num.splice(1, 2, 10, 20);
// remove 2 and add 4

// num.splice(1, 2, 4, 5, 6, 7);
// console.log(num);

// ForEach

// array.forEach(callbackFunction)
// array.forEach((elemnt)=>{
//})

// array.forEach((currentvalue,index,array)=>{
//})

const stds = ["Hritik", "Amit", "Daiwik"];

stds.forEach((student, index, stds) => {
  console.log(student, index, stds);
});

// Map

const doubled_1 = num.map((num) => {
  return num * 2;
});
console.log(doubled_1);
console.log(num);

// Filters

// array.filter((currentvalue, index, array)=>{
//  return condition
//})

let num_2 = [1, 2, 3, 4, 5];

const evenNum = num_2.filter((num) => {
  return num % 2 === 0;
});
// 1%2===0 -> false
// 2%2===0 -> true (added in new array)
// 3%2===0 -> false
// 4%2===0 -> (added in new array)
// 5%2===0 -> false
console.log(evenNum);

const num_3 = [5, 12, 8, 20, 30];

const result = num_3.find((num) => {
  return num > 10; // true/false
});
console.log(result);
// 5 > 10 -> false
// 12 > 10 -> true (added in the array) - Find will stop here, filter will continue
// 8 > 10 -> false
// 20 > 10 -> true (added in the array)
// 30 > 10 -> true (added in the array)

// Find vs Filter
// Find -> returns the first matching condition
// Filter -> returns all the matching condition

const fruits = ["Banana", "Apple", "Mango", "Cheery"];
fruits.sort();
console.log(fruits);

const nums4 = [10, 5, 25, 2];

nums4.sort((a, b) => b - a);
// if result < 0, a comes before b
// 10 - 5 > 0 -> 10 5 25 2
// 5 - 25 < 0 -> 10 5 25 2
// 25 - 2 > 0 -> 10 5 2 25
// 5 10 2 25
// ..... until it is sorted

console.log(nums4);

const sum = nums4.reduce((acc, cv) => {
  return acc + cv;
}, 0);

console.log(sum);

// Rest and Spread

// Syntax -> ...

// 1. Spread Operator -> Think: Open/unlock the value

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

// console.log(arr2);

// arr1 = [1,2,3].               ...arr1 -> 1,2,3

const original = [1, 2, 3];
const copy = [...original];

copy.push(4);
// console.log(copy);
// console.log(original);

const combined = [...arr1, ...arr2];
console.log(combined);

// 2. Rest -> collect/gather the remaining value

function sum_1(...numbers: number[]) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum_1(10, 20));
console.log(sum_1(10, 20, 30, 40, 50));
console.log(sum_1(10, 200, 2000000));

// Spread -> Expand
// Rest   -> Collects

function printName(first: string, ...others: string[]) {
  console.log(first);
  console.log(others);
}

printName("Ritik", "Rahul", "Aman");
