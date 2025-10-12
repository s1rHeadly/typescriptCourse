// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages : number [] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameboard : string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}


type ProductType = {
  name: string;
  price: number;
}

const product: ProductType[] = [
  {name: "coffee mug", price: 11.50}, 
]

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices


function getTotal(product: ProductType[]) : number {
  return product.reduce((total, product) => total + product.price, 0);
}
