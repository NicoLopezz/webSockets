const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    // Recibir el evento 'botonPresionado' y reenviarlo a todos los clientes
    socket.on('botonPresionado', () => {
        io.emit('mostrarMensaje', 'btn presionado');
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

// Arrancar el servidor en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
