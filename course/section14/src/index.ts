// this is the newer syntax
// const numb : number = 2;

// ..however the older syntax is still supported (hover over the code and see the explanations; note what type alias do we see?)

// using Generic types
const numbs: Array<number> = [];
const colors: Array<string> = [];



// example two of generics : again the key here is to hover the code to see the older syntax to get the generic type if we are using the newer syntax


// this is the newer syndtax;
const nameInputEl = document.querySelector('#username') as HTMLInputElement;
console.dir({ nameInputEl });

// using generic types
const emailInputEl = document.querySelector<HTMLInputElement>('#email')!; // note: the bang indicates that this element is not null or undefined
console.dir({ emailInputEl });
console.log(emailInputEl.value);


const buttonEl = document.querySelector<HTMLButtonElement>('.btn')!;
buttonEl.addEventListener('click', (e: MouseEvent) => { // note: the event is a MouseEvent because we are clicking on a button, there are lots of other event opions for event listeners
  e.preventDefault();
  console.log('button clicked');
  console.log(nameInputEl.value);
  console.log(emailInputEl.value);
});






/***
 * GENERICS FUNCTIONS EXPLAINED - importand to read and understand this commented section
 * 
 * lets say we have a function that takes a string and returns a string
 * 
 * function returnString(str: string): string {
 *  return str;
 * }
 * 
 * 
 * then, we have a function that takes a number and returns a number
 * 
 * function returnNumber(num: number): number {
 *  return num;
 * }
 * 
 * 
 * and, a function that takes a boolean and returns a boolean
 * 
 * function returnBoolean(bool: boolean): boolean {
 *  return bool;
 * }
 * 
 * 
 * and, a function that takes an array and returns an array
 * 
 * function returnArray(arr: any[]): any[] {
 *  return arr;
 * }
 * 
 * 
 * and, a function that takes an object and returns an object
 * 
 * function returnObject(obj: any): any {
 *  return obj;
 * 
 * 
 * you get the point!
 * 
 * 
 * ... remember that each of these functions have the same relationshop in terms of input and output types.
 * I want to pass in a string and I expect a string back etc
 * 
 * 
 *
 * Now we could use 'any'
 * function returnAny(any: any): any {
 *  return any;
 * }
 * 
 * 
 *This is basically saying, give me antything and I will return anything ....which defeats the purpose of type safety.
 * 
 * 
 * 
 * This is where Generics come in.
 * 
 * Give me a Type of X and I will return a Type of X => though right now, Im not sure what Type X is, I just know that it is a Type.
 *
 * */




// Here is our Generic Function in its simplest form again, remember
// Give me a Type of X and I will return a Type of X => though right now, Im not sure what Type X is, I just know that it is a Type.
function returnGeneric<Type>(arg: Type): Type {
  return arg; // this is the return type
}




// Note: most of the time <Type> is defined by using 'T' as the type parameter
// function returnGeneric<T>(arg: T): T {
//   return arg;
// }



// then when we evoke the function, declare the type of the argument (<string> or whatever type you want) and then the value of the argument
const returnString = returnGeneric<string>('Hello');
console.log(returnString);

const returnNumber = returnGeneric<number>(123);
console.log(returnNumber);

const returnBoolean = returnGeneric<boolean>(true);
console.log(returnBoolean);

const returnNUmbersArray = returnGeneric<Array<number>>([1, 2, 3]);
console.log(returnNUmbersArray);

const retunStringArray = returnGeneric<Array<string>>(['Hello', 'World']);
console.log(retunStringArray);

const returnObject = returnGeneric<{ name: string; age: number; }>({ name: 'John', age: 30 }); // note there is no type <Object> in Typescript
console.log(returnObject);





// another example of a Generic Function
// lets say we have three arrays of numbers, strings and booleans
const randomNumbers = [1, 3, 3, 4, 5, 6, 7, 8, 9, 10];
const randomStrings = ['Hello', 'World', 'Typescript', 'Generics', 'Functions'];
const randomBooleans = [true, false, true, false, true];




/**
 * explanation of the getRandValue function
 * 
 * I create my function as usual
 * I pass in a parameter and say
 * I want this funtion to be a Generic Function first <T>
 * I want my parameter to be of Type Array T[] (second T)
 * and I want to return that same type back (last T)
 * 
 * 
 * 
*/



function getRandValue<T>(list: T[]): T { // pass in one type and get back one type back of the same relationship type (list indicates our parameter)
  const randIndex = Math.floor(Math.random() * list.length);
  return list[randIndex];
}





const getRandomNumber = getRandValue<number>(randomNumbers); // we want to pass in a numbers array and get back a number hense <number>
console.log('getRandomNumber', { getRandomNumber });


const getRandomString = getRandValue<string>(randomStrings); // we want to pass in a strings array and get back a string hense <string>
console.log('getRandomString', { getRandomString });

const getRandomBoolean = getRandValue<boolean>(randomBooleans); // we want to pass in a booleans array and get back a boolean hense <boolean>
console.log('getRandomBoolean', { getRandomBoolean });






// customising a Generic Function with interface

interface TypeBoxInterface {
  width: number;
  height: number;
  length: number;
  color: string;
}


const storageBox = returnGeneric<TypeBoxInterface>({ width: 10, height: 10, length: 10, color: 'red' });
console.log('storagebox', { storageBox });




// providing default values to Generic Functions
function returnGenericDefault<T = string>(arg: T): T { // here we are saying that the default type is string if none is provided
  return arg;
}

const returnStringDefault = returnGenericDefault<string>('Hello');
console.log(returnStringDefault);

const returnNumberDefault = returnGenericDefault<number>(123);
console.log(returnNumberDefault);

const returnBooleanDefault = returnGenericDefault<boolean>(true);
console.log(returnBooleanDefault);