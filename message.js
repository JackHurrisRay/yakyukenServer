/**
 * Created by Jack.L on 2017/6/6.
 */
const PROTOCAL = require('./protocal').PROTOCAL;
const Message =
{
    "MSG_C2S_CONN":
    {
        protocal:PROTOCAL.PROTOCAL_C2S_CONN,
        ID:0,
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

    },
    "MSG_S2C_ALL_ENTER_ROOM":
    {

    },
    "MSG_C2S_YAKYUKEN":
    {

    },
    "MSG_S2C_ALL_YAKUKEN":
    {

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
            };

            return instance;
        }
    )();