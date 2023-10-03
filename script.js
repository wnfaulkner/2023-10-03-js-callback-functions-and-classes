// console.log("good morning coders")

class Car {
    //static properties/methods: called on the class itself and are not available on instances
    //i.e. anything you want the class to be able to do on objects of the class, but
    //don't depend on data from the inidivual object.
    static createCarWithDefaultModel(make) {
        return new Car(make, 'DefaultModel');
      }


    //constructor = create the class
    constructor(make, model, color) {
        this.make = make
        this.model = model
        this.color = color
        this.isRunning = false; // default to false
    }

    // prototype methods: methods that can be called on an instance (the variable that holds 
    // the new class object) called 'instance' methods in other object-oriented languages;
    start() {
        this.isRunning = true;
        console.log('Running!');
      }

    stop() {
        this.isRunning = false
        console.log('Stopped!')
    }

    toString(){
        return `This car is a ${this.color} ${this.make} ${this.model}`
    }

}

//Instantiate some cars
const myCar = new Car('ferrari','gto','red')
const yourCar = new Car('honda','civic','blue')
const aCar = Car.createCarWithDefaultModel('Toyota');


//Tests
    // console.log(myCar.isRunning)
    // myCar.start()
    // console.log(myCar.isRunning)
    // myCar.stop()
    // console.log(myCar.isRunning)
    //console.log(myCar.toString())
    //console.log(aCar); // Output: Car { make: 'Toyota', model: 'DefaultModel' }

//Extending - creating a subclass that inherits the properties of the parent superclass
    class ElectricCar extends Car {
        constructor(make, model, color, batteryCharge) {
          super(make, model, color); //the super keyword represents the parent superclass and must be called before the this keyword can be used in the constructor
          this.batteryCharge = batteryCharge;
        }

        start() { // What if we also wanted to override the start() method provided by the Car class in the ElectricCar class?
            if (this.batteryCharge > 0) {
              this.isRunning = true;
              console.log('Your electric car is running!');
            } else {
              this.isRunning = false;
              console.log('Time to recharge!');
            };
          }
      };

//Tests
    // const myVolvo = new ElectricCar('Volvo', 'EX30', 'Gray', 100); // Fully charged!
    // myVolvo.start() // "Your electric car is running!"
    // myVolvo.batteryCharge = 0
    // myVolvo.start() // "Time to recharge!"

//Defining a new class with a prototype method
class Airplane {
    constructor(engineType, model){
        this.engineType = engineType
        this.model = model
        this.throttleSetting = '0%'
        this.airSpeed = '0'
        this.landingGearDown = true
    }

    takeOff(){
        this.throttleSetting = '100%'
        this.airSpeed = '80'
        this.landingGearDown = false
        console.log(`Throttle at ${this.throttleSetting}, airspeed is ${this.airSpeed}kts. We're taking off!`)
    }
}

const myTrainer = new Airplane ('prop','Cessna')
//console.log(myTrainer.takeOff())