interface Product{
  name: string;
  price: number;
  quantity: number;
}


const printProduct = (product: Product) : void => {
  console.log(`${product.name}: $${product.price}`);
}



const apple: Product = {
  name: "apple",
  price: 1.99,
  quantity: 10,
}

console.log(printProduct(apple));