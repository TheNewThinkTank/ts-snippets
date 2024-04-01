// Object Destructuring

const rect = { x: 0, y: 10, width: 15, height: 20 }

// Destructuring assignment
const { x, y, width, height } = rect
console.log(x, y, width, height) // 0,10,15,20

// Spread Operator

// Apply
function foo (x, y, z) { }
const args = [0, 1, 2]
foo(...args)

// Destructuring
let [x, y, ...remaining] = [1, 2, 3, 4]
console.log(x, y, remaining) // 1,2,[3,4]

// Array Assignment
let list = [1, 2]
list = [...list, 3, 4]
console.log(list) // [1,2,3,4]

// Object spread
const point2D = { x: 1, y: 2 }
/** Create a new object by using all the point2D props along with z */
const point3D = { ...point2D, z: 3 }
console.log(point3D)

// for...of

let someArray = [9, 2, 5]
for (let item in someArray) {
  console.log(item) // 0,1,2
}

let someArray = [9, 2, 5]
for (let item of someArray) {
  console.log(item) // 9,2,5
}

let hello = "is it me you're looking for?";
for (let char of hello) {
  console.log(char) // is it me you're looking for?
}

// template literals

// String Interpolation
let lyrics = 'Never gonna give you up'
let html = `<div>${lyrics}</div>`

// Multiline Literals
let lyrics = `Never gonna give you up
Never gonna let you down`

// Tagged Templates
