// For most cases, annotation is not needed
// for declaration and initialization on the same line

let apple: number = 5;  // if change 5 to string or boolean, you will see error
let speed: string = "fast";
let hasName: boolean = true;
let nothing: null = null;
let isUndefined: undefined = undefined

// build in objects
let now: Date = new Date()

// Array
let colors: string[] = ["red", "blue", "green"] // array with string item
let myNumbers: number[] = [1, 2, 3] // array with number item
let truths: boolean[] = [true, false, true] // array with true false item

// Classes
class Car {
}

// capitalized is referred to a class
let car: Car = new Car()

// Object literal
// declaring object with x and y types
let point: { x: number, y: number} = {
    x: 10,
    y: 20
}

// Function
// parameter number and output nothing (void)
const logNumber: (n: number) => void = (n : number) => {
    console.log(n) // cosole log the parameter n
}

// *** When to use annotations ***
// 1) Function that returns the 'any' type
// avoid variables with 'any' at all costs!!!

// bad
const jsonStr = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(jsonStr)  // coordinates is 'any' type. JSON.parse() return all types depends on the parameter
console.log(coordinates) // {x: 10, y: 20}
console.log(coordinates.abcde) // Typescript will not alert error because coordinates has type 'any'

// good
const jsonStr1 = '{"x": 10, "y": 20}';
const coordinates1: {x: number, y: number} = JSON.parse(jsonStr)
console.log(coordinates1) // {x: 10, y: 20}
console.log(coordinates1.abcde) // Typescript will not alert error 'abcde' does not exist in Type annotation

// 2) When we declare a variable on one line
// and initialize it later

let words = ['one', 'green', 'easy']
let foundWord // foundWord has type 'any' even we initialize it in the for loop later
// let foundWord: boolean // foundWord will have type 'boolean' in this way
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 18]
let numberAboveZero = false; //type inference will guess numberAboveZero is boolean
// let numberAboveZero: boolean | number = false; // this is the correct Type inference so numberAboveZero can be boolean and number

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i] // Typescript kick in and show error because numbers[i] is not boolean
    }
}