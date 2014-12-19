/**
 * Socket io events
 */
var debug = require('debug')('socket-express');

var io = null;

exports.init = function(socket_io) {
  io = socket_io;
};


exports.connect = function(socket) {
  socket.emit('entrance', { message: 'You just joined the party' });


  // join room
  socket.on('join_room', function(data) {
    socket.join(data.room);
    socket.emit('join_room', { message: 'You joined room ' + data.room });
  });


  // toggle event
  socket.on('toggle', function(data) {
    io.to(data.room).emit('toggle', { message: 'Button toggled to status ' + data.status, status: data.status });
  });


  // On disconnect
  socket.on('disconnect', function() {
    debug(socket.id + ' left the fair!');
  });
};
