require('babel-register');

var express = require('express'),
	path = require('path'),
	app = express(),
	port = 8888,
	bodyParse = require('body-parser');

//-- Require node jsx transpiler
require('node-jsx').install();

//-- Include static assets
app.use(express.static(path.join(__dirname, 'public')));

//-- Set view path
app.set('views', path.join(__dirname, 'views'));

//-- Use ejs for templating
app.set('view engine', 'ejs');

//-- Set routes 
require('./routes/routes.js')(app);

app.listen(port);
console.log('Server is up and running');