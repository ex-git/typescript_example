// two number parameters and return number
const add = (a: number, b: number): number => {
    return a + b
}

const subtract = (a: number, b: number) => { // without the return 'number' annotation
    console.log('type inference will guess the return is void')
}

const logger = (message: string): never => { // if function will never return anything
    throw new Error(message)
}

const logger1 = (message: string) => { // without return type, type inference will guess
    console.log('type inference will guess the return is void')
}

const logger2 = (message: string): string => { // if function will never return anything
    if (!message) {
        throw new Error(message)
    }
    return message // use the possible return's type as return type
}

// ES 5 function works the same
function divide(a: number, b:number) : number {
    return a/b
}

const weatherNow = {
    date: new Date(),
    weather: 'sunny'
}

// Destructuring
// const logWeather = (weatherNow: { date: Date, weather: string }): void => {
//     console.log(weatherNow.date, weatherNow.weather)
// }
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date, weather)
}

