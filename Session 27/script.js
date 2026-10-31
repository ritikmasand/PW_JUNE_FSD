// Synchronous
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// Asynchronous
// console.log("Task 1");

// setTimeout(() => {
//   console.log("Task 2");
// }, 2000);

// console.log("Task 3");

// Blocking I/O - Sync
// I/O -> Input/Output

// const fs = require("fs");
// const data = fs.readFileSync("text.txt", "utf-8");
// console.log(data);
// console.log("Next task");

// Non Blocking I/O - Async
const fs = require("fs");
fs.readFile("text.txt", "utf-8", (err, data) => {
  console.log(data);
});
// console.log(data);
console.log("Next task");
