var $ = require('jquery');
var Q = require('q');

var fetchApi = function(lat, lng) {

	var deferred = Q.defer();

	var url = 'http://ec2-54-83-133-255.compute-1.amazonaws.com/api/' + lat + ',' + lng

	// $.ajax({
	// 	dataType: 'json',
	// 	url: url,
	// 	method: 'GET'
	// })
	// .done(function(data) {
	// 	deferred.resolve(data);
	// });


	deferred.resolve({
		block: {},
		trees: [
			{
				cmmn_name: 'Something',
				lat: 38.899239,
				lng: -77.043788,
				cond: 'Good'
			},
			{
				cmmn_name: 'Something2',
				lat: 38.897686,
				lng: -77.045558,
				cond: 'Poor'
			},
			{
				cmmn_name: 'Something3',
				lat: 38.895429,
				lng: -77.042648,
				cond: 'Better'
			}

		]
	})

	return deferred.promise;

};

module.exports = fetchApi;