const app = require('express')();
const http = require('http');
const { Socket } = require('dgram');
const io = require('socket.io')(http);

http.createServer(app);

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

app.listen(3000, () => {
  console.log('listening on *:3000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection',(Socket) => { console.log("a user connected")});
