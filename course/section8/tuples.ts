let blockNumbers: [number, number, number] = [1, 3, 5];

//set option to an empty array though we are setting the type that the array will only hold number string number
// has a fixed length and a fixed type
let setNumbers: [number, string, number] | [] = []; // empty array

// Instead of using push (which isn't valid for tuples and leads to errors), directly assign the tuple value 
setNumbers = [1, 'hello', 5];
// Or any valid value of type [number, string, number], or setNumbers = [];




// mixed tuple
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];
const badRes: HTTPResponse = [404, 'Not Found'];

goodRes.push('hello'); // This is valid because the tuple has a dynamic length
badRes.push(200); // This is valid because the tuple has a dynamic length

console.log(goodRes);
console.log(badRes);






