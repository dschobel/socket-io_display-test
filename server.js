var http = require('http');
var io = require('socket.io');
var express = require('express');

/* create our express server and prepare to serve javascript files in ./public 
*/
var app = express.createServer();
app.configure(function(){
		app.use(express.static(__dirname + '/public'));
		app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

var interval_id_by_session_id = {};
var dtp_by_session_id = {};

app.listen(8000);
var socket = io.listen(app); 
var count = 0;
socket.on('connection', function(client){ 
	setInterval(function(){
		count++;
		client.send('message ' + count + ':hello from the server');
	},2000);
}); 
    /* Like the web server object, we must also define handlers for various socket events that 
       will happen during the lifetime of the connection. These will define how we interact with
           the client. The first is a message event which occurs when the client sends something to
       the server. /
    socket.on( 'message', function(message) { 
         The only message the client ever sends will be sent right after connecting.  
                   So it will happen only once during the lifetime of a socket. This message also 
           contains a d script which defines an agregation to walk. 
           
         interval_id_by_session_id[socket.sessionId] = setInterval(function () {
             try { 
                }
                } );
                socket.send( 'hello' ); 
            } catch( err ) {
                console.log(err);
            }

            },  1001 );
        } );


     Not so fast. If a client disconnects we don't want their respective dtrace consumer to 
       keep collecting data any more. We also don't want to try to keep sending anything to them
       period. So clean up. 
    socket.on('disconnect', function(){ 
        clearInterval(clearInterval(interval_id_by_session_id[socket.sessionId]));
        delete dtp_by_session_id[socket.sessionId]; 
        console.log('disconnected');
        });


    } );
*/
