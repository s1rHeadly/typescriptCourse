

/**
 * Here we get an error because the array is not typed and is treated as an empty array
 * We need to define the type of the array
*/

// const numbers : [] = [1, 2, 3, 4, 5];

const number : number[] = [1, 2, 3, 4, 5];

//we can also use the array type to define the type of the array, this is the same as option one but more common in js ecosystem
const number2 : Array<number> = [1, 2, 3, 4, 5];


const names : string[] = ["John", "Jane", "Jim", "Jill"];

const names2 : Array<string> = ['John', 'Jane', 'Jim', 'Jill'];


const mixed : (string | number)[] = [1, 'John', 2, 'Jane', 'david', 'John'];

const mixed2 : Array<string | number> = [1, 'John', 2, 'Jane'];



// an array of objects 
type PersonArrayType = {
  name: string;
  age: number;
  country: string;
};

const people : PersonArrayType[] = [
  {name: 'John', age: 20, country: 'USA'},
  {name: 'Jane', age: 21, country: 'Canada'},
  {name: 'Jim', age: 22, country: 'UK'},
  {name: 'Jill', age: 23, country: 'Australia'},
];

const people2 : Array<PersonArrayType> = [
  {name: 'John', age: 20, country: 'USA'},
  {name: 'Jane', age: 21, country: 'Canada'},
  {name: 'Jim', age: 22, country: 'UK'},
  {name: 'Jill', age: 23, country: 'Australia'},
];



// moving the type to a type object
type PeopleType = {
  name: string;
  age: number;
  country: string;
}

// then using the PeopleType object to define the array
const people3 : PeopleType[] = [
  {name: 'John', age: 20, country: 'USA'},
  {name: 'Jane', age: 21, country: 'Canada'},
  {name: 'Jim', age: 22, country: 'UK'},
  {name: 'Jill', age: 23, country: 'Australia'},
];




//multi-dimentional array

const lotsofpeople : PeopleType[][] = [
    [{name: 'John', age: 20, country: 'USA'},
      {name: 'Jane', age: 21, country: 'Canada'}, 
      {name: 'Jim', age: 22, country: 'UK'}, {name: 'Jill', age: 23, country: 'Australia'}
    ],
    [
      {name: 'John', age: 20, country: 'USA'}, 
      {name: 'Jane', age: 21, country: 'Canada'}, 
      {name: 'Jim', age: 22, country: 'UK'}, 
      {name: 'Jill', age: 23, country: 'Australia'}
    ],
]



// we can also use the tuple type to define the type of the array
const person : [string, number] = ['John', 20];

const person2 : Array<[string, number]> = [['John', 20], ['Jane', 21], ['Jim', 22], ['Jill', 23]];


// tuple array with 3 items in each object
const person3 : Array<[string, number, string]> = [
  ['John', 20, 'USA'],
  ['Jane', 21, 'Canada'], 
  ['Jim', 22, 'UK'], 
  ['Jill', 23, 'Australia']
];