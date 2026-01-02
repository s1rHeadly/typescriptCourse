/** Basics */





(function () {

  let movieTitle: string = 'Interstellar';
  let numb: number = 909;
  let both: (string | number) = "909";

  let isLogged: boolean = true;

  let lotsOfNumbers: number[] = [2, 3, 4, 5, 6, 8, 9];
  let lotsOfStringsOrNumbers: (string | number)[] = [2, 3, 4, 5, "77", "13", 5, "54"];

  let anythingYouWant: any = '';
  anythingYouWant = 67;
  anythingYouWant = "Kate";
  anythingYouWant = false;


  // basic array of objects

  type Movie = {
    title: string;
    year: number;
    recommended: boolean;
    rating: number;
  };


  // const movieData is a Movie type of array 'movie[]'
  const moviesData: Movie[] = [
    {
      title: "Batman",
      year: 2002,
      recommended: true,
      rating: 30,
    },
    {
      title: "Heat",
      year: 2000,
      recommended: true,
      rating: 40,
    },
  ];



  let selectedMovie: any;

  for (let movie of moviesData) {
    const movieTitle = movie.title;

    if (movieTitle.includes('Heat')) {
      selectedMovie = movie;
    }
  }

})();







/** Functions = always evoke a function with a value so we can at least a reult and build the function around that */

(function () {

  function multiply(a: number, b: number): number {
    return a * b;
  }
  multiply(4, 7);


  // using an object as a para,
  function multiObject(options: { title: string, year: number; }): Object {
    const name = options.title;
    const birth = options.year;

    const newObject = {
      name, birth
    };

    return newObject;
  }

  multiObject({ title: 'David', year: 1979 });



  // with default
  function greet(name: string = 'Kevin'): string {
    return `Welcome ${name}`;
  }

  greet('David');



  // using the rest operator
  function addNumbers(a: number, b: number, ...rest: number[]): number { // using rest operator to add more numbers) : number{
    const added = a + b + rest.reduce((acc, curr) => acc + curr, 0);
    return added;
  }

  addNumbers(1, 2, 3, 6, 7, 78, 8);

})();


/** Objects */

(function () {

  const dog = {
    name: "Rex",
    breed: "German Shepherd",
    age: 3,
    bark: function () {
      console.log("Woof!");
    }
  };

  function getPet(pet: { name: string; breed: string; age: number; bark: () => void; }) {
    console.log(`${pet.name} is a ${pet.breed} and is ${pet.age} years old.`);
    pet.bark();
  }

  getPet(dog);



  /** Object and Type Alias' */

  type PersonType = {
    name: string,
    nationality: string,
    age: number,
    location: string,
    hobbies: string[];
    quote: (line: string) => void;
  };
  const member: PersonType = { // pass the PersonType as the type
    name: "david",
    nationality: "australian",
    age: 47,
    location: "sydney",
    hobbies: ['cars', 'computing', 'guitars', 'music', 'food'],
    quote: (line: string) => console.log(line),
  };


  // because we have created our type object we dont need to do function getPerson(person: {name: string, nationality: string}) ...
  // now we just pass it into the function

  function staffMember(person: PersonType): PersonType {
    return { ...person }; // since we are pssing an obkect in above, we return the person object
  }

  staffMember(member); // member is the object with the personType type



  // an array of objects

  // a;ways declare the type first and then the data model

  type CitizenType = {
    name: string;
    country: string;
    age: number;
    phone?: string; // optional property
  };

  const citizensList: CitizenType[] = [ //CitizenType[] means an array of CitizenType objects.
    { name: "John", country: "USA", age: 25 },
    { name: "Jane", country: "Canada", age: 30 },
    { name: "Bob", country: "UK", age: 35 }
  ];


  function findCitizenByName(citizensList: CitizenType[], name: string): CitizenType | undefined {
    return citizensList.find(person => person.name === name.toLowerCase());
  }

  findCitizenByName(citizensList, "john");

  /**
   * 
   * Function parameter: citizensList: CitizenType[]
   *  citizensList is the name of the parameter.
   * CitizenType[] is its type.
   * What it means:
   * CitizenType is the type of a single citizen object, defined earlier:
  */

})();




/** Arrays */

