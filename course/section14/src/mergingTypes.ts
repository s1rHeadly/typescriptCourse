

/**
 * 
 * Lets say we what to merge two objects together.
 * we would have to let typescript know that the objects are of the same type.
 * 
 * we can do this by using a generic type.
 * 
  * function merge<T, U>(obj1: T, obj2: U): T & U {
  *  return { ...obj1, ...obj2 };
  * }
 * 
 * 
*/

// where T represents the first object and U represents the second object
function merge<T, U>(obj1: T, obj2: U): T & U { // note the T & U to indicate that the return type is the intersection of the two types
  return { ...obj1, ...obj2 };
}
const mergedObject = merge({ name: 'John' }, { age: 30, pets: ['dog', 'cat', 'fish'] });
console.log('mergedObject', { mergedObject });




// however, this is not the best way to merge two objects together.
// Lets take for a second that T or U could be anhything. T could be a string and U could be a number.
// This would cause an error because a string and a number cannot be merged together.
// We can fix this by using extends



function merge2<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
const mergedObject2 = merge2({ name: 'John' }, { age: 30, pets: ['dog', 'cat', 'fish'] });
console.log('mergedObject2', { mergedObject2 });

// Now our function is more specific and constricted to only objects.




// lets create a function that returns a html element using extends to restrict the type to only HTML elements
function getDomElement<T extends HTMLElement>(selector: string): T | null {
  const domEL = document.querySelector<T>(selector);
  if (domEL) {
    return domEL;
  }
  return null; // note: we need to return null because the function is not returning a value of type T | null
}

const div = getDomElement<HTMLDivElement>('#app');
console.log('is my app here?', { div });






// same can be used with interfaces etc

interface transportType {
  name: string;
  speed: number;
  type: 'car' | 'boat' | 'plane';
}



interface employmentType {
  name: string;
  age: number;
  job: string;
}


// using one Type with constraints

function getTransportType<T extends transportType>(transport: T): T {
  return transport;
}
const transport = getTransportType({ name: 'car', speed: 100, type: 'car' });
console.log('transport type', { transport });




// using two Types with constraints

// here we are explicitly stating that the first parameter is of type employmentType and the second parameter is of type transportType
function getEmploymentType<T extends employmentType, U extends transportType>(employment: T, transport: U): T & U {
  return { ...employment, ...transport }; // merging the two objects together
}

const employment = getEmploymentType({ name: 'John', age: 30, job: 'developer' }, { name: 'car', speed: 100, type: 'car' });
console.log('employment type', { employment });