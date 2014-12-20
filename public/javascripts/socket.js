/**
 * socket.io client
 */


var socket = io.connect('http://smartws.getmyrico.com');
socket.on('entrance', function (data) {
  console.log(data);

  // join room
  socket.emit('join_room', { room: 'Django' });
});


// join room response
socket.on('join_room', function(data) {
  console.log(data);
});

// toggle response
socket.on('toggle', function(data) {
  console.log(data);
  $('.display span').text(data.status);
  $('.toggle').text(data.status);
});



$(document).ready(function() {

  // toggle event
  $('.toggle').click(function() {

    var btnText = $('.toggle').text() === 'off' ? 'on' : 'off';

    socket.emit('toggle', { room: 'Django', status: btnText });

    $('.toggle').text(btnText);
  });


});
