/** 
 * 
 Use the pipe | to indicate 'or' when decalaring a condition
*/

let numb: number | string = 43;
numb = "43"; // can be string
numb = 43 // or can be a number





type Point = {
  x: number,
  y: number,
}

type Location = {
  lat: number,
  long: number
}

let coordinates: Point | Location = {
  x: 10,
  y: 20,
}

// can be a point or a location
coordinates = {
  lat: 1230,
  long: 220,
}


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
}

type Location2 = {
  kind: 'location', // add a tag to distinguish between the two types
  lat: number,
  long: number
}

let coordinates2: Point2 | Location2 = {
  kind: 'point',
  x: 10,
  y: 20,
}

coordinates2 = {
  kind: 'location',
  lat: 1230,
  long: 220,
}

// how we have no errors