/**
 * Created by Jack.L on 2017/6/6.
 */
var gameObject = require('./gameObject');
var CLASS_PLAYER = gameObject.PLAYER;
var CLASS_ROOM   = gameObject.ROOM;

module.exports =
    (
        function()
        {
            var instance =
            {
                Players:{},
                Rooms:{},
                conn:function(ws, id)
                {
                    ////////
                    var player = this.Players[id];
                    if( player )
                    {
                        this.Players[id] = null;
                        delete  player;
                    }

                    ////////

                },
                create_room:function()
                {

                },
                close:function()
                {

                }
            };

            return instance;
        }
    )();