(function () {


  // empty array
  const myArray: any[] = []; // array of anything

  // string
  const MyArrayStrings: string[] = ['some', 'content', 'here'];

  // numbers
  const myArrayNums: number[] = [1, 2, 3, 4, 5];

  // union of string or numbs
  const myArrayOptions: (string | number)[] = [1, 'one', 2, 'two', 3, 'three'];


  // create object type then assign the type to an array of objects
  type PersonType = {
    name: string,
    age: number,
    country: string;
  };


  const people: PersonType[] = [ //PersonType with [] means everything inside the array will have the PersonType type applied
    { name: 'John', age: 20, country: 'USA' },
    { name: 'Jane', age: 21, country: 'Canada' },
    { name: 'Jim', age: 22, country: 'UK' },
    { name: 'Jill', age: 23, country: 'Australia' },
  ];


  console.log(people[0].name);// john


  // multidimensional aray
  const lotsofpeople: PersonType[][] = [
    [{ name: 'John', age: 20, country: 'USA' },
    { name: 'Jane', age: 21, country: 'Canada' },
    { name: 'Jim', age: 22, country: 'UK' }, { name: 'Jill', age: 23, country: 'Australia' }
    ],
    [
      { name: 'John', age: 20, country: 'USA' },
      { name: 'Jane', age: 21, country: 'Canada' },
      { name: 'Jim', age: 22, country: 'UK' },
      { name: 'Jill', age: 23, country: 'Australia' }
    ],
  ];

  const firstPerson = lotsofpeople[0][0];
  const name = firstPerson.name;


  //looping over the multidimensional array
  for (const innerArray of lotsofpeople) {
    console.log(innerArray);
    for (const person of innerArray) {
      console.log(person);
      console.log(person.name, person.age, person.country);
    }
  }

}());







/** Union Types */

(function () {

  //var
  let optionalTwo: number | string;
  optionalTwo = 99,
    optionalTwo = "Hello";


  let optionalThree: string | number | boolean;
  optionalThree = "steve";
  optionalThree = 45;
  optionalThree = true;


  //functions (with type narrowing)
  function myOption(id: string | number, value: number): void {
    if (typeof id === 'number') {
      value = (Math.random() * 1) + id;
    } else {
      value = (Math.random() * 1) + Number(id);
    }
  }

  // function return values
  function calculateTax(price: number | string, taxRate: number | string): number {
    if (typeof price === 'number' && typeof taxRate === 'number') {
      return price * taxRate;
    }
    return 0;
  }

  const tax = calculateTax(100, 0.1);
  console.log(tax);


  //function with type
  type CarType = {
    name: string;
    year: number;
  };

  function getCarData(car: CarType): string {
    return `Car Name is ${car.name} and Car Year is ${car.year}`;
  }

  getCarData({ name: "Ferrari", year: 2019 });




  // with objects
  type Status = "loading" | "success" | "error";

  interface APIprocess {
    status: Status;
    dataCode?: any;
    error?: boolean;
  }

  let getData: APIprocess = {
    status: "loading",
    dataCode: 200,
    error: false,
  };


  //literals
  type Direction = 'up' | 'down' | 'left' | 'right';
  let pointing: Direction = 'down';


  //with null and undefined
  let nullableString: string | null = null;
  let optionalNumber: number | undefined = undefined;



  //type options
  type Point = {
    x: number,
    y: number,
  };

  type Location = {
    lat: number,
    long: number;
  };

  let coordinates: Point | Location = {
    x: 10,
    y: 20,
  };

  // or using Location type
  coordinates = {
    lat: 1230,
    long: 220,
  };


  // with arrays
  const fruits: (string | number)[] = ["apple", 42, "banana", 100];;
  fruits.push('apple');
  fruits.push(40);


  //using two type options for an array
  const coordinatesArray: (Point | Location)[] = [{ x: 10, y: 20 }, { lat: 1230, long: 220 }];
  coordinatesArray.push({ x: 10, y: 20 });
  coordinatesArray.push({ lat: 1230, long: 220 });


})();


/** Enums
 *  Recommended to use Emums instead of Union Type options such as 
 * type Status = "loading" | "success" | "error"; or type Direction = 'up' | 'down' | 'left' | 'right';
*/


