(function () {


  'use strict';


  // Type Narrowing


  // Type Narrowing with if statements
  function triple(value: string | number): string | number {
    if (typeof value === 'string') {
      return value.repeat(3);
    }

    return value * 3;
  }


  triple('Hello');
  triple(10);




  // Type Narrowing with truthy

  function printLetters(word: string | null | undefined): void {
    if (!word) return;

    word.split('').forEach((letter) => {
      console.log('letter', letter);
    });
  }

  printLetters('Hello');
  printLetters(null);
  printLetters(undefined);




  // type narrowing between object interfaces

  interface Movie {
    title: string,
    duration: number;
  }

  interface Show {
    title: string,
    episodes: number,
    showLength: number;
  }


  function runTime(length: Movie | Show) { // points to either Movie or the Show interface
    if ('episodes' in length) {
      return length.episodes * length.showLength;
    }
    return length.duration;
  }

  runTime({ title: 'The Office', episodes: 10, showLength: 30 });
  runTime({ title: 'Heat', duration: 147 });





  // Type Narrowing with instanceof

  function printFullDate(date: string | Date) {
    if (date instanceof Date) {
      return date.toISOString();
    }
    return new Date(date).toISOString();
  }

  printFullDate('2025-12-29');
  printFullDate(new Date('2025-12-29'));




  // type predicates - how we can determine if one interface of a certain type exists in an object
  interface Cat {
    name: string,
    numLives: number,
    meow(): string;
  }

  interface Dog {
    name: string,
    breed: string,
    bark(): string;
  }


  //what we cannot do is
  function ismyAnimalaCat(animal: Cat | Dog) {
    if (isCat(animal)) {
      return 'animal is a cat';
    }
    return 'animal is a dog';
  }

  // This will not work because there is no type check in the function ie ': animal is Cat'





  //Create a function that takes an animal and returns true if it is a cat and false if it is a dog
  function isCat(animal: Cat | Dog): animal is Cat {
    return 'numLives' in animal;
  }

  //returns true if it is a dog and false if it is a cat
  function isDog(animal: Cat | Dog): animal is Dog {
    return 'breed' in animal;
  }


  function getAnimal(animal: Cat | Dog): string {
    if (isCat(animal)) {
      return `Cat: ${animal.name}`;
    }
    return `Dog: ${animal.name}`;
  }

  getAnimal({ name: 'Whiskers', numLives: 9, meow: () => 'meow' });
  getAnimal({ name: 'Rex', breed: 'German Shepherd', bark: () => 'woof' });

})();


// type predicates - where interfaces have the same properies and we want to target a specific
// use kind to use an an id so to speak

interface PlayerOne {
  kind: 'playerOne';
  name: string,
  age: number | string,
  rating: number,

}

interface PlayerTwo {
  kind: 'playerTwo';
  name: string,
  age: number | string,
  rating: number,
}

interface PlayerThree {
  kind: 'playerThree';
  name: string,
  age: number | string,
  rating: number,
}


type PlayerType = PlayerOne | PlayerTwo | PlayerThree;


function playerinfo(player: PlayerType) {
  switch (player.kind) {
    case "playerOne":
      console.log(player.rating);
      break;
    case "playerTwo":
      console.log(player.name);
      break;
    case "playerThree":
      console.log(player.age);
      break;
    default:
      console.log(player);
      break;
  }
}