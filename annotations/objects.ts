const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void { // function inside object to set age
        this.age = age
    }
}

// const { age } = profile
const { age, name }: { age: number, name: string} = profile

// const { coords: { lat, lng } } = profile
const { coords: { lat, lng } }: { coords: { lat: number, lng: number }} = profile
console.log(lat, lng)