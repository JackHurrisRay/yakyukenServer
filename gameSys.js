/**
 * Created by Jack.L on 2017/6/6.
 */
var base64 = require('./base64');
var WebSocket = require('ws').Server;

module.exports =
    (
        function()
        {
            const PORT = 1980;
            var websocket = new WebSocket(
                {port:PORT}
            );

            var instance =
            {
                run:function()
                {
                    console.log('Game server is runninig, port' + PORT.toString());

                    websocket.on('connection',
                        function(ws)
                        {
                            ws.on('message',
                                function(message)
                                {

                                });

                            ws.on('close',
                                function(message)
                                {

                                });
                        }
                    );
                }
            };

            return instance;
        }
    )();
