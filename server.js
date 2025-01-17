const express = require('express');
const http = require('http');
const { Server } = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('conection', (socket) => {
    console.log('A user connected');

    socket.on('drawing', (data) => {
        socket.broadcast.emit('drawing', data);
    });

    socket.on('clearCanvas', () => {
        io.emit('clearCanvas');
    });

socket.on('disconnect', () => {
    console.log('Useri dul jasht edhe spo don me vizatu');

});

});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));