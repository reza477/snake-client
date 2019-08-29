const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: rza'); //writes to the connection (being the server)
  
  });
  conn.on("connect", () =>{
    setTimeout(() => {
      conn.write("Move: up")
    },50 )
    
    conn.write("Move: up")
    // conn.write("Move: up")
    // conn.write("Move: up")
    // console.log('Move: up');
  })
  conn.on('data', (data) => {//receives data from the server
    console.log('Server says: ',data);
  });
  return conn;
};

module.exports = connect

// conn.on('connect', () => {
//   console.log('Successfully connected to game server');