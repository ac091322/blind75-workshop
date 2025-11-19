/*
Please implement the following classe:
- Create a Vehicle class that contains the properties engine and speed.
   - Add a method info(), which logs the engine & speed values.
- Create a Car class that inherits from the Vehicle class.
   - Add more properties wheels and brakes.
   - Add a method honk(), which logs “Honk!”.
   - Add a static method hasBrakes(car), which takes an argument car object and returns true if its brake property is true, otherwise false.

Note: Static methods are invoked by calling it on the class itself, so Car.hasBrakes().
*/


// define the VehicleES6 class (blueprint for creating new vehicle objects)
class VehicleES6 {
    constructor(engine, speed) {
        this.engine = engine;
        this.speed = speed;
    }

    // add the .info() instance method to the VehicleES6 class
    info() {
        console.log(`The engine type for this vehicle is ${this.engine} and can go up to ${this.speed} miles per hour.`);
    }
}

// declare a new ES6 class named CarES6 that extends the VehicleES5 class (establishes inheritance)
class CarES6 extends VehicleES6 {
    constructor(engine, speed, wheels, brake) {
        super(engine, speed);
        this.wheels = wheels;
        this.brake = brake;
    }

    // add the .honk() instance method to the CarES6 class
    honk() {
        console.log("Honk!");
    }

    // defines a static method hasBrakes on the CarES6 class (belongs only to CarES6 class, not its instances)
    static hasBrakes(car) {
        return car.brake ? true : false;
    }
}

// test vehicle constructor and .info() method
const myVehicleES6 = new VehicleES6("V10", 150);
console.log(myVehicleES6);  // output: VehicleES6 { engine: 'V10', speed: 150 }
myVehicleES6.info();  // output: The engine type for this vehicle is V10. that can 150 miles per hour.

// test car constructor and instance method honk()
const myCarES61 = new CarES6("V12", 200, "Michelin", null);  // no brakes
const myCarES62 = new CarES6("V12", 200, "Michelin", "hydraulic");  // has brakes
console.log(myCarES61);  // output: CarES6 { engine: 'V12', speed: 200, wheels: 'Michelin', brake: null }
console.log(myCarES61 instanceof VehicleES6);  // output: true
console.log(myCarES61 instanceof CarES6);  // output: true
myCarES61.honk();  // output: Honk!
myCarES61.info();  // output: The engine type for this vehicle is V12 and can go up to 200 miles per hour.

// test Car class static method hasBrakes()
console.log(CarES6.hasBrakes(myCarES61));  // output: false;
console.log(CarES6.hasBrakes(myCarES62));  // output: true;

// test that hasBrakes() is not an instance method
// must use the class to access it --> CarES6.hasBrakes()
console.log(myCarES61.hasBrakes);  // output: undefined
console.log(myCarES62.hasBrakes);  // output: undefined
