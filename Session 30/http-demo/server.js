import http from "http";
import { json } from "stream/consumers";

// Create HTTP server

// const server = http.createServer((req, res) => {
//   //   console.log("Request received");
//   console.log("URL:", req.url);
//   console.log("Method: ", req.method);

//   res.writeHead(200, {
//     "content-type": "text/plain",
//   });
//   res.end("request received successfully");
// });
// Send response
//   res.end("Hello from Node.js Server");
//   res.end(
//     JSON.stringify({
//       name: "Divya",
//       age: 22,
//     }),
//   );
// });

// server.listen(3000, () => {
//   console.log("server running on port 3000");
// });

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     res.end("Welcome to Home page");
  //   } else if (req.url === "/about") {
  //     res.end("Welcome to about page");
  //   } else if (req.url === "/home") {
  //     res.end("Welcome to home page");
  //   } else if (req.url === "/product") {
  //     res.end("Welcome to product page");
  //   } else {
  //     res.writeHead(404, {
  //       "content-Type": "text/plain",
  //     });
  //     res.end("404 - page not found");
  //   }

  const myUrl = new URL(req.url, "http://localhost:3000");
  const name = myUrl.searchParams.get("name");
  const age = myUrl.searchParams.get("age");

  res.end(`Hello ${name}, your age is ${age}`);
});
server.listen(3000, () => {
  console.log("server running on port 3000");
});
