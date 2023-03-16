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
  
  // if user types input then will run callback that runs handleUserInput
  stdin.on("data", (key) => handleUserInput(key));

  return stdin;
};

//what actions to take when user types
const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  //use movements object to refactor 
  //ex: if movements['w'] is true then do this
  if(MOVEMENTS[key]) connection.write(`Move: ${MOVEMENTS[key]}`)

  //use messages obj to refactor
  if (MESSAGES[key]) connection.write(`Say: ${MESSAGES[key]}`)
};
module.exports = { setupInput };