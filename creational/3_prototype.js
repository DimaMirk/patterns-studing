const car = {
  wheel: 4,
  getInfo: function () {
    console.log(`Car has ${this.wheel}, owner is ${this.owner}`);
  },
};

let dimasCar = Object.create(car, { owner: { value: 'dima' } });
dimasCar.getInfo();

let ivansCar = Object.create(car);
ivansCar.owner = 'Ivan';
ivansCar.getInfo();
