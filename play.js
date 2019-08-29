const connect  = require('./client');
const  setupInput  = require('./input');
console.log('Connecting ...');



setupInput(connect());

// const connect = () => {
//   const conn = net.createConnection({
//     host: "192.168.88.151",
//     port: 50541
//   });
//   conn.setEncoding('utf8');
//   conn.on('connect', () => {
//     console.log('Successfully connected to game server');
//     conn.write('Name: MAX'); //writes to the connection (being the server)
//   });
//   conn.on('data', (data) => {//receives data from the server
//     console.log('Server says: ',data);
//   });
//   return conn;
// };


