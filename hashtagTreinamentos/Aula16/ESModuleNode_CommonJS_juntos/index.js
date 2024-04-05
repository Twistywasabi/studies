/* CommonJS
const Car = require("./car"); */

import { Car, tires } from "./car.cjs";

function createCars() {
  const car1 = new Car("Toyota", "Corolla", 2022);
  const car2 = new Car("Honda", "Civic", 2023);

  car1.turnOn();
  car2.turnOn();

  console.log(car1.getDetails());
  console.log(car2.getDetails());

  car1.turnOff();
  car2.turnOff();

  console.log(tires);
}

createCars();

/* const buttonElement = document.getElementById("run-function");

buttonElement.addEventListener("click", createCars); */
