class Server {
  constructor(ip, name, port) {
    this.ip = ip;
    this.name = name;
    this.port = port;
  }

  get url() {
    return `http://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAWS = true;
  server.info = function () {
    return { name: 'AWS', ip: server.ip, created: Date.now() };
  };
  return server;
}

function sql(server) {
  server.isSQL = true;
  server.info = function () {
    return { name: 'SQL', ip: server.ip, created: Date.now() };
  };
  server.port = server.port + 500;
  return server;
}

let awsS = aws(new Server('12.23.34.54', 'AWS'));
let sqlS = sql(new Server('87.65.54.13', 'SQL'));

console.log(awsS.isAWS);
console.log(sqlS.info());
