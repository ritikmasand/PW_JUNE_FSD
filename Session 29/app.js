import path from "path";
import zlib from "zlib";
import fs from "fs";
const username = "piysh";
const ext = "jpg";

import { Transform, Writable } from "stream";
// const filepath = path.join("src", "files", `${username}.${ext}`);
// console.log(path.resolve("src", "public"));

// console.log(filepath);

// uploads/profile/piysh.jpg

// Components
// src/files: Directory
// data.txt : Filename
// .txt     : extension

// const filePath = path.format({
//   dir: "src/files",
//   name: "data",
//   ext: ".txt"
// });
// console.log(filePath);

// fs.watch("./data.txt", (eventType, fileName)=>{
//     console.log("Event: ", eventType);
//     console.log("File: ", fileName);
// })

// console.log("Watching data.txt");

// Readable stream
// const stream = fs.createReadStream("video.mp4");

// stream.on("data", (chunk) => {
//   console.log(`Received ${chunk.length} bytes`);
// });
// stream.on("end", () => {
//   console.log("File reading completed");
// });

// Writable stream

// const writable = fs.createWriteStream("data.txt");

// writable.write("Hola!");

// writable.end();

// Duplex - eg: TCP socket connection

// Transform

// const upperCase = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().toUpperCase());
//   },
// });

// upperCase.on("data", (chunk) => {
//   console.log(chunk.toString());
// });

// upperCase.write("hello students");

// upperCase.end();

// Pipe

// const Readable = fs.createReadStream("video.mp4");

// const writable = fs.createWriteStream("copy.mp4");

// Readable.pipe(writable);

// console.log("file copying started");

// chaining

// const readable = fs.createReadStream("missing.txt");

// readable.on("data", (chunk) => {
//   console.log(chunk.toString());
// });
// readable.on("error", (err) => {
//   console.log("Something went wrong", err.message);
// });
// const writable = fs.createWriteStream("data.txt.gz");

// readable.pipe(zlib.createGzip()).pipe(writable);

// console.log("Compression Started");

// readable.on("end", () => {
//   console.log("reading completed");
// });

// Backpressure - when the data is produced faster than it can be consumed.

// const readable = fs.createReadStream("data.txt");

// const writable = fs.createWriteStream("copy.txt");

// readable.pipe(writable);

// writable.on("finish", () => {
//   console.log("File copied successfully");
// });
