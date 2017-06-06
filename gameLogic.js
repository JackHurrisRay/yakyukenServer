/**
 * Created by Jack.L on 2017/6/6.
 */

var MSG = require('./message');

var CALLBACK_RECV =
{
    "100":
    function(data)
    {

    },
    "1000"://conn
    function(data)
    {
        console.log('client jion');
    },
    "1100":
    function(data)
    {

    },
    "1102":
    function(data)
    {

    },
    "1110":
    function(data)
    {

    }

};

module.exports =
    (
        function()
        {
            var instance =
            {
                onRecv:function(data, ws)
                {
                    var callback = CALLBACK_RECV[data.protocal.toString()];

                    if( callback )
                    {
                        //
                        callback(data);

                        //test
                        MSG.sendMsg(ws, MSG.createMSG('OK'));

                    }
                    else
                    {
                        ws.close();
                    }
                },
                onClose:function(ws)
                {
                    console.log('client lieave');
                }
            };

            return instance;
        }
    )();
