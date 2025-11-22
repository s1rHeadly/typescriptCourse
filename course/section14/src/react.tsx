/**
 * 
 * When working in react, using <T> poses an issue with arrow functions as everything in react must have opening and closing tags.
 * 
 * So, we need to use a different syntax for arrow functions.
 * 
 * Lets take the random function we created in the index.ts file and see how we can use it in a react component.
 * 
 * function getRandValue<T>(list: T[]): T {
 *  const randIndex = Math.floor(Math.random() * list.length);
 *  return list[randIndex];
 * }
 * 
 * Copy and paste this outisde of the comment here, convert to an arrow function for react and you will see an error. = > The Type tag isnt closed therefore we get the error.
 * Here is how to fix it: add a trailing comma to the end of the first T
 * 
 * */



const getRandValueReactArrowFunction = <T,>(list: T[]): T => { // note the trailing comma to close the Type tag
  const randIndex = Math.floor(Math.random() * list.length);
  return list[randIndex];
};


