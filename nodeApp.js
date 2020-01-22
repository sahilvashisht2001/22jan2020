var express = require('express');
var app = express();
app.get('',function(req,res){
    res.send('hello world');

    

    var log = {
        info: function (info) {
        console.log('Info: ' + info);
        },
        warning:function (warning) {
        console.log('Warning: ' + warning);
        },
        error:function (error) {
        console.log('Error: ' + error);
        }
        };
       module.exports = log

       var myLogModule = require('./Log.js');
myLogModule.info('Node.js started');

       
});

app .listen(3001,function(){
console.log('example app listening on port 3001');
});
