/**
 * Created by Jack.L on 2017/5/1.
 */

var $       = require('jquery');
var http    = require('http');
var fs      = require('fs');
var request = require('request');

module.exports =
{
    extendDeep:function(parent, child)
    {
        child = child || {};
        for(var i in parent)
        {
            if(parent.hasOwnProperty(i))
            {
                //检测当前属性是否为对象
                if(typeof parent[i] === "object")
                {
                    //如果当前属性为对象，还要检测它是否为数组
                    //这是因为数组的字面量表示和对象的字面量表示不同
                    //前者是[],而后者是{}
                    child[i] = (Object.prototype.toString.call(parent[i]) === "[object Array]") ? [] : {};

                    //递归调用extend
                    this.extendDeep(parent[i], child[i]);
                }
                else
                {
                    child[i] = parent[i];
                }

            }
        }
        return child;
    },
    checkURLInvalid:function(url)
    {
        function checkURL(URL){
            var str=URL;
            //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
            //下面的代码中应用了转义字符"\"输出一个字符"/"
            var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
            var objExp=new RegExp(Expression);
            if(objExp.test(str)==true){
                return true;
            }else{
                return false;
            }
        }

        return checkURL(url);
    },
    getImageFromURL:function(url, callback)
    {
        var img_data = "";

        try
        {
            http.get(
                url,
                function(res)
                {
                    res.setEncoding('base64');

                    res.on('data',
                        function(data)
                        {
                            img_data += data;
                        }
                    );

                    res.on('end',
                        function()
                        {
                            callback(img_data, null);
                        }
                    );

                    res.on('error',
                        function(err)
                        {
                            callback(null, err);
                        }
                    );

                }
            );
        }
        catch (e)
        {
            callback(null, e);
            throw e;
        }


    }
};