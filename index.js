var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public', {
	etag: false
}));

app.use(bodyParser.json({type: '*/*'}));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});


var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'password'
});


app.get('/api/:latlong', function (request, response) {
	var latlong = request.params.latlong;

	var lat = latlong.substring(0,latlong.indexOf(','));

	var long = latlong.substring(latlong.indexOf(',')+1, latlong.length);

	//get city block group from census

	//mySQL call to select on city block group

	//format JSON to return to Kevin
	// {
	// 	"block": {
	// 	CENSUS BLOCK METADATA (POVERTY, ETC.) GOES HERE,
	// 		"score": 0.72
	// },
	// 	"trees": [
	// 	{
	// 		TREE OBJ
	// 	},
	// 	{
	// 		TREE OBJ
	// 	}
	// ]
	// }

	console.log(lat);
	console.log(long);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});




/*
* API endpoint:

 [AWS]/api/lat,lng

 GET


 Output:

 {
 "block": {
 CENSUS BLOCK METADATA (POVERTY, ETC.) GOES HERE,
 "score": 0.72
 },
 "trees": [
 {
 TREE OBJ
 },
 {
 TREE OBJ
 }
 ]
 }
*
*
*
*
* */
