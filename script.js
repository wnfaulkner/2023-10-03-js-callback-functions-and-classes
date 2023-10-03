
//CALLBACK FUNCTIONS LAB BEGINS ON LINE 103!


// CLASSES: https://www.google.com/url?q=https://hub.generalassemb.ly/learn/course/front-end-fundamentals-21-parent-us-online-ec-25-september-2023-21-december-2023-200997-v2/js-callback-functions-classes-this-keyword-array-iterator-methods-playing-audio/js-callback-functions-and-classes?page%3D9&sa=D&source=calendar&ust=1696733356726989&usg=AOvVaw2EkAZt7i_KwZhw55z0_o_u

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

//Instantiation
    const myTrainer = new Airplane ('prop','Cessna')
    

//CALLBACK FUNCTIONS (https://hub.generalassemb.ly/learn/course/front-end-fundamentals-21-parent-us-online-ec-25-september-2023-21-december-2023-200997-v2/js-callback-functions-classes-this-keyword-array-iterator-methods-playing-audio/js-callback-functions-and-classes?page=2)

    // Exercise 1

        // A fellow student shows you this code.  When he runs it, he expects it to
        // wait three seconds, then write "Ding!" to the console.  Instead, it writes
        // "Ding!" immediately.  Find the bug and fix it.

        function writeDing() {
            console.log('Ding!');
        }
        
        //let timerId = setTimeout(writeDing(), 3000);
        //let timerId = setTimeout(writeDing, 3000); //remove parentheses


    // Exercise 2

        // Javascript arrays have a built-in sort method that can take
        // a callback to tell it how to compare the things you want to sort.

        // Research the array sort method.

        // Write the sorting callback as a named function declaration

        // Write the callback function to provide to the sort method so that
        // the following code sorts the words from shortest to longest.

        const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

        const sortStringsByNumChars = function(string1, string2){
                return string1.length-string2.length
            }


        // The sort method sorts "in place", that is, it modifies the array
        // console.log(words.sort(sortStringsByNumChars))
        // console.log(words)

        // Check that logging words now outputs
        // ["nice", "short", "medium", "lengthy", "delicious"]

    // Exercise 3
        
        // Filter the words array from above to create a new array
        // named longWords that includes only the words with 7 or more
        // characters
        
        const filterOutWordsShorterThanSevenChars = (string) => string.length > 6
        const longWords = words.filter(filterOutWordsShorterThanSevenChars);
        //console.log(longWords)

        // Check that logging longWords outputs
        // ["lengthy", "delicious"]

    // Exercise 4

        // Code a forEach method:
        // 		1. Write a function named forEach.
        //		2. The forEach function accepts two args, an array & a callback.
        //		3. Code the forEach method such that it iterates over each element in the array arg (use a for loop).
        //		4. For each iteration, invoke the callback arg, passing to it, the element and the index of the element.

        // Test with this array
        const colors = ['red', 'green', 'blue', 'purple'];
        //and this callback
        function log(elem, idx) {
            console.log(`Index: ${idx} / Element Value: ${elem}`);
        }

        function forEach(array, callBackFunction){
            for(let i = 0; i < array.length; i++){
                let string = array[i]
                let index = i
                elem = callBackFunction(string, index)            
            }
        }

        //forEach(colors, log) //TEST

        // calling forEach(colors, log) should resulting in this output:
        // Index: 0 / Element Value: red
        // Index: 1 / Element Value: green
        // Index: 2 / Element Value: blue
        // Index: 3 / Element Value: purple

    // Exercise 5

        //console.log(cb())

        function step1(cb) {
            setTimeout(function() {
            console.log('STEP 1 COMPLETE');
            cb()
            }, 750);
        }
        
        function step2(cb) {
            setTimeout(function() {
            console.log('STEP 2 COMPLETE');
            cb()
            }, 500);
        }
            
        function step3(cb) {
            setTimeout(function() {
            console.log('STEP 3 COMPLETE');
            cb()
            }, 250);
        }

        // function runSteps(){ //my original attempt: doesn't work because setTimeout waits a specified amount of time before executing the function, and they are purposefully set up so that step 1 takes longest, etc.
        //     step1(makeTwo)
        //     step2(makeTwo)
        //     step3(makeTwo)       
        //     console.log('FINISHED')  
        // }

        // function makeTwo(){return 1 + 1}

        // runSteps()
        
        step1(function() { //official way to do it, provided response
            step2(function() {
              step3(function() {
                console.log('FINISHED');
              });
            });
          });
          

        /*
        The above functions are working asynchronous functions - DO NOT
        change any of their code. They are what we call "black boxes"
        because we do not need to know anything that goes on inside of them.
        
        Each of the three functions accept a single argument - a callback function.
        
        Write the code that invokes the three functions such that the output in the console will be:
        
        STEP 1 COMPLETE
        STEP 2 COMPLETE
        STEP 3 COMPLETE
        FINISHED
        
        Hints: 
        - Call `step1` first.
        - You cannot call `step2` until after `step1` has "finished", similarly, you cannot call `step3` until `step2` has "finished".
        - You must console.log the last line of the output, `FINISHED`, after `step3` has "finished".
        */