var React = require('react');
var ReactDOMServer = require('react-dom/server');
var request = require('request');
var url = require ('url');

News = React.createFactory(require('../components/News').default);


module.exports = function(app) {

	app.get('/', function(req, res) {

		request('http://localhost:8888/news.json', function(err, resp, body) {

			console.log(body);

			var html = ReactDOMServer.renderToString(News({ newsData: JSON.parse(body) }));

			res.render('index.ejs', { output: html, jsonProps: body });
			
		});

	});

}