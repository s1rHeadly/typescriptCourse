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

function add(a, b){
  return a + b;
}

function add2(a:number, b:number){
  return numbers.reduce((acc, curr) => acc + curr, 0);
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
  averageCruiseSpeed(speed: number) {
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
  startEngine(): boolean
}

const latestMercedes2: Car2 = {
  model: 'C63-AMG',
  year: 2013,
  color: 'Black',
  startEngine(): boolean { // this is wrong
    return true;
  }
  startEngine() { // this is correct
    return true;
  }
}



