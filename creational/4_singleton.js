class Database {
  constructor(data, name) {
    if (Database.exist) {
      return Database.instanse;
    }
    Database.instanse = this;
    Database.exist = true;
    this.data = data;
  }
  getData() {
    return this.data;
  }
}

const mongo = new Database('mongoDB');
const mysql = new Database('mysql', 'dima');

console.log(mongo.getData());
console.log(mysql.getData());
