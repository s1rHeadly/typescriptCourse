/* These are pretty much like types, but they are used to define the structure of an object

- They can be reponed
- They can be extended
 



interface Car {
  model: string;
  readonly year: number;
  color: string;
  price: number;
  coupe: boolean;
  engine?: { // optional when we don't want to add the engine to the object
    cylinders: number;
    horsepower: number;
    torque: number;
  }
}


const latestMercedes : Car = {
  model: 'C63-AMG',
  year: 2013,
  color: 'Black',
  price: 100000,
  coupe: true,
}







/* Methods */

interface Car2 {
  model: string;
  readonly year: number;
  color: string;
  startEngine(): boolean;
}


const latestMercedes2: Car2 = {
  model: 'C63-AMG',
  year: 2013,
  color: 'Black',
  startEngine() {
    return true;
  }
};

console.log(latestMercedes2.startEngine());


/* Methods with parameters */

interface Car3 {
  model: string;
  readonly year: number;
  color: string;
  topSpeed: number;
  averageCruiseSpeed(speed: number): number;
}


const latestMercedes3 : Car3 = {
  model: 'C63-AMG',
  year: 2013,
  color: 'Black',
  topSpeed: 300,
  averageCruiseSpeed(speed: number) {
    const averageSpeed = this.topSpeed / speed;
    return averageSpeed;
  }
}


console.log(latestMercedes3.averageCruiseSpeed(2)); // ✅ Works fine






// Reopning Interfaces

interface Dog{
  name: string;
  age: number
}

// can use again the same interface name because it is a different interface properties
interface Dog{
  breed: string;
  bark(): string
}

// using the two Dog interfaces together
const myDog: Dog = {
  name: "Snoopy",
  age: 10,
  breed: "sheepdog",
  bark: function(){
    return "Woof!";
  }
}




// Extending Interfaces (Inheritance)


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
}