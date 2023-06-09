const net = require('net'); //net module
const { IP, PORT } = require('./constants'); //constants module

//establish connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address
    port: PORT //PORT number
  });

  //receive data from server
  conn.on('data', (data) => {
    console.log("Server says: ", data);
  });

  //notify when connection is established
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: TEM') //send name to server 
    // conn.write('Move: up'); //sent the string move up to server
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

module.exports = {connect}; //exports connect function in an object where key name and key value are 'connect'