(function () {

  enum Direction {
    up,
    down,
    left,
    right
  }

  const directionChosen: Direction = Direction.down;


  //readable values
  enum ReadableDirection {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right',
  }

  const getDirection = ReadableDirection.down; // "down"



  //with switch
  enum DeliveryStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
  }


  function whereIsMyParcel(status: DeliveryStatus): string {
    switch (status) {
      case DeliveryStatus.PENDING:
        return 'Your parcel is pending';
      case DeliveryStatus.SHIPPED:
        return 'Your parcel is shipped';
      case DeliveryStatus.DELIVERED:
        return 'Your parcel is delivered';
      case DeliveryStatus.CANCELLED:
        return 'Your parcel is cancelled';
      default:
        return 'Unknown status';
    }
  }

  whereIsMyParcel(DeliveryStatus.PENDING);
  // "Your parcel is pending"



  //! preferred method - using MAPS

  // step 1 the enum
  enum MyDeliveryStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
  }
  /**
   * The above enum creates a numberic specific enum that has an index key
   * DeliveryStatus.PENDING   // returns 0
   * DeliveryStatus.SHIPPED   // returns 1
   * DeliveryStatus.DELIVERED // returns 2
   * DeliveryStatus.CANCELLED // returns 3
   */


  // step 2 the map
  const mydeliveryMessage = { // The keys here are the numeric enum values (0, 1, 2, 3)
    [MyDeliveryStatus.PENDING]: 'Your parcel is pending',
    [MyDeliveryStatus.SHIPPED]: 'Your parcel has been shipped',
    [MyDeliveryStatus.DELIVERED]: 'Your parcel has been delivered',
    [MyDeliveryStatus.CANCELLED]: 'Your parcel was cancelled',
  };

  // step 3 the function
  function getmyParcel(status: MyDeliveryStatus): string {
    return mydeliveryMessage[status];
  }

  const curentStatus = DeliveryStatus.SHIPPED;

  // step 4 - the call
  console.log(whereIsMyParcel(curentStatus)); // "Your parcel has been shipped"


})();



/*** interfaces (like types but for objects only) */


(function () {



  // 1. Enum
  enum Color {
    red = 'Apple Red',
    black = 'Tenorite Black',
    silver = 'Artic Silver',
    white = 'Pearl white',
  }



  // 2. Map
  const colorMessages: Record<Color, string> = { // with maps we need to use this TS syntax
    [Color.black]: `Your chosen car color is ${Color.black}`,
    [Color.silver]: `Your chosen car color is ${Color.silver}`,
    [Color.white]: `Your chosen car color is ${Color.white}`,
    [Color.red]: `Your chosen car color is ${Color.red}`,
  };



  /**
   * Record<Color, string> 
   * Record is a built-in TypeScript utility type
   * “I want an object where every key comes from X and every value is Y”
   * Record<Keys, ValueType>
   * Record<Color, string>
  */

  //3 the function
  function colorMessage(color: Color): string {
    return colorMessages[color];
  }





  // 4. Interface
  interface Car {
    model: string;
    chosenColor: Color;
    year?: number;
    topSpeed: number;
    readonly owner: string;
    engine?: {
      horsepower: number;
      torque: number;
    };
    getColorMessage(): string;
    averageCruiseSpeed(speed: number): number;
  }




  // 5. Object implementing the interface
  const newCar: Car = {
    model: "Mercedes AMG",
    chosenColor: Color.red,
    year: 2024,
    topSpeed: 300,
    owner: "David",

    engine: {
      horsepower: 500,
      torque: 400,
    },

    getColorMessage() {
      return colorMessage(this.chosenColor);
    },

    averageCruiseSpeed(speed: number) {
      return this.topSpeed / speed;
    }
  };



  // 6 testing
  console.log("Car object:", newCar);

  console.log("Chosen color message:");
  console.log(newCar.getColorMessage());

  console.log("Average cruise speed (divisor 3):");
  console.log(newCar.averageCruiseSpeed(3));

  console.log("Direct enum access:");
  console.log(Color.black);

  console.log("Direct colorMessage lookup:");
  console.log(colorMessage(Color.black));

})();



