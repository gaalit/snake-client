const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server"');
    conn.write('Name: GGG');
    // conn.write('Move: up');
  });
  return conn;
}


console.log('Connecting ...');
var establishConn = connect();

establishConn.on('data', function(data) {
console.log(data)
})





module.exports = {connect};