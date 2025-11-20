(function () {


  interface Car {
    model: string;
    readonly year: number;
    color: string;
    price: number;
    coupe: boolean;
    engine?: { // optional when we don't want to add the engine to the object
      cylinders: number;
      horsepower: number;
      torque: number;
    };
  }


  const c63AMG: Car = {
    model: 'C63-AMG',
    year: 2013,
    color: 'Black',
    price: 100000,
    coupe: true,
    engine: {
      cylinders: 8,
      horsepower: 487,
      torque: 450,
    }
  };


  console.log(c63AMG);

})();