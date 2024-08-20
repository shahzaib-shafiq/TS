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
