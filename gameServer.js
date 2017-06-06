/**
 * Created by Jack.L on 2017/6/6.
 */
var WebSocket = require('ws').Server;

var base64 = require('./base64');
var gameLogic = require('./gameLogic');
var MessageData   = require('./message');

module.exports =
    (
        function()
        {
            const PORT = 1980;
            var websocket = new WebSocket(
                {port:PORT}
            );

            var MSG       = MessageData.MESSAGE;

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
                                    ////////
                                    //parse
                                    var _resultData = null;

                                    try
                                    {
                                        var _resultString = message.toString('utf8');
                                        var _parseString = base64.transAscToStringArray( base64.decoder(_resultString) );

                                        _resultData = JSON.parse(_parseString);
                                    }
                                    catch(e)
                                    {
                                        //throw e;
                                    }

                                    var check = false;
                                    if( _resultData && _resultData['protocal'] )
                                    {
                                        const protocal  = _resultData['protocal'];
                                        const protocal_name = MessageData.findProtocalNameFromValue(protocal);

                                        const msgModule = MSG[protocal_name];

                                        if( msgModule && MessageData.checkMessage(msgModule, _resultData) )
                                        {
                                            check = true;
                                        }
                                    }

                                    if( check )
                                    {
                                        ////////
                                        gameLogic.onRecv(_resultData, ws);
                                    }
                                    else
                                    {
                                        gameLogic.onClose(ws);
                                        ws.close();
                                    }

                                });

                            ws.on('close',
                                function(message)
                                {
                                    gameLogic.onClose(ws);
                                });
                        }
                    );
                }
            };

            return instance;
        }
    )();
