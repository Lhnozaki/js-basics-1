/* Create a `myName` variable and assign it a String value */

let myName = "Lewis Nozaki";

/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */

let person = {name: "Lewis Nozaki", age: 28};

/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */

 let canDrive = true;

/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */

 function greet(name) {
   console.log(`Hello, my name is ${name}`);
 }

 greet("Lewis");

/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */

let dataTypes = ["one", 1, false, {a:1, b:2}, [0,1], null, undefined];

/* Create a `dog` object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */

 let dog = {
   name: "Spot",
   bark: function() {
     console.log(`Bark!`);
   }
 };