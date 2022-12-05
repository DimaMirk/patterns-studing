class Complaints {
  constructor() {
    this.complains = [];
  }

  reply() {}

  add(complaint) {
    this.complains.push(complaint);
    return this.reply(complaint);
  }
}

class ServiceComplient extends Complaints {
  reply({ id, customer, details }) {
    return `Service. ${customer} with id ${id} add complaint ${details}`;
  }
}

class ProductComplient extends Complaints {
  reply({ id, customer, details }) {
    return `Product. ${customer} with id ${id} add complaint ${details}`;
  }
}

class Registry {
  register(customer, type, details) {
    let id = Date.now();
    let complient;

    if (type == 'service') {
      complient = new ServiceComplient();
    } else {
      complient = new ProductComplient();
    }
    return complient.add({ customer, id, details });
  }
}

const registry = new Registry();

let product = registry.register('Dima', 'product', 'bad work');
let service = registry.register('Ivan', 'service', 'low service');

console.log(product);
console.log(service);