(function () {


  //interface with functions
  // 1 interface
  interface Product {
    name: string;
    price: number;
    quantity: number;
  }

  // 2. function
  const printProduct = (product: Product): void => {
    console.log(`${product.name}: $${product.price}`);
  };


  const apple: Product = {
    name: "apple",
    price: 1.99,
    quantity: 10,
  };

  printProduct(apple);


  // Re-opening Interfaces

  interface Dog {
    name: string;
    age: number;
  }


  // can use again the same interface name because it is a different interface properties
  interface Dog {
    breed: string;
    bark(): string;
  }



  // using the two Dog interfaces together
  const myDog: Dog = {
    name: "Snoopy",
    age: 10,
    breed: "sheepdog",
    bark: function () {
      return "Woof!";
    }
  };




  // Extending interfaces

  interface ServiceDog extends Dog {
    job: "guide" | "guard" | "hearing dog";
  }




  const myServiceDog: ServiceDog = {
    name: "Rex",
    age: 3,
    breed: "German Shepherd",
    job: "guide",
    bark() {
      return `${this.name} is a ${this.breed} and is ${this.age} years old and is a ${this.job}`;
    }
  };


})();



/** Generic Types 
 * 
 * Instead of writing...string
 * function identityString(value: string): string {
 * return value;
 * }
 * 
 * and ...one for number
 * function identityNumber(value: number): number {
 * return value;
 * }
 * 
 * Same logic, different types duplication.
 * 
 * 
 * Solution
 * 'I don’t know the type yet, but whatever type comes in is the same type that goes out.'
 * 
 *
*/

//vars
const numbs: Array<number> = [];
const colors: Array<string> = [];

// Here is our Generic Function in its simplest form again, remember
// Give me a Type of X and I will return a Type of X => though right now, Im not sure what Type X is, I just know that it is a Type.

function returnGeneric<Type>(arg: Type): Type {
  return arg; // this is the return type
}

// <T>	    Declare a generic type variable
// value:   T	Parameter is of type T
// T	      A placeholder for a real type
// : T	    Return type is also T


// forcing the type using <tytpe declcaration> after the function
const returnString = returnGeneric<string>('Hello'); // type is string
console.log(returnString);

const returnNumber = returnGeneric<number>(123); // type is number
console.log(returnNumber);

const returnBoolean = returnGeneric<boolean>(true);
console.log(returnBoolean);

const returnNUmbersArray = returnGeneric<Array<number>>([1, 2, 3]); // array of numbers
console.log(returnNUmbersArray);

const retunStringArray = returnGeneric<Array<string>>(['Hello', 'World']); // array of strings
console.log(retunStringArray);


//What if you want to require a property on an object?
function hasPropNumber<T extends { year: number; }>(item: T): T {
  return item;
}

const prop = hasPropNumber({
  name: "david",
  year: 2090,
  age: 34
});

console.log(prop.name); // ✅
console.log(prop.year); // ✅
console.log(prop.age);  // ✅




// customising a Generic Function with interface

interface TypeBoxInterface {
  width: number;
  height: number;
  length: number;
  color: string;
}

function getVolume<T extends TypeBoxInterface>(item: T): number {
  return item.width * item.height * item.length;
}

function getVariant<T extends TypeBoxInterface & { material: string; }>(
  item: T
): string {
  return `The material used was ${item.material} and its color was ${item.color}`;
}

// Usage
const box = {
  width: 2,
  height: 3,
  length: 4,
  color: "red",
  material: "carbon"
};

console.log(getVolume(box));   // 24
console.log(getVariant(box));  // The material used was carbon and its color was red


// default values
function returnGenericDefault<Type>(arg: Type): Type {
  return arg;
}

const returnDefaultString = returnGenericDefault<string>('Hello'); // note the <type> after the function


const returnDefaultNumber = returnGenericDefault<number>(123);


const returnDefaultBoolean = returnGenericDefault<boolean>(true);


const returnDefaultNUmbersArray = returnGenericDefault<Array<number>>([1, 2, 3]);


const retunDefaultStringArray = returnGenericDefault<Array<string>>(['Hello', 'World']);


const returnDefaultObject = returnGenericDefault<{ name: string; age: number; }>({ name: 'John', age: 30 }); // note there is no type <Object> in Typescript












/** Type Narrowing */

(function () {

  // function with type narrowing
  function myOptionNarrow(id: string | number) {
    if (typeof id === 'string') {
      console.log(id.repeat(3));
    } else {
      console.log(id * 3);
    }
  }

})();



