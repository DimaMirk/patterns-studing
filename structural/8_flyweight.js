class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  create(model, price) {
    let candidate = this.getCar(model);

    if (candidate) {
      return candidate;
    } else {
      let newCar = new Car(model, price);
      this.cars.push(newCar);
      return newCar;
    }
  }

  getCar(model) {
    return this.cars.find(car => car.model == model);
  }
}

let factory = new CarFactory();

let bmw = factory.create('bmw', 10000);
let audi = factory.create('audi', 10000);
let bmw2 = factory.create('bmw', 20000);
console.log(bmw);
console.log(audi);
