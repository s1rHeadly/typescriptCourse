import { generateId } from './utilis.js';


class Player {
  readonly firstName: string;
  readonly lastName: string;
  private id: number | string;
  public score: number = 0;

  constructor(firstName: string, lastName: string, id?: number | string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = generateId();
  }

  setId(id: number | string): void {
    this.id = id;
  }


  get averageScore(): number {
    return this.score / 4;
  }
}


const playerOne = new Player('John', 'Doe',);
playerOne.setId(generateId());
console.log(playerOne);
playerOne.averageScore;
console.log(playerOne.averageScore);






/** Extended class*/
class Administrator extends Player {
  #isLoggedin: boolean;

  constructor(firstName: string, lastName: string, isLoggedin: boolean, id?: number | string) {
    super(firstName, lastName, id);
    this.#isLoggedin = isLoggedin;
  }

  set logout(loggedOut: boolean) {
    this.#isLoggedin = loggedOut;
  }
}

const administratorOne = new Administrator('John', 'Doe', true, generateId());
console.log(administratorOne);






