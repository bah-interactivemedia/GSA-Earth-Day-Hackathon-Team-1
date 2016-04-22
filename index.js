'use strict'

var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.use(express.static('public', {
	etag: false
}));

app.use(bodyParser.json({type: '*/*'}));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});


var connection = mysql.createConnection({
	host     : 'shadytreesdb.cp5qykdsxe3g.us-east-1.rds.amazonaws.com',
	database: 'shadytreesdb',
	user     : 'shadytrees',
	password : 'gsahackathon'
});


app.get('/api/:latlong', function (request, response) {
	var latlong = request.params.latlong;

	var lat = latlong.substring(0,latlong.indexOf(','));

	var long = latlong.substring(latlong.indexOf(',')+1, latlong.length);

	var options = {
		host: "geocoding.geo.census.gov",
		path:"/geocoder/geographies/coordinates?x=" + long + "&y=" + lat + "&benchmark=4&vintage=4&layers=12&format=json"
	};
	//get city block and block group from census

	var status = 200;
	let fipsCodes = {};
	var req = http.get(options, function(res) {
		//console.log('STATUS: ' + res.statusCode);
		//console.log('HEADERS: ' + JSON.stringify(res.headers));

		// Buffer the body entirely for processing as a whole.
		var bodyChunks = [];
		res.on('data', function(chunk) {
			// You can process streamed parts here...
			bodyChunks.push(chunk);
//console.log(bodyChunks);
		}).on('end', function() {
			var body = Buffer.concat(bodyChunks);
			console.log(body +"");
			fipsCodes = JSON.parse(body+"");
			// ...and/or process the entire body here.
			 fipsCodes = fipsCodes['result']['geographies']['2010 Census Blocks'][0];

			let blockGroup = fipsCodes['BLKGRP'];
			let block = fipsCodes['BLOCK'];
			let tract = fipsCodes['TRACT'];
			let state = fipsCodes['STATE'];
			let county = fipsCodes['COUNTY'];
			let centLat = parseFloat(fipsCodes['CENTLAT']);
			let centLong = parseFloat(fipsCodes['CENTLON']);

			let arealand = fipsCodes['AREALAND'];
			let areawater = fipsCodes['AREAWATER'];

			//console.log(arealand,areawater, blockGroup);

			let blockObject = {};
			let trees = [];
			let areaShade = 0;

			blockObject['blockGroup'] = blockGroup;
			//blockObject['population'] = population;

			var sqrtArea = Math.sqrt((arealand))*0.00189394;



			var deltaLat = change_in_latitude( sqrtArea )/2;
			var deltaLong = change_in_longitude(centLat, sqrtArea)/2;




console.log(arealand,deltaLat,deltaLong, centLat,centLong);

			console.log(blockGroup);
			console.log(block);
var queryStringTrees = "SELECT lat, lng, cond, cmmn_name FROM trees WHERE (lat BETWEEN " + Math.min(centLat - deltaLat, centLat + deltaLat) +" AND " + Math.max(centLat - deltaLat, centLat + deltaLat) + ") AND (lng BETWEEN " + Math.min(centLong - deltaLong, centLong + deltaLong) +" AND " + Math.max(centLong - deltaLong, centLong + deltaLong) + ");";
var queryStringSum = "SELECT SUM(areaShade) AS summedAreaShade FROM trees WHERE (lat BETWEEN " + Math.min(centLat - deltaLat, centLat + deltaLat) +" AND " + Math.max(centLat - deltaLat, centLat + deltaLat) + ") AND (lng BETWEEN " + Math.min(centLong - deltaLong, centLong + deltaLong) +" AND " + Math.max(centLong - deltaLong, centLong + deltaLong) + ");";
			console.log(queryStringSum);
			//mySQL call to select on city block group
			connection.query(queryStringSum, function(err,rows,fields) {

				areaShade = rows[0]["summedAreaShade"];
				console.log(areaShade);
			});
			connection.query(queryStringTrees, function(err,rows,fields) {
				let curTree = {};
				for (var i = 0; i < rows.length; i++){

					curTree["cmmn_name"] = rows[i]['cmmn_name'];
					curTree["lat"] = rows[i]['lat'];
					curTree["lng"] = rows[i]['lng'];
					curTree["cond"] = rows[i]['cond'];
					console.log(curTree);
					trees.push(curTree);
				}
//console.log(trees);
// 	blockObject["score"] = arealand / areaShade;
				response.status(status).send(trees,blockObject);
			});

// //conditon of trees
//
// //todo: calculate score
			//population
			//income

			//connection.query("SELECT vehType, vehCount, agyName, GGE_E85, GGE_Gas, GGE_Diesel, GGE_Biodiesel, GGE_B20, GGE_Electricity FROM ghg_agency WHERE agyAbbrev = '"+ req.params.agency +"' ORDER BY GGE_Gas DESC;",
			//function(err, rows, fields) {

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


		})
	});


});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

function change_in_latitude(miles) {
	return (miles/3960.0) * (180.0/Math.PI);
}

function change_in_longitude(latitude, miles) {
	var r = 3960.0*Math.cos(latitude*Math.PI/180.0);
	return (miles/r)*(180/Math.PI);
}


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
