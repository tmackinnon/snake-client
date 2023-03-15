//Snake game - client side
const net = require('net'); //net module
const connect = require('./client'); //connect function

console.log('Connecting ...');
connect();

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  // if user types input handleUserInput will run
  stdin.on("data", handleUserInput);
  
  return stdin;


};

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();