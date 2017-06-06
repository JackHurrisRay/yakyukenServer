/**
 * Created by Jack.L on 2017/6/6.
 */

var CALLBACK_RECV =
{
    "100":
    function(data)
    {

    },
    "1000"://conn
    function(data)
    {

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
                        callback(data);
                    }
                    else
                    {
                        ws.close();
                    }
                },
                onClose:function(ws)
                {

                }
            };

            return instance;
        }
    )();
