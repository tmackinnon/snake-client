//Snake game - client side
const net = require('net'); //net module
const connect = require('./client'); //connect function

console.log('Connecting ...');
connect();

// // setup interface to handle user input from stdin
// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };