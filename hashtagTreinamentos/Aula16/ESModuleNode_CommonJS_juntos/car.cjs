const numberOfTires = 4;
const isAirbagsNecessary = true;

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isEngineOn = false;
  }

  turnOn() {
    this.isEngineOn = true;
    console.log("Engine is now running.");
  }

  turnOff() {
    this.isEngineOn = false;
    console.log("Engine is now off.");
  }

  getDetails() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

/* exports = {
  Car: Car,
  tires: numberOfTires,
};
 */
module.exports.Car = Car;
module.exports.tires = numberOfTires;

//definição de modulação por commonjs é igual a isso:
