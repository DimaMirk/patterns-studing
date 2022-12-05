// function Server(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }

// Server.prototype.getUrl = function () {
//   console.log(`${this.name} on http:${this.ip}:80`);
// };

// const aws = new Server('AWS', '32.12.23.12');

// aws.getUrl();

class Server {
  constructor(name, ip) {
    (this.name = name), (this.ip = ip);
  }
  getUrl() {
    console.log(`${this.name} on http:${this.ip}:80`);
  }
}

const aws2 = new Server('AWS2', '43.32.34.12');

aws2.getUrl();
