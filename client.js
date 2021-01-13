const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}


console.log('Connecting ...');
var establishConn = connect();

establishConn.on('data', function(data) {
console.log(data)
})

module.exports = {connect};