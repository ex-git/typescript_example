// Tuple: array-like structure where each element represents some property of a record

// most use cases is for csv file. 

// object format
// const drink = {
//     color: 'brown',
//     carbonated: true,
//     sugar: 40
// }

const pepsi = ['brown', true, 40]; // this is an array
pepsi[0] = 'red' // this is ok

const coke: [string, boolean, number] = ['brown', true, 40]; // this is a tuples
coke[0] = 1 // error,


type Drink = [string, boolean, number] // instead of inline
const sprite: Drink = ['white', true, 40]