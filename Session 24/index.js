"use strict";
// Classes - Class is a blueprint used to create objects
// Object - Actual Instance created from the blueprint.
// Properties - Data stored in an object
// Methods - Functions defined inside a class
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hello I am ${this.name}`);
    }
}
const user1 = new User("ritik", 26);
const user2 = new User("Amit", 23);
user1.greet();
user2.greet();
// Constructor: is a special method that runs automatically when you create an object using new.
// Without parameter properties
// class Product {
//   name: string;
//   price: number;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }
// With Parameter properties
// class Product {
//   constructor(
//     public name: string,
//     public price: number,
//   ) {}
// }
// const p1 = new Product("laptop", 50000);
// console.log(p1.name);
// Class Methods: A method is a function declared inside a class which describes what an object can do.
// class BankAccount {
//   private balance: number = 0;
//   deposit(amount: number): number {
//     if (amount <= 0) {
//       throw new Error("Invalid amount");
//     }
//     this.balance += amount;
//     return this.balance;
//   }
//   getBalance(): number {
//     return this.balance;
//   }
// }
// const account = new BankAccount();
// account.deposit(1000);
// // account.balance
// console.log(account.getBalance());
class Temperature {
    _celcius = 0;
    get fahrenheit() {
        return (this._celcius * 9) / 5 + 32;
    }
    set celcius(value) {
        this._celcius = value;
    }
}
const temp = new Temperature();
temp.celcius = 25;
console.log(temp.fahrenheit);
// Access Modifiers - they control who can access the methods and properties of a class.
// Public: Everywhere accessible
// private: only accessed in the same class
// protected: inside the same class and its child classes
// bu default is Public
class BankAccount {
    accountHolder = "Rahul";
    balance = 5000;
    bankName = "SBI";
    showBalance() {
        console.log(this.balance);
    }
}
const account = new BankAccount();
console.log(account.accountHolder);
account.showBalance();
// console.log(account.balance);
// console.log(account.bankName);
// Private vs #Private
// class vault{
//     private secret = 1234;
// }
// class vault{
//     #secret = 1234;
// }
// Inheriance
class Vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log("Engine Running");
    }
}
class ElectricCar extends Vehicle {
    // Inheritance
    start() {
        console.log("Silent EV boot up"); // Overriding
    }
}
const car = new ElectricCar("Tesla");
console.log(car.brand);
car.start();
// Super keyword
class Employee {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, age, teamSize) {
        super(name, age);
        this.teamSize = teamSize;
    }
}
const manager = new Manager("Rahul", 30, 10);
console.log(manager.name);
console.log(manager.teamSize);
// what is this?
// const user = {
//   name: "Rahul",
//   greet() {
//     console.log(this.name);
//   },
// };
// const fn = user.greet;
// fn();
// call(), apply(), bind()
// function greet(this: { name: string }, message: string): void {
//   console.log(`${message}, ${this.name}`);
// }
// const user = { name: "Rahul" };
// greet.call(user, "Hello");
// greet.apply(user, ["Hello"]);
// const boundGreet = greet.bind(user, "Hello");
// boundGreet();
function greet() {
    console.log(`Hello ${this.name}`);
}
const user = { name: "Rahul" };
const user3 = { name: "Krish" };
greet.call(user);
const userProfile = {
    username: "Divya",
    printName() {
        console.log(this.username);
    },
};
userProfile.printName();
const company = {
    brand: "Google",
    department: {
        brand: "Devops",
        getBrand() {
            return this.brand;
        },
    },
};
console.log(company.department.getBrand());
