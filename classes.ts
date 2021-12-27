// blueprint to create an object with some fields (values) and methods (functions)
// to represent a 'thing'

class Vehicle {
    drive(): void { // return nothing
        console.log('chu chu')
    };
    backup(): void {
        console.log('bee be')
    }
}

// electricVehicle also have all the functions of Vehicle
class electricVehicle extends Vehicle {
    charge: true;
    // can overwrite drive
    drive(): void {
        console.log('silent now')
    }
}

const vehicle = new Vehicle()

// vehicle.backup()
// vehicle.drive()



// 3 Modifiers. To restrict access to different functions and variables
// public => Default modifier. This method can be called any where.
// private => this method can only be called by other methods in this class
// protected => this method can be called by other methods in this class, or by other methods in child classes

class Phone {

    color: string = 'white'

    public turnOn(): void {
        console.log('turning on')
    }

    public turnOff(): void {
        console.log('turning off')
    }

    public makeCall(): void {
        console.log('making call')
    }

    private checkBattery(): void {
        console.log('checking battery')
    }

    protected vibrate(): void {
        console.log('Vibrating')
    }
}

class PhoneXL extends Phone {
    private turnOn(): void { // error! overwriting method can't change modifier 
        console.log('turning on, incorrect new modifier')
    }
    private movieMode(): void {
        console.log('movie mode')
    }

    turnOnMovieMode = () => {
        this.checkBattery() // error, checkBattery is private method can't be accessed in child class
        this.movieMode() // access private method within class is allowed
        this.vibrate() // protected method can be access within class and in child class
    }
}

const myPhone = new PhoneXL()
myPhone.movieMode() // error! because movieMode is private and can only be accessed inside class PhoneXL
myPhone.turnOnMovieMode() // this will work, instead of calling .movieMode() directly
console.log(myPhone.color) // white


// The constructor method is a special method for creating and initializing an object created with a class
// A constructor can use the super keyword to call the constructor of the super class
class TV {
    constructor(public size: number, public color: string) {}

    // same as 
    // size: number
    // color: string
    // constructor(size: number, color: string) {
    //     this.size = size
    //     this.color = color
    // }

}

class LedTV extends TV {
    constructor(size: number, color: string, isLed: boolean) {
        super(size, color)
     }
}

const myTV = new TV(50, 'black')
const myLedTV = new LedTV(60, 'White', true)