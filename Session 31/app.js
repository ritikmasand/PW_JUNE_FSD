// import { emit } from "cluster";
import { resolve } from "dns";
import { EventEmitter } from "events";
import crypto from "node:crypto";
const emitter = new EventEmitter();
import cluster from "node:cluster";
import os from "node:os";
import http from "node:http";

// on() - listen for an event
// emit() - trigger an event

// emitter.on("login", ()=>{
//     console.log("User logged in!");
// })

// emitter.emit("login")

// emitter.on("OrderPlaced", ()=>{
//     console.log("Order received");
// })
// emitter.emit("OrderPlaced")

// emitter.on("orderPlaced", (name, amount) => {
//   console.log(`${name} placed an order worth ${amount}`);
// });

// emitter.on("orderPlaced", (name,amount) => {
//   console.log(`Generating an invoice for ${name} and for amount ${amount}`);
// });

// emitter.emit("orderPlaced", "Sumit", 2500);

// emitter.on("orderPlaced", async () => {
//   console.log("sending email....");

//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   console.log("Email sent");
// });

// console.log("Before event");
// emitter.emit("orderPlaced");
// console.log("After event");

// Crypto
// password: rahul123.
// Hash:1828fkjsd382832fhfsdhfshf989842023rfjbfj929223bfvb

// original data -> Hash
// Hash -> Orignial data ❌

// const hash = crypto.createHash("sha256").update("hello").digest("hex")

// console.log(hash);

// const randomValue = crypto.randomBytes(32).toString("hex")

// console.log(randomValue);
// Byte -> 1 Byte = 8 bits
// 4 Byte -> 4*8 = 32 bits

// data -> encrypt -> (key)
// encrypt (key) -> data ✅

// Keys -> Public -> shared to everyone
// private -> cannot be shared.

// const algorithm = "aes-256-cbc"; // most common encryption algo.

// const key = crypto.randomBytes(32);

// const iv = crypto.randomBytes(16);

// const message = "Hello Ankit and Sumit";

// // cipher

// const cipher = crypto.createCipheriv(algorithm, key, iv);

// let encrypted = cipher.update(message, "utf-8", "hex");

// encrypted += cipher.final("hex");
// console.log("encrypted: ", encrypted);

// // descryption:

// const decipher = crypto.createDecipheriv(algorithm, key, iv);

// let decrypted = decipher.update(encrypted, "hex", "utf-8");

// decrypted += decipher.final("utf-8");

// console.log("decrypted:", decrypted);

// UUID's.
// Unique identifier
// Sumit -> Diff UUID's
// Sumit -> Diff UUID's

// const id = crypto.randomUUID();

// console.log(id);

// Primary process - main worker used for creating and managing other workers
// worker process - A seperate node.js process that handles incoming requests

const numCPUs = os.availableParallelism();
if (!cluster.isPrimary) {
  console.log(`primary process: ${process.pid}`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const server = http.createServer((req, res) => {
    res.end(`Request handles by workder: ${process.pid}`);
  });
  server.listen(3000);
  console.log(`Worker started: ${process.pid}`);
}
