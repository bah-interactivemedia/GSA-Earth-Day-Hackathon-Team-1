var $ = require('jquery');
var Q = require('q');

var fetchApi = function(lat, lng) {

	var deferred = Q.defer();

	// var url = 'http://localhost:3010/api/' + lat + ',' + lng;
	// var url = 'http://localhost:3010/data';
	var url = 'https://s3.amazonaws.com/earthday-team1/data.json';

	var data1;

	// $.ajax({
	// 	dataType: 'json',
	// 	url: url,
	// 	method: 'GET'
	// })
	// .done(function(data) {
	// 	console.log(data);
	// 	deferred.resolve({
	// 		trees: data
	// 	});
	// });

	deferred.resolve({
		trees: [{ cmmn_name: 'Red maple',
  lat: 38.9155,
  lng: -77.028,
  cond: 'Poor' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9156,
  lng: -77.0305,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9176,
  lng: -77.0295,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9155,
  lng: -77.0266,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9155,
  lng: -77.0303,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9157,
  lng: -77.0295,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9156,
  lng: -77.0284,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9155,
  lng: -77.0287,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9155,
  lng: -77.0272,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9172,
  lng: -77.0295,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9182,
  lng: -77.0279,
  cond: 'Excellent' },
{ cmmn_name: 'Red maple',
  lat: 38.9156,
  lng: -77.0292,
  cond: 'Excellent' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9183,
  lng: -77.028,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9155,
  lng: -77.0312,
  cond: 'Fair' },
{ cmmn_name: 'Red maple',
  lat: 38.9145,
  lng: -77.028,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9181,
  lng: -77.0293,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9173,
  lng: -77.028,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9152,
  lng: -77.028,
  cond: 'Excellent' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9182,
  lng: -77.0309,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9158,
  lng: -77.0271,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9155,
  lng: -77.0307,
  cond: 'Fair' },
{ cmmn_name: 'London plane tree',
  lat: 38.9169,
  lng: -77.0303,
  cond: 'Excellent' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9182,
  lng: -77.0274,
  cond: 'Fair' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9182,
  lng: -77.0292,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9158,
  lng: -77.028,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9161,
  lng: -77.0271,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9165,
  lng: -77.0295,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9156,
  lng: -77.0277,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9156,
  lng: -77.0278,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9151,
  lng: -77.0282,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9181,
  lng: -77.0266,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9143,
  lng: -77.0281,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9162,
  lng: -77.0303,
  cond: 'Fair' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9182,
  lng: -77.0275,
  cond: 'Fair' },
{ cmmn_name: 'Magnolia',
  lat: 38.9147,
  lng: -77.0267,
  cond: 'Excellent' },
{ cmmn_name: 'Norway maple',
  lat: 38.9156,
  lng: -77.0285,
  cond: 'Fair' },
{ cmmn_name: 'Red maple',
  lat: 38.9163,
  lng: -77.0302,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9157,
  lng: -77.0297,
  cond: 'Excellent' },
{ cmmn_name: 'Norway maple',
  lat: 38.9153,
  lng: -77.028,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9147,
  lng: -77.028,
  cond: 'Fair' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9155,
  lng: -77.0314,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9181,
  lng: -77.0289,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9163,
  lng: -77.0301,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9181,
  lng: -77.0287,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9155,
  lng: -77.0304,
  cond: 'Excellent' },
{ cmmn_name: 'Norway maple',
  lat: 38.9155,
  lng: -77.0289,
  cond: 'Fair' },
{ cmmn_name: 'Red maple',
  lat: 38.9165,
  lng: -77.0282,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9163,
  lng: -77.0282,
  cond: 'Excellent' },
{ cmmn_name: 'Red maple',
  lat: 38.9175,
  lng: -77.0295,
  cond: 'Excellent' },
{ cmmn_name: 'Red maple',
  lat: 38.9156,
  lng: -77.0293,
  cond: 'Fair' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9182,
  lng: -77.0294,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9182,
  lng: -77.0307,
  cond: 'Fair' },
{ cmmn_name: 'Norway maple',
  lat: 38.9154,
  lng: -77.028,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9168,
  lng: -77.0295,
  cond: 'Fair' },
{ cmmn_name: 'Red maple',
  lat: 38.9155,
  lng: -77.0265,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9155,
  lng: -77.0268,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9163,
  lng: -77.028,
  cond: 'Fair' },
{ cmmn_name: 'Swamp white oak',
  lat: 38.9164,
  lng: -77.0271,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9182,
  lng: -77.0287,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9175,
  lng: -77.0297,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9177,
  lng: -77.0297,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9163,
  lng: -77.0309,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9155,
  lng: -77.0278,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9177,
  lng: -77.028,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9156,
  lng: -77.0282,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9162,
  lng: -77.0312,
  cond: 'Fair' },
{ cmmn_name: 'Norway maple',
  lat: 38.9162,
  lng: -77.0313,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9168,
  lng: -77.0282,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9163,
  lng: -77.0312,
  cond: 'Fair' },
{ cmmn_name: 'Crape myrtle',
  lat: 38.9171,
  lng: -77.0309,
  cond: 'Excellent' },
{ cmmn_name: 'Norway maple',
  lat: 38.9155,
  lng: -77.0284,
  cond: 'Fair' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9182,
  lng: -77.0277,
  cond: 'Fair' },
{ cmmn_name: 'Red maple',
  lat: 38.9159,
  lng: -77.0282,
  cond: 'Excellent' },
{ cmmn_name: 'London plane tree',
  lat: 38.9169,
  lng: -77.0299,
  cond: 'Excellent' },
{ cmmn_name: 'Red maple',
  lat: 38.9182,
  lng: -77.0282,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9156,
  lng: -77.0288,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9156,
  lng: -77.0307,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9144,
  lng: -77.0282,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9163,
  lng: -77.0311,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9166,
  lng: -77.028,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9159,
  lng: -77.028,
  cond: 'Excellent' },
{ cmmn_name: 'Red maple',
  lat: 38.9153,
  lng: -77.0282,
  cond: 'Good' },
{ cmmn_name: 'Red maple',
  lat: 38.9156,
  lng: -77.0287,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9149,
  lng: -77.0297,
  cond: 'Excellent' },
{ cmmn_name: 'Red maple',
  lat: 38.9167,
  lng: -77.0282,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9155,
  lng: -77.0301,
  cond: 'Good' },
{ cmmn_name: 'Norway maple',
  lat: 38.9155,
  lng: -77.0269,
  cond: 'Poor' },
{ cmmn_name: 'Red maple',
  lat: 38.9144,
  lng: -77.028,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9182,
  lng: -77.0279,
  cond: 'Excellent' },
{ cmmn_name: 'Red horsechestnut',
  lat: 38.9143,
  lng: -77.0268,
  cond: 'Excellent' },
{ cmmn_name: 'Hackberry',
  lat: 38.9155,
  lng: -77.0306,
  cond: 'Excellent' },
{ cmmn_name: 'Dogwood (Kousa)',
  lat: 38.9156,
  lng: -77.0279,
  cond: 'Excellent' },
{ cmmn_name: 'Dogwood (Kousa)',
  lat: 38.9157,
  lng: -77.028,
  cond: 'Excellent' },
{ cmmn_name: 'Eastern redbud',
  lat: 38.9182,
  lng: -77.0273,
  cond: 'Excellent' },
{ cmmn_name: 'Hackberry',
  lat: 38.9156,
  lng: -77.031,
  cond: 'Excellent' },
{ cmmn_name: 'Redbud', lat: 38.9156, lng: -77.03, cond: 'Good' },
{ cmmn_name: 'Silver linden',
  lat: 38.9156,
  lng: -77.0272,
  cond: 'Fair' },
{ cmmn_name: 'Pin oak',
  lat: 38.9144,
  lng: -77.0272,
  cond: 'Excellent' },
{ cmmn_name: 'Silver linden',
  lat: 38.9174,
  lng: -77.028,
  cond: 'Fair' },
{ cmmn_name: 'Goldenrain tree',
  lat: 38.9169,
  lng: -77.0287,
  cond: 'Excellent' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0285,
  cond: 'Good' },
{ cmmn_name: 'Willow oak',
  lat: 38.916,
  lng: -77.0271,
  cond: 'Excellent' },
{ cmmn_name: 'London plane tree',
  lat: 38.9156,
  lng: -77.0311,
  cond: 'Excellent' },
{ cmmn_name: 'Bradford callery pear',
  lat: 38.9162,
  lng: -77.031,
  cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9159,
  lng: -77.0295,
  cond: 'Good' },
{ cmmn_name: 'Green Vase Japanese zelkova',
  lat: 38.9162,
  lng: -77.0299,
  cond: 'Excellent' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0264,
  cond: 'Good' },
{ cmmn_name: 'Chinese elm',
  lat: 38.9147,
  lng: -77.0297,
  cond: 'Excellent' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9156,
  lng: -77.0303,
  cond: 'Good' },
{ cmmn_name: 'Japanese zelkova',
  lat: 38.9163,
  lng: -77.0307,
  cond: 'Good' },
{ cmmn_name: 'Japanese zelkova',
  lat: 38.9163,
  lng: -77.0305,
  cond: 'Good' },
{ cmmn_name: 'Japanese zelkova',
  lat: 38.9179,
  lng: -77.0282,
  cond: 'Excellent' },
{ cmmn_name: 'Japanese zelkova',
  lat: 38.9162,
  lng: -77.0302,
  cond: 'Good' },
{ cmmn_name: 'Japanese zelkova',
  lat: 38.918,
  lng: -77.0282,
  cond: 'Fair' },
{ cmmn_name: 'Japanese zelkova',
  lat: 38.9174,
  lng: -77.0282,
  cond: 'Excellent' },
{ cmmn_name: 'Pin oak',
  lat: 38.9149,
  lng: -77.0295,
  cond: 'Fair' },
{ cmmn_name: 'Sweetgum (sterile)',
  lat: 38.9164,
  lng: -77.0295,
  cond: 'Excellent' },
{ cmmn_name: 'Honeylocust',
  lat: 38.9154,
  lng: -77.0281,
  cond: 'Excellent' },
{ cmmn_name: 'Goldenrain tree',
  lat: 38.9156,
  lng: -77.0308,
  cond: 'Excellent' },
{ cmmn_name: 'Dawn redwood',
  lat: 38.9156,
  lng: -77.0265,
  cond: 'Excellent' },
{ cmmn_name: 'Tupelo', lat: 38.9162, lng: -77.0307, cond: 'Good' },
{ cmmn_name: 'Red oak',
  lat: 38.9149,
  lng: -77.0281,
  cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9161,
  lng: -77.028,
  cond: 'Excellent' },
{ cmmn_name: 'Pin oak',
  lat: 38.9165,
  lng: -77.0271,
  cond: 'Excellent' },
{ cmmn_name: 'Green Vase Japanese zelkova',
  lat: 38.9172,
  lng: -77.0282,
  cond: 'Excellent' },
{ cmmn_name: 'Village Green Japanese zelkova',
  lat: 38.9181,
  lng: -77.0283,
  cond: 'Good' },
{ cmmn_name: 'Scarlet oak',
  lat: 38.9154,
  lng: -77.0295,
  cond: 'Excellent' },
{ cmmn_name: 'Willow oak',
  lat: 38.9153,
  lng: -77.0295,
  cond: 'Good' },
{ cmmn_name: 'Scarlet oak',
  lat: 38.9161,
  lng: -77.0297,
  cond: 'Good' },
{ cmmn_name: 'Tupelo', lat: 38.9162, lng: -77.0311, cond: 'Good' },
{ cmmn_name: 'Japanese pagodatree',
  lat: 38.9157,
  lng: -77.027,
  cond: 'Good' },
{ cmmn_name: 'Shumard oak',
  lat: 38.9167,
  lng: -77.0295,
  cond: 'Good' },
{ cmmn_name: 'Lilac',
  lat: 38.9156,
  lng: -77.0313,
  cond: 'Excellent' },
{ cmmn_name: 'Lilac',
  lat: 38.9162,
  lng: -77.0306,
  cond: 'Excellent' },
{ cmmn_name: 'London plane tree',
  lat: 38.9169,
  lng: -77.0275,
  cond: 'Good' },
{ cmmn_name: 'Sugar maple',
  lat: 38.9182,
  lng: -77.0264,
  cond: 'Good' },
{ cmmn_name: 'Chinese elm',
  lat: 38.9163,
  lng: -77.0313,
  cond: 'Excellent' },
{ cmmn_name: 'Pin oak', lat: 38.9165, lng: -77.027, cond: 'Good' },
{ cmmn_name: 'Pin oak', lat: 38.9166, lng: -77.027, cond: 'Good' },
{ cmmn_name: 'Pin oak', lat: 38.9161, lng: -77.027, cond: 'Fair' },
{ cmmn_name: 'Pin oak',
  lat: 38.9146,
  lng: -77.0272,
  cond: 'Poor' },
{ cmmn_name: 'Pin oak',
  lat: 38.9145,
  lng: -77.0297,
  cond: 'Good' },
{ cmmn_name: 'Scarlet oak',
  lat: 38.9149,
  lng: -77.0271,
  cond: 'Poor' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0265,
  cond: 'Good' },
{ cmmn_name: 'Red oak',
  lat: 38.9159,
  lng: -77.0271,
  cond: 'Good' },
{ cmmn_name: 'Willow oak',
  lat: 38.9158,
  lng: -77.0271,
  cond: 'Good' },
{ cmmn_name: 'Rotundiloba sweetgum',
  lat: 38.9181,
  lng: -77.0268,
  cond: 'Excellent' },
{ cmmn_name: 'London plane tree',
  lat: 38.9161,
  lng: -77.0282,
  cond: 'Excellent' },
{ cmmn_name: 'Rotundiloba sweetgum',
  lat: 38.916,
  lng: -77.0282,
  cond: 'Excellent' },
{ cmmn_name: 'London plane tree',
  lat: 38.9169,
  lng: -77.0313,
  cond: 'Good' },
{ cmmn_name: 'Goldenrain tree',
  lat: 38.9156,
  lng: -77.0299,
  cond: 'Good' },
{ cmmn_name: 'Willow oak',
  lat: 38.9151,
  lng: -77.027,
  cond: 'Excellent' },
{ cmmn_name: 'Overcup oak',
  lat: 38.9168,
  lng: -77.027,
  cond: 'Excellent' },
{ cmmn_name: 'Other (See Notes)',
  lat: 38.9159,
  lng: -77.0297,
  cond: 'Excellent' },
{ cmmn_name: 'Village Green Japanese zelkova',
  lat: 38.9181,
  lng: -77.0284,
  cond: 'Good' },
{ cmmn_name: 'Oak',
  lat: 38.9147,
  lng: -77.0295,
  cond: 'Excellent' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0299,
  cond: 'Good' },
{ cmmn_name: 'Swamp white oak',
  lat: 38.9143,
  lng: -77.0297,
  cond: 'Excellent' },
{ cmmn_name: 'Dawn redwood',
  lat: 38.9156,
  lng: -77.0267,
  cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9169,
  lng: -77.0309,
  cond: 'Good' },
{ cmmn_name: 'Pin oak',
  lat: 38.9151,
  lng: -77.0297,
  cond: 'Excellent' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0284,
  cond: 'Good' },
{ cmmn_name: 'Oak', lat: 38.9183, lng: -77.0295, cond: 'Good' },
{ cmmn_name: 'Rotundiloba sweetgum',
  lat: 38.9181,
  lng: -77.0264,
  cond: 'Excellent' },
{ cmmn_name: 'Lilac', lat: 38.9162, lng: -77.028, cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9169,
  lng: -77.0308,
  cond: 'Good' },
{ cmmn_name: 'Thornless honeylocust',
  lat: 38.9183,
  lng: -77.0271,
  cond: 'Excellent' },
{ cmmn_name: 'Pin oak',
  lat: 38.9146,
  lng: -77.0295,
  cond: 'Excellent' },
{ cmmn_name: 'Tulip poplar',
  lat: 38.9154,
  lng: -77.0271,
  cond: 'Excellent' },
{ cmmn_name: 'Pin oak', lat: 38.915, lng: -77.027, cond: 'Good' },
{ cmmn_name: 'Pin oak',
  lat: 38.9151,
  lng: -77.0295,
  cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0303,
  cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0304,
  cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9169,
  lng: -77.0268,
  cond: 'Excellent' },
{ cmmn_name: 'Lilac',
  lat: 38.9163,
  lng: -77.0298,
  cond: 'Excellent' },
{ cmmn_name: 'Honeylocust',
  lat: 38.9156,
  lng: -77.0302,
  cond: 'Good' },
{ cmmn_name: 'Goldenrain tree',
  lat: 38.9155,
  lng: -77.0311,
  cond: 'Good' },
{ cmmn_name: 'Red oak',
  lat: 38.9162,
  lng: -77.0271,
  cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0267,
  cond: 'Good' },
{ cmmn_name: 'Swamp white oak',
  lat: 38.9152,
  lng: -77.0271,
  cond: 'Excellent' },
{ cmmn_name: 'Silver linden',
  lat: 38.9176,
  lng: -77.028,
  cond: 'Excellent' },
{ cmmn_name: 'Pin oak',
  lat: 38.9168,
  lng: -77.0271,
  cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9169,
  lng: -77.0266,
  cond: 'Excellent' },
{ cmmn_name: 'Pin oak',
  lat: 38.9153,
  lng: -77.0297,
  cond: 'Excellent' },
{ cmmn_name: 'Bloodgood london plane tree',
  lat: 38.9162,
  lng: -77.0282,
  cond: 'Excellent' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0294,
  cond: 'Good' },
{ cmmn_name: 'Crape myrtle',
  lat: 38.9155,
  lng: -77.0309,
  cond: 'Excellent' },
{ cmmn_name: 'Lilac',
  lat: 38.9162,
  lng: -77.03,
  cond: 'Excellent' },
{ cmmn_name: 'Magnolia',
  lat: 38.9144,
  lng: -77.0267,
  cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0293,
  cond: 'Good' },
{ cmmn_name: 'Pin oak',
  lat: 38.9167,
  lng: -77.0271,
  cond: 'Excellent' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0312,
  cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9171,
  lng: -77.0274,
  cond: 'Good' },
{ cmmn_name: 'Kwanzan cherry',
  lat: 38.9181,
  lng: -77.031,
  cond: 'Excellent' },
{ cmmn_name: 'Willow oak',
  lat: 38.9162,
  lng: -77.0295,
  cond: 'Excellent' },
{ cmmn_name: 'Littleleaf linden',
  lat: 38.9155,
  lng: -77.0275,
  cond: 'Excellent' },
{ cmmn_name: 'Tulip poplar',
  lat: 38.9151,
  lng: -77.0271,
  cond: 'Excellent' },
{ cmmn_name: 'Red oak',
  lat: 38.915,
  lng: -77.0282,
  cond: 'Excellent' },
{ cmmn_name: 'Bradford callery pear',
  lat: 38.915,
  lng: -77.028,
  cond: 'Good' },
{ cmmn_name: 'Swamp white oak',
  lat: 38.9164,
  lng: -77.0271,
  cond: 'Excellent' },
{ cmmn_name: 'Scarlet oak',
  lat: 38.916,
  lng: -77.0295,
  cond: 'Fair' },
{ cmmn_name: 'Rotundiloba sweetgum',
  lat: 38.9162,
  lng: -77.0282,
  cond: 'Excellent' },
{ cmmn_name: 'Pin oak', lat: 38.9152, lng: -77.027, cond: 'Poor' },
{ cmmn_name: 'Bloodgood london plane tree',
  lat: 38.9182,
  lng: -77.029,
  cond: 'Excellent' },
{ cmmn_name: 'Bloodgood london plane tree',
  lat: 38.9182,
  lng: -77.0286,
  cond: 'Excellent' },
{ cmmn_name: 'Willow oak',
  lat: 38.915,
  lng: -77.0271,
  cond: 'Excellent' },
{ cmmn_name: 'Willow oak',
  lat: 38.9152,
  lng: -77.027,
  cond: 'Good' },
{ cmmn_name: 'Pin oak',
  lat: 38.9153,
  lng: -77.0271,
  cond: 'Good' },
{ cmmn_name: 'Bradford callery pear',
  lat: 38.9181,
  lng: -77.0286,
  cond: 'Good' },
{ cmmn_name: 'London plane tree',
  lat: 38.9169,
  lng: -77.0285,
  cond: 'Good' },
{ cmmn_name: 'Dawn redwood',
  lat: 38.9156,
  lng: -77.0266,
  cond: 'Excellent' },
{ cmmn_name: 'Bloodgood london plane tree',
  lat: 38.9171,
  lng: -77.0268,
  cond: 'Excellent' },
{ cmmn_name: 'Pin oak',
  lat: 38.9154,
  lng: -77.0297,
  cond: 'Good' },
{ cmmn_name: 'Pin oak', lat: 38.9162, lng: -77.027, cond: 'Poor' },
{ cmmn_name: 'Nuttall oak',
  lat: 38.9164,
  lng: -77.027,
  cond: 'Excellent' }
  ]
	})

	
	return deferred.promise;

};

module.exports = fetchApi;