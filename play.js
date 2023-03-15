//Snake game - client side
const net = require('net'); //net module
const { connect } = require('./client'); //connect function
const { setupInput } = require('./input');

console.log('Connecting ...');

// connect(); // call connect function from client file - returns an object
// use this object as a parameter  for setUpInput, so it has acces to the connect object
setupInput(connect()); //call setUpInput function from input file