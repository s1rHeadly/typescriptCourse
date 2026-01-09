export class Dog {
  constructor(public name: string, public breed: string, public age: number) { }

  bark() {
    console.log(`${this.name} is a ${this.breed} and is ${this.age} years old`);
  }
}