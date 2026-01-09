import { Dog } from './dogs';

export class ShelteredDog extends Dog {
  constructor(name: string, breed: string, age: number, public sheltered: boolean) {
    super(name, breed, age);
  }

  bark() {
    console.log(`${this.name} is a ${this.breed} and is ${this.age} years old and is sheltered and ${this.sheltered ? 'is sheltered' : 'is not sheltered'}`);
  }
}
