// Objects

// An Object allows us to keep related information together as a key-value pair

const f_name = "Ritik";
const age = 26;
const city = "New Delhi";
const isStudent = true;

const student = {
  f_name: "Ritik",
  age: 26,
  city: "New Delhi",
  isStudent: true,
};

// type User = {
//   name: string;
//   age: number;
// };

// const user: User = {
//   name: "Ritik",
//   age: 22,
// };

// const user = {
//   name: "Ritik",
//   address: {
//     city: "Delhi",
//     pincode: 110001,
//   },
// };

// console.log(user.address.city);

type Address = {
  city: string;
  zip: number;
};

type User = {
  id: string;
  personalInfo: {
    name: string;
    location: Address;
  };
};

const admin: User = {
  id: "ADM-01",
  personalInfo: {
    name: "Ritik",
    location: {
      city: "New york",
      zip: 10001,
    },
  },
};
// Ways to access object properties
// 1. dot Notation
admin.personalInfo.location.city;

// 2. Bracket notation
const stats = {
  "active-users": 500,
};

console.log(stats["active-users"]);

// Note: Keys in objects always have to be in string. If not js will automatically convert it into a string

const user_1 = {
  l_name: "Ritik",
  email: "ritikmasand10@gmail.com",
};

const key = "email";

console.log(user_1[key]);

// Destruction

// const ff_name = user_1.name
// const email = user_1.email

const { l_name, email } = user_1;

console.log(l_name, email);

const studens = [
  { name: "Ritik", age: 26 },
  { name: "Rahul", age: 28 },
  { name: "Sameer", age: 24 },
  { name: "Manu", age: 25 },
];

console.log(studens[0].age);

const user = {
  name: "Ritik",
};

// console.log(user.address?.city);
// Optional chaining

const dataa = {
  user: {
    location: {
      city: "Delhi",
    },
  },
};
console.log(dataa?.user?.location?.city);

const user2 = {
  name_1: "Ritik",
};

// console.log(user.address?.city ?? "unknown");

const player = {
  id: 1,
  score: 100,
};

// without destructing
// const id = player.id;
// const score_1 = player.score;

// console.log(id,score_1);

// Object destructuring

const { id, score } = player;
// id -> 1
// scrore -> 100
console.log(id);
console.log(score);

const user_4 = {
  nameee: "Ritik",
  ageee: 22,
  city: "Delhi",
};

const { nameee: first_name, ageee } = user_4;

console.log(first_name, ageee);

