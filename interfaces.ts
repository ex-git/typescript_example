// Interfaces: Creates a new type 
// describing the property names and value types of an object


// object must implement the interface

interface Company {
    name: string,
    summary(): string
}
const companySummary = (companyName: Company): void => {
    console.log(companyName.summary)
}

// must contain the structure of interface Company
const testCompany = {
    name: 'Facebook',
    location: 'Unknown', // this is ok if property is listed in interface 
    summary(): string {
        return ` Company name is: {this.name} `
    }
}

companySummary(testCompany)


// bad example, long type annotation
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
}

const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
    console.log(`Vehicle: ${vehicle.name}`)
}

printVehicle(oldCivic)
// bad example end

// better example with interface
// interface always with capital letter
interface Vehicle {
    name: string,
    year: Date,
    broken: boolean,
    summary(): string
}

interface Report {
    summary(): string
}

const newCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}. Year: ${this.year}`
    }
}

const returnSummary = {
    summary(): string {
        return `Name: ${this.name}. Year: ${this.year}`
    }
}

const newVehicle = (vehicle: Vehicle): void => {
    console.log(`Vehicle: ${vehicle.name}`)
}
newVehicle(newCivic)

const newPrintReport = (vehicle: Report): void => {
    console.log(`Vehicle: ${vehicle.summary}`)
}
newPrintReport(newCivic)

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drunk has ${this.sugar} grams of sugar`
    }
}

newPrintReport(returnSummary)
newPrintReport(drink)