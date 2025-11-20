/** 
 * 
 Use the pipe | to indicate 'or' when decalaring a condition
*/

let numb: number | string = 43;
numb = "43"; // can be string
numb = 43; // or can be a number






// excess property checking. - when you try to assign an object literal to a union type, TypeScript tries to match it exactly against each member of the union.


type Point = {
  x: number,
  y: number,
};

type Loc = {
  lat: number,
  long: number;
};



let coordinates: Point | Loc = {
  x: 10,
  y: 20,
};


// can be a point or a location
coordinates = {
  lat: 1230,
  long: 220,
};


// we are getting yelled at above


/**
 * When you directly assign an object literal to a union type, TypeScript tries to match it exactly against each member of the union.
 * Here’s what happens internally:
 * It checks if { lat, long } is valid for Point → ❌ fails (lat and long don’t exist there)
 * It checks if { lat, long } is valid for Location → ✅ fine!
 * But since step 1 failed and it’s a literal, TypeScript gives you the error instead of allowing it, to catch typos early.
 * This is known as excess property checking.
*/


// Solution


type Point2 = {
  kind: 'point', // add a tag to distinguish between the two types
  x: number,
  y: number,
};

type Location2 = {
  kind: 'location', // add a tag to distinguish between the two types
  lat: number,
  long: number;
};

let coordinates2: Point2 | Location2 = {
  kind: 'point',
  x: 10,
  y: 20,
};
// can change to....
coordinates2 = {
  kind: 'location',
  lat: 1230,
  long: 220,
};

/** how we have no errors 
 * You don’t have to use kind. Developers often use:
 * type
 * tag
 * variant
 * status  
 * 
*/






/**
 * functions and Union Types
 * */
function calculateTax(price: number | string, taxRate: number | string): number {
  if (typeof price === 'number' && typeof taxRate === 'number') {
    return price * taxRate;
  }
  return 0;
}

const tax = calculateTax(100, 0.1);
console.log(tax);





/**
 * 
 * Union types with arrays
  wrapping the types in brackets says we wamt the array to be either type of string or type of number
  if we do something like let items: string | number[] = ["apple", 42, "banana", 100]; we get an error because the array is not typed and is treated as an empty array
  Also dont do this let items: string[] | number[] = [] because we are trying to assign an array of strings to an array of numbers and vice versa
*/
let itemsArray: (string | number)[] = ["apple", 42, "banana", 100];
itemsArray.push(100);




//goin back to the Points and Loc we can say use either for our array
let coordinatesArray: (Point | Loc)[] = [{ x: 10, y: 20 }, { lat: 1230, long: 220 }];
coordinatesArray.push({ x: 10, y: 20 });
coordinatesArray.push({ lat: 1230, long: 220 });








/** Literal Types
 * 
 * 
*/

let declined: "no" | "yes" = "no";
declined = "yes"; // error


let accepted: "yes" | "no" = "yes";
accepted = "no"; // error


let responseValue: "yes" | "no" | "maybe" = "maybe";
responseValue = "maybe"; // works - "maybe" is in the union type
responseValue = "yes"; // works - "yes" is in the union type


// better to use enums for selections of options => see enums.ts








// literal types with a function
type ResponseChoice = "yes" | "no" | "maybe";
let response2: ResponseChoice; //assign the type to the variable response2

function PizzaNight(response2: ResponseChoice): ResponseChoice {
  console.log(`Is tonight pizza night? ${response2}`);
  return response2;
}

const pizzaNightResponse = PizzaNight("yes");
console.log(pizzaNightResponse);

// This would cause an error - "I'm not sure If I want it" is not a valid ResponseChoice
// const pizzaNightResponse2 = PizzaNight("I'm not sure If I want it"); // error




// Note the difference between decalaring a variable and a union type
// one needs a default value, the other does not

let withdefaultValue: "yes" | "no" = "yes";
type withUnionType = "yes" | "no";