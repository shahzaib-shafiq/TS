import { TIME } from "sequelize";

let num: number = 5;

const sum = (a: number, b: number): number => {
  return a + b;
};

//console.log(sum(3, 4));

let flag: boolean = true;
let isDone: boolean = false;

function isEven(a: number): boolean {
  return a % 2 === 0;
}
type StringArray = Array<string>;
type NumberArray = Array<number>;

interface Point {
  x: number;
  y: number;
}
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
//logPoint(point);

//console.log(isEven(4));

// let sum: bigint = 456666666666666666666666666;
const point3 = { x: 12, y: 26, z: 89 };
//logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
//logPoint(rect); // logs "33, 3"

// Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
//   Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
// const color = { hex: "#187ABF" };
// logPoint(color);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
//logPoint(newVPoint); // logs "13, 56"

const message = "Hello World!";
message.toLowerCase();
// Calling 'message'
//message(); TypeError: message is not a function

const user = {
  name: "Daniel",
  age: 26,
};
//console.log(user.name);
//user.location; // returns undefined

const announcement = "Hello World!";

// How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();

// We probably meant to write this...
//console.log(announcement.toLocaleLowerCase());

function flipCoin() {
  // Meant to be Math.random()
  return Math.random();
}

// console.log(flipCoin());
// function greet(person: String, date: String) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }

// greet("Brendan", "32");

// or

function greet(person: string, date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timeString = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

  console.log(
    `Hello ${person}, today is ${date.toDateString()} and the time is ${timeString}!`
  );
}

//greet("Maddison", new Date());

function greets(person: String, date: Date) {
  console.log(`Hello ${person} today is ${date.toDateString()}!`);
}
//greets("Maddison", new Date());

// function greet(person: string, date: Date, time: Time) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Maddison", new Date(), new TIME());

//funcrions
function greetss(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
//greetss("sd");

function getFavoriteNumber(): number {
  return 26;
}

async function getFavoriteNumbers(): Promise<number> {
  return 26;
}
//console.log(getFavoriteNumbers());

const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });

// Contextual typing also applies to arrow functions

// names.forEach((s) => {
//   console.log(s.toUpperCase());
// });

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
// printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
  console.log(obj.first);
  if (obj.last !== undefined) {
    // OK

    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
// Both OK
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

//welcomePeople("Sa");

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

//extending a Interface

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

// const bear = getBear();
// bear.name;
// bear.honey;

let name: any = "Scaler";
let companyname = <string>name;
//console.log(typeof companyname);

interface employee {
  name: string;
  code: number;
}
let employee = <employee>{};
employee.name = "Yash";
employee.code = 1520;

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

// interface Person {
//   name: string;
//   age: number;
// }

// function greetsssss(person: Person) {
//   return "Hello " + person.name;
// }
// greetsssss();

type Person = {
  name: string;
  age: number;
};

function greetssssssssssss(person: Person) {
  return "Name " + person.name + " Age " + person.age;
}
const person1: Person = { name: "John", age: 30 };
//console.log(greetssssssssssss(person1)); // Output

interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}

// function evict(home: Home) {
//   // But we can't write to the 'resident' property itself on a 'Home'.
//   home.resident = {
//

//Cannot assign to 'resident' because it is a read-only property.

//     name: "Victor the Evictor",
//     age: 42,
//   };
// }

class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
// Base class method
// d.move();
// Derived class method
// d.woof(31);

class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const dr = new Derived();
dr.greet();
dr.greet("reader");
