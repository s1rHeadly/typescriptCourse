console.log("Hello World");
console.log(Math.round(1.233453453453563563));


//string type
let movieTitle: string = "Interstellar";
//declare, colon, type equals value
console.log(movieTitle);

//number type
let numOfCats: number = 4;
console.log(numOfCats);

//boolean type
let isLoggedIn: boolean = true;
console.log(isLoggedIn);

//array type
let numbers: number[] = [1, 2, 3, 4, 5];  


// the any type should not used as the value type can always change.
// IF not type is assigned to a variable, it will be 'any' type.
let pickel: any;
pickel = "pickel";
pickel = 1;
pickel = true;
pickel = [1, 2, 3];
pickel = {name: "pickel"};
pickel = () => {console.log("pickel")};


const movies: { title: string, year: number, genre: string, rating: number }[] = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0
  },
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Adventure",
    rating: 8.6
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7
  }
];

// using type on a variable that has not been declared yet
let selectedMovie: { title: string, year: number, genre: string, rating: number } | object;

for (const movie of movies) {
  const movieTitle = movie.title;
  
 if(movieTitle.includes('Inception')){
  selectedMovie = movie;
 }
}


