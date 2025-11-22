


// how it works with functions
function greetBasic(name: string) {
  return `Hi ${name}`;
}

const greetMessage = greetBasic("John");
console.log(greetMessage);

function greet2(name: string, age: number) {
  return `Hi ${name}, you are ${age} years old`;
}
const greetMessage2 = greet2("John", 20);
console.log(greetMessage2);


function square(a: number, b: number) {
  return a * b;
}

const calculated = square(2, 4);



// create the function, add types to the params and add type to the function (what you expect it to return) 
// here we name the function called 'multiple and expect to return a number.
// the params a and b will also have the type number
function multiple(options: { a: number, b: number; }): number {
  const first = options.a;
  const second = options.b;
  return first * second;
}


multiple({ a: 1, b: 2 });




/**
 *  types with default values
 *  eg, 'param: argument_type = default_value'
 * 
 * */

function greet3(name: string = "stranger", age: number = 20): string {
  return `Hi ${name}, you are ${age} years old`;
}

const greetMessage3 = greet3();
console.log(greetMessage3);


const greetMessage4 = greet3("John", 20);
console.log(greetMessage4);



// this works the same with an arrow function
const myFunctionTest2 = (): string => {
  return "Hello";
};


// this works the same with an arrow function with params
const myFunctionTest3 = (name: string = "Person"): string => {
  return `Hello ${name}`;
};

console.log(myFunctionTest3("David"));

/**
 *  Function with a return type
 *  eg,
 *  function myFunction('param: type = default') : returnType{
 *  return value;
 *  }
 * 
 * */

function addNumbers(a: number, b: number, ...rest: number[]): number { // using rest operator to add more numbers
  return a + b + rest.reduce((acc, curr) => acc + curr, 0);
}

addNumbers(1, 2, 3, 6, 7, 78, 8);







/**
 * Contextual typing
 * */

const mycolors = ['red', 'green', 'blue'];

// we dont ned to add a type to color as it is already defined in the colors array
const getColor = mycolors.map((color) => {
  if (color.match(/^blue$/)) {
    return color;
  }
});

console.log(getColor);





/**
 * void type when noting is being returned from a function
*/

// adding the void type to the function means that nothing is being returned from the function
function printTwice(): void {
  console.log("Hello");
  console.log("Hello");
}

printTwice();