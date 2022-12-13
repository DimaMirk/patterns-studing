class MyMath {
  constructor(initionalValue = 0) {
    this.num = initionalValue;
  }
  add(num1) {
    this.num += num1;
    return this;
  }
}

let test = new MyMath(2);

console.log(test.add(2).add(3).add(1).num);

// Головна ідея: створення об’єкту з методами, які містять певну реалізацію та повертаютьзначення this для можливості використовувати ланцюжка викликів.
