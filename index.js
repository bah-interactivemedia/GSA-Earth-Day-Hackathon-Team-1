var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public', {
	etag: false
}));
app.use(bodyParser.json({type: '*/*'}));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});