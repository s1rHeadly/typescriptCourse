
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






// using the object type

// create the object
const person = {
  name: "David",
  country: "Australia",
  age: 47,
};


// create the types for the object
type Person = {
  name: string;
  country: string;
  age: number;
};


// create the function and add the Object type to the function param And use the Person type to return the object person:Person Person
function getPerson(person: Person): Person {
  return {...person}; // returning a copy of the object
}

getPerson(person); //evoke the function with the object








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

const member = {
  name: "David",
  country: "Australia",
  age: 47,
  email: "david@gmail.com"  // extra property not in function type
}


function showPerson(obj: {name: string, country: string, age: number}):void{
 console.log(obj);
}

// ✅ This WORKS - passing an existing object with excess properties
showPerson(member);

// ❌ This would FAIL - passing a literal object with excess properties
// showPerson({name: "David", country: "Australia", age: 47, email: "david@gmail.com"});




// Example showing the error when passing a literal object with excess properties
function displayUser(user: {username: string, age: number}):void{
  console.log(`${user.username} is ${user.age} years old`);
}

// This FAILS - TypeScript will error because 'email' is not in the type definition
// Uncomment to see the error:
displayUser({username: "john_doe", age: 30, email: "john@example.com"});

