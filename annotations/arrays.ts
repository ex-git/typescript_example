const carMarkers = ['ford', 'toyota', 'honda'] // type inference will know type is string[]
const carColor: string[] = [] // without type annotation, type inference will guess is type any
const carsByMake: string[][] = [] // [ ['a'], ['b'] ]

//  help with inference when extracting values
const newCar = carMarkers[0]; // typescript will know newCar is a string
const myCar = carMarkers.pop(); // typescript will know myCar is a string

// prevent incompatible values
carMarkers.push(100) // error: Argument of type 'number' is not assignable to parameter of type 'string'.

// help with 'map'

carMarkers.map((car: string): string => {
    return car.toUpperCase() // you will see hint for available auto complete because typescript know it is a string
})


// flexible types 

const importantDates: (Date | string)[] = [new Date(), '2021']
importantDates.push('2020')
importantDates.push(new Date())
importantDates.push(2022) // error