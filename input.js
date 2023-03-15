//file manages user input

const { MOVEMENTS, MESSAGES } = require('./constants');

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //what actions to take when user types
  const handleUserInput = (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
    //up down left right movement
    if (key === 'w') {
      conn.write('Move: up')
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
    // keys that send canned messages to the server
    if (key === 'h') {
      conn.write('Say: Hello!');
    }
    if (key === 'm') {
      conn.write('Say: Muahaha');
    }
    if (key === 'g') {
      conn.write('Say: Goodbye Snakesssss');
    }
};

  // if user types input handleUserInput will run
  stdin.on("data", handleUserInput);


  return stdin;
};


module.exports = { setupInput };