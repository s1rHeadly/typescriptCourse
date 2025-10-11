
// ========================================
// 1. BASIC OBJECTS
// ========================================

//basic object

const dog = {
  name: "Rex",
  breed: "German Shepherd",
  age: 3,
  bark: function(){
    console.log("Woof!");
  }
}


// add the object type to the function param with the object types
function getPet(pet:{name: string, breed: string, age: number}):void{
  console.log(`${pet.name} is a ${pet.breed} and is ${pet.age} years old`);
}

getPet(dog); //evoke the function with the object




// ========================================
// 2. TYPE ALIASES & OBJECT TYPES
// ========================================

// using the object type is a better approach than the first one

// create the types for the object
type PersonType = {
  name: string;
  country: string;
  age: number;
  phone?: string; // optional property
};

// create the object
const member : PersonType = {
  name: "David",
  country: "Australia",
  age: 47,
  phone: "555-1234" // optional property = it might not be needed
};


// create the function and add the Object type to the function param And use the Person type to return the object person:Person Person
function getPerson(member: PersonType) : PersonType {
  return {...member}; // returning a copy of the object
}

getPerson(member); //evoke the function with the object








// ========================================
// 3. EXCESS PROPERTIES & STRUCTURAL TYPING
// ========================================

/**Excess Properties 
 * 
 * TypeScript uses STRUCTURAL TYPING - it checks if an object has the required properties,
 * but doesn't care if it has EXTRA properties.
 * 
 * HOWEVER, there's a catch:
 * - If you pass an EXISTING object variable (like 'member'), excess properties are ALLOWED
 * - If you pass a LITERAL object directly, excess properties cause an ERROR
 * 
 * This is called "Excess Property Checking" and helps catch typos and mistakes.
 **/

const member2 = {
  name: "David",
  country: "Australia",
  age: 47,
 
}


function showPerson(member2: {name: string, country: string, age: number}): void {
 console.log(member2);
}

// ✅ This WORKS - passing an existing object with excess properties
showPerson(member2);

// ❌ This would FAIL - passing a literal object with excess properties
// showPerson({name: "David", country: "Australia", age: 47, email: "david@gmail.com"});




// Example showing the error when passing a literal object with excess properties
function displayUser(user: {username: string, age: number}):void{
  console.log(`${user.username} is ${user.age} years old`);
}

// This FAILS - TypeScript will error because 'email' is not in the type definition
// Uncomment to see the error:
displayUser({username: "john_doe", age: 30});






// ========================================
// 4. COORDINATE EXAMPLE & TYPE ALIASES
// ========================================

/** Alias Types - also used this method above with person but hey! 
 * 
 * Create a function that returns an object
 * Each key in the obect must be mulitplied by 2
 * 
 * 
 * Always define types before using them (no hoisting like JavaScript functions)
 * 
 * Always define types before using them (no hoisting like JavaScript functions)
Optional properties use ? in type definitions, not in object literals
Type annotations on variables help catch errors early
Type consistency between objects and their types is crucial


*/


type CoordsType = {x: number, y: number};

let coords: CoordsType = {x: 43, y: 22}; // using coordsType ensures the type annotation meets that of the type 

function doublePoint(coords: CoordsType):CoordsType{
    return {
      x: coords.x * 2,
      y: coords.y * 2,
    }
}

doublePoint(coords);



// ========================================
// 5. PRIMITIVE TYPE ALIASES
// ========================================

//using primative types instead of an object, rememeber, decare the type before using it

type numType = number; // here we are creating the type

let streetNumber: numType = 10; // here we are creating the street number variablem, pointing it to the type and assigning the value

//wjhat i do os create that var and giove it a value, then declare the type after the value.

// let birthyear = 1990;
let birthyear: numType = 1990;





// ========================================
// 6. NESTED OBJECTS
// ========================================

/** Nested Objects */


type DescriptionType = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
  };
}

//example Data
const person: DescriptionType = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  }
}

function describePerson(person: DescriptionType) : DescriptionType{
    return {...person};
}

// Test the function
const describedPerson = describePerson(person);
console.log(describedPerson);



// ========================================
// 7. SPOTIFY SONG EXAMPLE - COMPLEX OBJECTS
// ========================================

