class SimpleMembrship {
  constructor(name) {
    this.name = name;
    this.cost = 100;
  }
}

class StandartMembrship {
  constructor(name) {
    this.name = name;
    this.cost = 200;
  }
}

class PremiumMembrship {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MembershipFactory {
  static list = {
    simple: SimpleMembrship,
    standard: PremiumMembrship,
    premium: PremiumMembrship,
  };

  create(name, type) {
    const MemberShip = MembershipFactory.list[type] || MembershipFactory.list.simple;

    const member = new MemberShip(name);
    member.type = type;
    member.define = function () {
      console.log(`${this.name} (${this.type ? this.type : 'simple'}):${this.cost}`);
    };
    return member;
  }
}

const factory = new MembershipFactory();

const members = [
  factory.create('Ivan', 'standard'),
  factory.create('Dima', 'premium'),
  factory.create('Anna'),
];

members.forEach(m => {
  m.define();
});
