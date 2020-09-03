// comando para establecer la conexion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
   console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
   console.log('Desconectado al servidor');
});

// on 'estadoActual'

socket.on('estadoActual', function (resp) {
   console.log(resp);
   label.text(resp.actual);
});

$('button').on('click', function () {
   socket.emit('siguienteTicket', null, function (siguienteTicket) {
      label.text(siguienteTicket);
   });
});
