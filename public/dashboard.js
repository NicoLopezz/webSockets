// Conectar al servidor de WebSockets
const socket = io();

// Obtener el contenedor de mensajes
const mensajesDiv = document.getElementById('mensajes');

// Escuchar el evento 'mostrarMensaje' y añadir el mensaje al dashboard
socket.on('mostrarMensaje', (mensaje) => {
    const nuevoMensaje = document.createElement('p');
    nuevoMensaje.textContent = mensaje;
    mensajesDiv.appendChild(nuevoMensaje);
});
