const net = require('net');

const conn = net.createConnection({
  host : "192.168.88.151",
  port : 50541
  
});
conn.setEncoding('utf8'); 
conn.on('data', (data) => {
  console.log(data)
})
