 var socket = new io.Socket('localhost'); 
 socket.connect();
 socket.on('connect', function(){ socket.send('hi'); }) 
 socket.on('message', function(message){ alert(message);  }) 
 socket.on('disconnect', function(){  }) 