/**
 * Example 2 
 * Create a nnew function that returns a number,
 * Use an objec to create a Spotfiy song and calcuulate the amount of money the artist will make
 * 
 * |Then create a new function which take in the same oject and prin a string from the object with the title and the producer
 * */ 


const song = {
  title: "A new Level",
  artist: "Pantera",
  duration: 3.45,
  streams: 1900,
  credits: {
    producer: "Dimebag Darrell",
    composer: "Vinnie Paul",
  }
}


type SongType = {
  title: string;
  artist: string;
  duration: number;
  streams: number;
  credits: {
    producer: string;
    composer: string;
  };
}


function calculatePayment(song: SongType) : number { // remember we are returning a number from this function!
  const paymentPerStream = 0.33;
  const totalStreams = song.streams * paymentPerStream;
  return totalStreams;
}


console.log(calculatePayment(song));




// 2nd function to print the song
function printSong(song: SongType) : string{
  return `The song title is ${song.title} and the producer is ${song.credits.producer}`;
}

console.log(printSong(song));



// ========================================
// 8. INLINE TYPES vs TYPE ALIASES COMPARISON
// ========================================

// like we can add the type params inside the function but adding a type object to the function param is a better approach

// not this... (inline type definition - hard to read and reuse)
function calculatePayment2(song:{title: string, artist: string, duration: number, streams: number, credits: {producer: string, composer: string}}) : number{
  const paymentPerStream = 0.33;
  return song.streams * paymentPerStream;
}

// but this... (using type alias - much cleaner and reusable)
function calculatePayment3(song: SongType) : number{
  const paymentPerStream = 0.33;
  return song.streams * paymentPerStream;
}

// ========================================
// 9. OPTIONAL PROPERTIES
// ========================================

/**
 * Optional properties allow you to define properties that may or may not be present in an object.
 * Use the ? operator after the property name in type definitions.
 * 
 * Key Points:
 * - Use ? in type definitions, not in object literals
 * - Optional properties can be undefined or omitted
 * - Helps create flexible object structures
 */



type CarModelType = {
  manufacturer: string;
  model: string;
  variation: string;
  special?: string;
  engine: {
    valves: number;
    horsepower: number;
    torque: number;
  }
}

const carModel: CarModelType = {
  manufacturer: "mercedes",
  model: "c-class",
  variation: 'AMG',
  engine:{
    valves: 16,
    horsepower: 400,
    torque: 480,
  }
}




function getCarModel(carModel: CarModelType): CarModelType {
  // create a copy and safely add special if missing
  const updatedCar = {
    ...carModel,
    special: carModel.special ?? "The Black Series", // add the special if missing
  };

  return updatedCar;
}


getCarModel(carModel);




// ========================================
// 10. READONLY MODIFIER
// ========================================

/**
 * The readonly modifier prevents properties from being modified after object creation.
 * This helps create immutable objects and prevents accidental mutations.
 * 
 * Key Points:
 * - Use readonly keyword before property type
 * - Properties can be set during object creation but not changed later
 * - Helps with data integrity and functional programming patterns
 */



type UserType = {
  readonly id: number;
  userName: string;
  age: number;
  isAdmin: boolean;
}


const user2: UserType = {
  id: 123123,
  userName: "john_doe",
  age: 30,
  isAdmin: false,
}

// user2.id = 234567; // ❌ This would cause a TypeScript error - id is readonly





// ========================================
// 11. INTERSECTION TYPES
// ========================================

/**
 * Intersection types combine multiple types into one using the & operator.
 * The resulting type has all properties from all the intersected types.
 * 
 * Key Points:
 * - Use & to combine types
 * - All properties from all types must be present
 * - Useful for extending existing types without modification
 * - Can combine object types, primitive types, and other intersections
 */

// Add your intersection types examples here:

type ColorType = { // first type
color: string
}

type CarType = { // second type
  name: string;
}

type ModelType = ColorType & CarType; // combination of the two types


const car: ModelType = {
color: "black",
name: "Mercedes",
}

console.log(car);


//adding a new parameter to the ModelType
type ModelType2 = ColorType & CarType & {
  price: number;
}

//new car2 object with the new parameter
const car2: ModelType2 = {
  color: "black",
  name: "Mercedes",
  price: 100000,
}


