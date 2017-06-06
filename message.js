/**
 * Created by Jack.L on 2017/6/6.
 */
var common = require('./common');
var base64 = require('./base64');
const PROTOCAL = require('./protocal').PROTOCAL;

const Message =
{
    "MSG_C2S_CONN":
    {
        protocal:PROTOCAL.PROTOCAL_C2S_CONN,
        ID:0,
        nickname:'nickname'
    },
    "MSG_S2C_CONN":
    {
        protocal:PROTOCAL.PROTOCAL_S2C_CONN,
        status:0,
    },
    "MSG_C2S_CREATE_ROOM":
    {
        protocal:PROTOCAL.PROTOCAL_C2S_CREATE_ROOM,
    },
    "MSG_S2C_CREATE_ROOM":
    {
        protocal:PROTOCAL.PROTOCAL_S2C_CREATE_ROOM,
        status:0,
    },
    "MSG_C2S_ENTER_ROOM":
    {
        protocal:PROTOCAL.PROTOCAL_C2S_ENTER_ROOM,
    },
    "MSG_S2C_ALL_ENTER_ROOM":
    {
        protocal:PROTOCAL.PROTOCAL_S2C_ALL_ENTER_ROOM,
        status:0,
        players:[],
    },
    "MSG_C2S_YAKYUKEN":
    {
        protocal:PROTOCAL.PROTOCAL_C2S_YAKYUKEN,
        type:0,
    },
    "MSG_S2C_ALL_YAKUKEN":
    {
        protocal:PROTOCAL.PROTOCAL_S2C_ALL_YAKUKEN,
        status:0, //0,shitou 1,jiandao 2,bu -1,unknown
        flag:0,   //
        result:[] //
    },
};

module.exports =
    (
        function()
        {
            var instance =
            {
                PROTOCAL:PROTOCAL,
                MESSAGE:Message,
                checkMessage:function(msg, msgData)
                {
                    var check = true;
                    for( var key in msg )
                    {
                        if( msgData[key] && typeof msgData[key] == typeof msg[key])
                        {

                        }
                        else
                        {
                            check =false;
                        }
                    }

                    return check;
                },
                sendMsg:function(ws, msg)
                {
                    var _package = base64.encoder(msg);
                    ws.send(_package);
                }
            };

            return instance;
        }
    )();