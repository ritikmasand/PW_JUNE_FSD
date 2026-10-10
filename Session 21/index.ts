// Try and Catch

// try {
//   console.log("Program Started");

//   throw new Error("Something Went Wrong");

//   const result: number = 10 / 2;
//   console.log(result);

//   console.log("Program Ended");
// } catch (error: unknown) {
//   if (error instanceof Error) console.log(error.message);
// }

// try {
//   throw new Error("Pw skills Error!");
//   console.log("fbjsbfsbf");
// } catch (error: unknown) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   }
// }

// try {
//   console.log("Inside try");
//   throw new Error("Something went Wrong");
// } catch (error: unknown) {
//   console.log("Inside Catch");
// } finally {
//   console.log("Inside Finally");
// }

// API:

// Rest API:
// Representation State Transfer
// Rest Api generally use HTTP Methods
// GET -> Fetching products
// Post -> add new user details
// Put -> To update the details
// Patch -> sirf username ko update karna
// Delete -> deleting info from backend

// API
// 1. Network Failure
// 2. Server Error - HTTP 500 (500 Internal Server error)
// 3. Wrong Address - HTTP 404 (api/product/99999)
// async function getData(url: string): Promise<unknown> {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.log(error.message);
//     }
//   
//   }
// }
// async function main(): Promise<void> {
//   try {
//     const data = await getData(
//       "https://jsonplaceholder.typicode.com/users/2000000",
//     );
//     console.log("User Data", data);
//   } catch (error: unknown) {
//     console.log("Unable to load user data");
//   }
// }
// main();

// const user = {
//   name: "Ritik",
//   age: 21,
//   email: null,
// };
// console.log(user.name);
// console.log(user.email);

// const user = null;
// console.log(user.email);

// Null vs Undefined
// Undefined
// let username: string | undefined;

// console.log(username);

// Null
// let username: string | null = null
// console.log(username);

// interface Match {
//   stadium?: {
//     city?: string;
//   };
// }

// // const city = match?.stadium?.city ?? "Venue TBD";
// // console.log(city);
// const match: Match = {};
// const city = match?.stadium?.city ?? "Venue TBD";

// console.log(city);

// const username: string | null = null;
// const result = username ?? "Guest";
// console.log(result);

// {
//   id: 101,
//   name: "Ritik",
//   age: 21
// }

// const user = {
//   name: "Ritik",
//   email: "ritik@gmail.com",
// };

// console.log(user.name);

// const userJSON: string = '{"name": "Ritik", "email": "ritik@gmail.com"}';
// console.log(userJSON.name);
//JSON.stringify()

// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// console.log(typeof userJSON);

// JSON.parse()
// const userJSON: string = '{"name": "Ritik", "email": "ritik@gmail.com"}';
// const user = JSON.parse(userJSON);
// console.log(user);
// Saving the data
// localStorage.setItem("name", "Ritik");

// // Get
// console.log(localStorage.getItem("name"));

// localStorage.removeItem("name");

// localStorage.clear();

const user = { id: 101, name: "Ritik" };

localStorage.setItem("user", JSON.stringify(user))

const data = localStorage.getItem("user")
console.log(data);

