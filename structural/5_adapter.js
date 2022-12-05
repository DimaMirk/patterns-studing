class OldCalc {
  operations(t1, t2, oper) {
    switch (oper) {
      case 'sub':
        return t1 - t2;
      case 'add':
        return t1 + t2;
      default:
        return NaN;
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2;
  }
  sub(t1, t2) {
    return t1 - t2;
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc();
  }
  operations(t1, t2, oper) {
    switch (oper) {
      case 'sub':
        return calc.sub(t1, t2);
      case 'add':
        return this.calc.add(t1, t2);
      default:
        return NaN;
    }
  }
}

let oldCalc = new OldCalc();
let newCalc = new NewCalc();
let adapter = new CalcAdapter();

console.log(oldCalc.operations(3, 3, 'add'));
console.log(newCalc.add(3, 3));
console.log(adapter.operations(3, 3, 'add'));
