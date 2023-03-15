//Snake game - client side

const net = require('net'); //net module

//establish connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',// IP address
    port: 50541 //PORT number
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

console.log('Connecting ...');
connect();