// Conectar al servidor de WebSockets
const socket = io();

// Obtener el botón por su ID
const boton = document.getElementById('miBoton');

// Añadir un evento click al botón
boton.addEventListener('click', () => {
    // Enviar el evento 'botonPresionado' al servidor
    socket.emit('botonPresionado');
});
