/**
 * Created by Jack.L on 2017/6/6.
 */
var common = require('./common');
var base64 = require('./base64');
const PROTOCAL = require('./protocal').PROTOCAL;

const Message =
{
    "OK":
    {
        protocal:0,
        status:0,
    },
    "PROTOCAL_C2S_CONN":
    {
        protocal:PROTOCAL.PROTOCAL_C2S_CONN,
        ID:"",
        nickname:'nickname'
    },
    "PROTOCAL_S2C_CONN":
    {
        protocal:PROTOCAL.PROTOCAL_S2C_CONN,
        status:0,
    },
    "PROTOCAL_C2S_CREATE_ROOM":
    {
        protocal:PROTOCAL.PROTOCAL_C2S_CREATE_ROOM,
    },
    "PROTOCAL_S2C_CREATE_ROOM":
    {
        protocal:PROTOCAL.PROTOCAL_S2C_CREATE_ROOM,
        status:0,
    },
    "PROTOCAL_C2S_ENTER_ROOM":
    {
        protocal:PROTOCAL.PROTOCAL_C2S_ENTER_ROOM,
    },
    "PROTOCAL_S2C_ALL_ENTER_ROOM":
    {
        protocal:PROTOCAL.PROTOCAL_S2C_ALL_ENTER_ROOM,
        status:0,
        players:[],
    },
    "PROTOCAL_C2S_YAKYUKEN":
    {
        protocal:PROTOCAL.PROTOCAL_C2S_YAKYUKEN,
        type:0,
    },
    "PROTOCAL_S2C_ALL_YAKUKEN":
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
                    var _strMsg  = JSON.stringify(msg);
                    var _package = base64.encoder(_strMsg);
                    ws.send(_package);
                },
                createMSG:function(protocalString)
                {
                    var msg = common.extendDeep( this.MESSAGE[protocalString] );
                    return msg;
                },
                findProtocalNameFromValue:function(protocal_value)
                {
                    var _value = null;

                    for( var key in this.PROTOCAL )
                    {
                        if( this.PROTOCAL[key] == protocal_value )
                        {
                            _value = key;
                            break;
                        }
                    }

                    return _value;
                }
            };

            return instance;
        }
    )();