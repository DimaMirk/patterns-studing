class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(massege, to) {
    this.room.send(to, this, massege);
  }

  receive(from, massege) {
    console.log(`${from.name}=>${this.name}:${massege}`);
  }
}

class Room {
  constructor(room) {
    this.room = room;
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(to, from, massege) {
    if (to) {
      this.users[to].receive(from, massege);
    } else {
      Object.keys(this.users).forEach(key => {
        if (key !== from.name) {
          this.users[from.name].receive(from, massege);
        }
      });
    }
  }
}
let room21 = new Room(21);

let dima = new User('dima');
let diana = new User('diana');
let ivan = new User('ivan');

room21.register(dima);
room21.register(diana);
room21.register(ivan);

dima.send('hello', 'diana');
dima.send('hello', 'ivan');
diana.send('hi');
