import { Dog } from './dogs';
import { ShelteredDog } from './sheltered';
import { add, subtract, multiply, divide } from './helpers';



const dog = new Dog('Rex', 'German Shepherd', 3);
dog.bark();



const result = add(1, 2);
console.log(result);

const result2 = subtract(1, 2);
console.log(result2);

const result3 = multiply(1, 2);
console.log(result3);

const result4 = divide(1, 2);
console.log(result4);


const shelteredDog = new ShelteredDog('Rex', 'German Shepherd', 3, true);
shelteredDog.bark();




// var users = [
//   { 'user': 'barney', 'age': 36, 'active': true },
//   { 'user': 'fred', 'age': 40, 'active': false }
// ];

// const isTrue = _.find(users, function (o: { user: string, age: number, active: boolean; }) { return o.age < 40; });
// console.log(isTrue);

// const isTrue2 = _.find(users, function (o: { user: string, age: number, active: boolean; }) { return o.age < 40; });
// console.log(isTrue2);

// const isTrue3 = _.find(users, function (o: { user: string, age: number, active: boolean; }) { return o.age < 40; });
// console.log(isTrue3);

// const isTrue4 = _.find(users, function (o: { user: string, age: number, active: boolean; }) { return o.age < 40; });
// console.log(isTrue4);

// const isTrue5 = _.find(users, function (o: { user: string, age: number, active: boolean; }) { return o.age < 40; });
// console.log(isTrue5);