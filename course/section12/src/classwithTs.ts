(function () {


  'use strict';

  // ADDING CLASS WITHOUT TYPESCRIPT (REVISION)

  class Player {
    #score: 0;
    numberOfLives: 10;

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }


    get fullName() { // hey! im goin to create a poroperty called pplayone.fullname becuause I havent added it to the contructor
      return `${this.firstName} ${this.lastName}`;
    }

    get score() {
      return this.#score;
    }

    set score(score) {  //when we want to update a private field we need a setter
      if (score < 0) {
        score = 0;
        throw new Error('Score cannot be negative');
      }
      this.#score = score;
    }

    playGame() {
      this.#score++;
      return this.#score;
    }

    getScore() {
      return this.#score; // here we are using a private field  so we need a setter to set the score
    }

    loseLife() {
      this.numberOfLives--;
      return this.numberOfLives;
    }

    winner() {
      return this.#score >= 100 ? 'Winner' : 'Loser';
    }

  }


  const playerOne = new Player('John', 'Doe');
  console.log(playerOne.fullName);
  console.log(playerOne.score);






  class Admin extends Player {
    constructor(firstName, lastName, isLoggedin) {
      super(firstName, lastName);
      this.isLoggedin = isLoggedin;
    }

    get isLoggedin() {
      return this.isLoggedin;
    }

    set isLoggedin(isLoggedin) {
      this.isLoggedin = isLoggedin;
    }
  }

  const adminOne = new Admin('John', 'Doe', true);
  console.log(adminOne.isLoggedin);
})();