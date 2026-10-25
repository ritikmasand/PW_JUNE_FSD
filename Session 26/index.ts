// Symbols - It is a data type that creates a unique value every time you call.

const id1: symbol = Symbol("userId");
const id2: symbol = Symbol("userId");

// Symbol.for - same desc = same registry
const id3: symbol = Symbol.for("userId");
const id4: symbol = Symbol.for("userId");

console.log(id1 === id2); // false
console.log(id3 === id4); // true

const secretId = Symbol("id");
const user = {
  id: 101,
  name: "Krish",
  [secretId]: 999,
};

console.log(user.id);
console.log(user[secretId]);

// Object.keys()
console.log(Object.keys(user));

console.log(Object.getOwnPropertySymbols(user));

// Proxy ex

interface Account {
  balance: number;
}

const bankAccount: Account = {
  balance: 500,
};

const accountProxy = new Proxy(bankAccount, {
  get(target, prop, receiver) {
    // get -> used for reading a value
    // set -> when updating a property
    console.log(`Accessing property: ${String(prop)}`);
    return Reflect.get(target, prop, receiver);
  },
});

console.log(accountProxy.balance);

const user1 = {
  name: "Krish",
  age: 22,
};
// Reading a property

console.log(Reflect.get(user1, "name"));

// Updating a property

console.log(Reflect.set(user1, "age", 23));

// Checking a property
console.log(Reflect.has(user1, "name"));

// Deleting a property
console.log(Reflect.deleteProperty(user1, "age"));

// const u1 = Object.seal({ age: 22 });

// try {
//   Object.defineProperty(u1, "city", {
//     value: "Delhi",
//   });
// } catch (error) {
//   console.log("It failed");
// }

const u1 = Object.seal({ age: 22 });

const success = Reflect.defineProperty(u1, "city", {
  value: "Delhi",
});

if (!success) {
  console.log("Could not define property");
}

const currentDate: Date = new Date();

console.log(currentDate.toISOString());

const customDate: Date = new Date(2026, 9, 20, 21, 0);
console.log(customDate);

console.log(currentDate.getTime());
console.log(currentDate.getDay());
console.log(currentDate.getMonth());

// Floor

// 4.9? -> 4
// 4.1? -> 1
// -4.9? -> -5

console.log(Math.floor(4.9));

console.log(Math.floor(4.1));

console.log(Math.floor(-4.9));

// Trunc
// 4.9  -> 4
// -4.9 // -4

console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.9));

// Round
//4.3? 4
// 4.7? 5
// 4.5? 5
// -4.5? -4

console.log(Math.round(4.3));
console.log(Math.round(4.7));
console.log(Math.round(4.5));
console.log(Math.round(-4.5));

// Min and Max

// Random

// console.log(Math.random() * 10);
// 10 + "10"

// let otp: string = "";

// for (let i = 0; i < 4; i++) {
//   otp = otp + Math.floor(Math.random() * 10);
// }

// console.log(otp);

const otp: string = "472";

console.log(otp.padStart(16, "*"));

const date: string = "2026/10/25";

console.log(date.replaceAll("/", "-"));

const email:string = "ritik@gmail.com"

console.log(email.includes("@"));
console.log(email.includes("#"));



class Student {
  name: string = "Rahul";
  greet() {
    console.log(this.name);
  }
}
const s1 = new Student();
s1.greet.call(s1);
const greetFunc = s1.greet.apply(s1);
// console.log(greetFunc());

// s1.greet()
// console.log(greetFunc);

