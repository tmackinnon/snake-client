//Snake game - client side
const net = require('net'); //net module
const { connect } = require('./client'); //connect function
const { setupInput } = require('./input');

console.log('Connecting ...');
connect(); // call connect function from client file

setupInput(); //call setUpInput function from input file