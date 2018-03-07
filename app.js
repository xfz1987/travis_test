var express = require('express');
var app = new express();

app.get('/', function(req, res){
	res.send('Hello Travis fuck!');
});

app.listen(3000, function(){
	console.log('server is start by port:3000');
});
