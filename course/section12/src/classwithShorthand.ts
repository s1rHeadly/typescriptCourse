class Player {
  // no need to declare the properties in the class
  constructor(public firstName: string, public lastName: string, private score: number) {
    // no need to declare the properties in the constructor
  }

  get getScore(): number {
    return this.score;
  }

  set setScore(score: number) {
    this.score += score;
  }
}

const playerOne = new Player('John', 'Doe', 0);
console.log(playerOne);
