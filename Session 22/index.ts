// Type Alias
// A Type Alias allows us to create a custom name for a type using the type keyword. It acts as a blueprint that defines
// structure of an object

// Example:

// type User = {
//   id: number;
//   username: string;
//   email: string;
//   IsActive: boolean;
// };

// const user1: User = {
//   id: 101,
//   username: "ritik",
//   email: "ritik@gmail.com",
//   IsActive: true,
// };

// console.log(user1.username);

// type UserID = string;

// const id: UserID = "user101";

// Interface
// An interface acts as a blueprint/structure that an object must follow

// interface User {
//   id: number;
//   username: string;
//   email: string;
// }
// interface Admin extends User {
//   role: string;
// }
// const user1: User = {
//   id: 101,
//   username: "Ritik",
//   email: "ritik@gmail.com",
// };

// const admin1: Admin = {
//   id: 1,
//   username: "Admin1",
//   email: "Admin@gmail.com",
//   role: "Admin",
// };
// console.log(admin1);

// interface i1 {
//   name: string;
// }

// interface i1 {
//   age: number;
// }
// const user2: i1 = {
//   name: "Ritik",
//   age: 32,
// };

// Optional Properties
// type User = {
//   name: string;
//   readonly age: number;
//   email?: string;
// };

// const user1: User = {
//   name: "ritik",
//   age: 21,
// };

// user1.name = "Piysuh";
// user1.age = 31; - Not Allowed
// const user2: User = {
//   name: "Hritik",
//   age: 23,
//   email: "Hritik@gmail.com",
// };

// console.log(user1.email ?? "No email Provided");

// Typed Arrays of Objects

// type Student = {
//   name: string;
//   age: number;
// };

// const students: Student[] = [
//   { name: "Piyush", age: 21 },
//   {
//     name: "Divya",
//     age: 22,
//   },
//   {
//     name: "Amit",
//     age: 23,
//   },
// ];

// console.log(students);

// // const student1: Array<Student> = [

// // ]

// const age_students = students.filter((student) => student.age >= 22);
// console.log(age_students);

// Reusable Object Modelling

// type PersonalInfo = {
//   name: string;
//   age: number;
// };

// type ContactInfo = {
//   email: string;
//   phone: number;
// };
// type User = PersonalInfo & ContactInfo;

// const user1: User = {
//   name: "Rahul",
//   age: 29,
//   email: "rahul@gmail.com",
//   phone: 992233,
// };

// Utility Types

type User = {
  id: number;
  name: string;
  email: string;
};

// Pick - Include Specific property
type UserPreview = Pick<User, "id" | "name">;

const user1: UserPreview = {
  id: 101,
  name: "Amit",
};

// Omit - Exclude specific property

type NewUser = Omit<User, "id">;
const user2: NewUser = {
    name:"Amit",
    email:"fsfs",
}

// Partial - make all properties optional
type updateUser = Partial<User>;

const user3: updateUser = {
    name:"Ritik"
}
