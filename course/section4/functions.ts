


// how it works with functions
function greet(name: string){
  return `Hi ${name}`
}

 const greetMessage = greet("John");
console.log(greetMessage);

function greet2(name: string, age: number){
  return `Hi ${name}, you are ${age} years old`;
}
const greetMessage2 = greet2("John", 20);
console.log(greetMessage2);


function square(a: number, b: number){
    return a * b;
}

const calculated = square(2, 4);




function multiple(options: {a: number, b: number}){
    const first = options.a;
    const second = options.b; 
    return first * second;
}


multiple({a: 1, b: 2});




/**
 *  types with default values
 *  eg, 'param: type = default'
 * 
 * */

function greet3(name: string = "stranger", age: number = 20){
  return `Hi ${name}, you are ${age} years old`;
}

const greetMessage3 = greet3();
console.log(greetMessage3);


const greetMessage4 = greet3("John", 20);
console.log(greetMessage4);






/**
 *  Function with a return typr
 *  eg,
 *  function myFunction('param: type = default') : returnType{
 *  return value;
 *  }
 * 
 * */

function addNumbers(a: number, b: number, ...rest:number[]): number{
  return a + b + rest.reduce((acc, curr) => acc + curr, 0);
}

addNumbers(1,2,3,6,7,78,8);