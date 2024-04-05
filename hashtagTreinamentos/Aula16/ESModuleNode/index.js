//CommonJS

//const Car = require("./car");

import carrinho, { numberOfTires } from "./car.js";

function createCars() {
  const car1 = new carrinho("Toyota", "Corolla", 2022);
  const car2 = new carrinho("Honda", "Civic", 2023);

  car1.turnOn();
  car2.turnOn();

  console.log(car1.getDetails());
  console.log(car2.getDetails());

  car1.turnOff();
  car2.turnOff();

  console.log(numberOfTires);
}

createCars();

/* const buttonElement = document.getElementById("run-function");

buttonElement.addEventListener("click", createCars); */
