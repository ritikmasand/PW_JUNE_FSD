// // Union Type - A union type allows a variable to hold two or more specific types. We use a |

// // ex without union type:

// // let userID: number = 101;
// // userID = "USR101"

// // ex with union type
// // let userID: number | string

// // userID = 101;
// // userID = "USR101"

// type ID = number | string;

// function printID(id: ID): void {
//   console.log(`USER ID ${id}`);
// }
// printID(101);
// printID("USR101");

// type HTTPMethod = "get" | "post" | "delete";
// let method: HTTPMethod;

// method = "get";
// method = "post";
// method = "delete";
// // method = "hello";

// type ApiResponse =
//   | {
//       status: "success";
//       data: string;
//     }
//   | {
//       status: "error";
//       message: string;
//     };

// function handleResponse(response: ApiResponse) {
//   if (response.status === "success") {
//     console.log(response.data);
//   } else {
//     console.log(response.message);
//   }
// }

// handleResponse({
//   status: "success",
//   data: "user fetched successfully",
// });

// handleResponse({
//   status: "error",
//   message: "User not Found",
// });

// function processInput(value: string | number): void {
//   if (typeof value === "string") {
//     console.log(value.toLocaleUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }
// processInput("hello");
// processInput(10.3456);

// type User = {
//   name: string;
// };
// type Admin = {
//   name: string;
//   grantAccess: () => void;
// };
// const user: User = {
//   name: "Rahul",
// };
// const admin: Admin = {
//   name: "Aman",
//   grantAccess: () => {
//     console.log("access granted");
//   },
// };
// function authenticate(account: User | Admin): void {
//   if ("grantAccess" in account) {
//     account.grantAccess();
//   }
// }
// authenticate(user);
// authenticate(admin);

// // Generic fxns

// // function getfirstnum(arr: number[]): number {
// //   return arr[0];
// // }

// // function getfirststr(arr: string[]): string {
// //   return arr[0];
// // }

// function getfirstelem<T>(arr: T[]): T {
//   return arr[0];
// }
// const num = getfirstelem([10, 20, 30]);
// const str = getfirstelem(["hello", "world"]);

// console.log(num);
// console.log(str);

// interface HasLength {
//   length: number;
// }

// function logLength<T extends HasLength>(item: T): T {
//   console.log(item.length);
//   return item;
// }

// logLength("hello");
// logLength([10, 20, 30]);
// logLength(123)

// interface User {
//   name: string;
//   age: number;
// // }
// const user: User = {
//   name: "ritik",
//   age: 22,
// };
// interface Product {
//   name: string;
//   price: number;
// }
// // Generic Interface
// interface ApiResponse_1<T> {
//   status: number;
//   data: T;
// }
// interface User {
//   name: string;
//   age: number;
// }
// const response: ApiResponse_1<User> = {
//   status: 200,
//   data: {
//     name: "Ritik",
//     age: 26,
//   },
// };
// console.log(response.data.name);

// Utility Types
interface User {
  id: number;
  name: string;
  email: string;
}
// Partial<T>

function updateuser(id: number, data: Partial<User>): void {
  console.log(id, data);
}

updateuser(1, {
  name: "Rahul",
});

updateuser(1, {
  email: "rahul@gmail.com",
});

// Readonly<T>

interface Config {
  appName: string;
  version: number;
}

const config: Readonly<Config> = {
  appName: "My name",
  version: 1,
};

// config.appName = "New Name"
console.log(config.appName);

type userPreview = Pick<User, "name" | "email">;

// Record

const permission = {
  admin: true,
  editor: true,
  viewer: false,
};

// Record<K,V>
// K -> keys ka type
// V -> values ka type

type UserRoles = "admin" | "editor" | "viewer";

const permissions: Record<UserRoles, boolean> = {
  admin: true,
  editor: true,
  viewer: false,
};

type ThemeMode = "light" | "dark" | "system";

const themes: Record<ThemeMode, string> = {
  light: "white",
  dark: "black",
  system: "white|black",
};
console.log(themes.dark);
