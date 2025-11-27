/**
 * 
 * Tips for wriging TypeScript code
 * 
 * 1. Use the any type as a last resort
 * 2. Use the void type to indicate that a function does not return a value
 * 3. Types and Interfaces are the same but written differently
*/


/**
 * Write the JS first and then add the types
 */

function add(a: any, b: any) {
  return a + b;
}

function add2(a: number, b: number) {
  return a + b;
}



interface Car3 {
  model: string;
  readonly year: number;
  color: string;
  topSpeed: number;
  // remember: In an interface, you define the method’s signature (parameter types and return type)
  // here speed is the param using type of number and the return type is number
  averageCruiseSpeed(speed: number): number;
}

// variable of type Car3 equals Object of type Car3
const benz: Car3 = {
  model: 'C63-AMG',
  year: 2013,
  color: 'Black',
  topSpeed: 300,
  averageCruiseSpeed(speed) {
    const averageSpeed = this.topSpeed / speed;
    return averageSpeed;
  }
};

console.log(benz.averageCruiseSpeed(2)); // ✅ Works fine




// DO NOT RETURN TYPE AFER THE PARAM LIST LIKE A NORMAL TYPE FUNCTION
interface Car2 {
  model: string;
  readonly year: number;
  color: string;
  startEngine(): boolean;
}

const latestMercedes2: Car2 = {
  model: 'C63-AMG',
  year: 2013,
  color: 'Black',
  startEngine() { // correct - don't add return type in implementation
    return true;
  },
};


// union type where numbersType is either an array of numbers or a single number
type numbersType = (number | string)[] | [];





// Disable TypeScript checking for a file
// @ts-nocheck




// use unknown instead of any
type unknownType = unknown;

let notSure: unknownType = 'Hello World'; // can change from string to number
notSure = 123; // can change from number to string
notSure = true; // can change from boolean to string
notSure = [1, 2, 3]; // can change from array to string
notSure = { name: 'John' }; // can change from object to string
notSure = () => { console.log('Hello World'); }; // can change from function to string
notSure = undefined; // can change from undefined to string
notSure = null; // can change from null to string
notSure = NaN; // can change from NaN to string
notSure = Infinity; // can change from Infinity to string




