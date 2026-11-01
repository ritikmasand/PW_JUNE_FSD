// console.log((0.1+0.2).toFixed(1))
// 0.1, 0.2

// const name = "Ritik";
// const age = 26;

// console.log(process.argv);

// const readline = require("readline");

// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// r1.question("What is your name?", (name) => {
//   r1.question("enter your age", (age) => {
//     console.log(age);
//     console.log(`Hello ${name}!`);
//     r1.close();
//   });
// });

import fs from "node:fs";

// const data = fs.readFileSync("notes.txt", "utf-8")
// console.log(data);

// fs.writeFileSync("notes.txt", "Hello Node.js");
// console.log("File written successfully");

// fs.appendFileSync("notes.txt", "\n Welcome Students")
// console.log("Data appended ");

// fs.stat("notes.txt", (err, stats) => {
//   if (err) {
//     console.log("File not Found");
//     return;
//   }
//   console.log("File Size", stats.size);
//   console.log("Is File", stats.isFile());
// });
// fs.access("notes.txt", fs.constants.R_OK, (err) => {
//   if (err) {
//     console.log("File does not exist");
//   } else {
//     console.log("File Exists");
//   }
// });

// fs.mkdir("uploads", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Directory Created");
// });

// fs.readdir("uploads", (err, files) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(files);
// });

// fs.rename("uploads", "user-uploads", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Directory Renamed");
// });

// fs.rm("user-uploads", {recursive:true, force:true}, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Directory deleted");
// });

// fs.readdir("uploads", (err, files) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   files.forEach((file) => {
//     fs.rmSync(`uploads/${file}`, { recursive: true });
//   });
// });

import path from "node:path";

// const result = path.join("Session 28", "Uploads", "profile.png");
// console.log(result);

const filePath = "Session 28/Uploads/profile.png";

console.log(path.dirname(filePath));
