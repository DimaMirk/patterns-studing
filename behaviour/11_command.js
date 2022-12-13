class MyMath {
  constructor(initionalValue) {
    this.sum = initionalValue;
  }
  cube() {
    return this.sum ** 3;
  }
  square() {
    return this.sum ** 2;
  }
}

class WrapperCommand {
  constructor(wrappedClass) {
    this.subject = wrappedClass;
    this.commands = [];
  }

  execute(command) {
    this.commands.push(command);
    return this.subject[command]();
  }
}

let test = new WrapperCommand(new MyMath(2));

console.log(test.execute('cube'));
console.log(test.execute('square'));
console.log(test.commands);

// Головна ідея: створення додаткового абстрактного класу, який викликає функціонал головного класу і паралельно записує дії, які були викликані.
