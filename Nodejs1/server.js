var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
 res.end( data );
   });
});

app.get('/addUser', function (req,res) {
	  
	   	res.sendFile('index.html');
	/*  fs.writeFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
	      var data = {
			name : req.body.name,
	    password : req.body.password,
	    profession :req.body.profession,
	    id :req.body.id
	  }; 
	   data = JSON.parse( data );
	   console.log( data );
	    res.end( JSON.stringify(data));
	     });*/
		});


module.exports = app;
