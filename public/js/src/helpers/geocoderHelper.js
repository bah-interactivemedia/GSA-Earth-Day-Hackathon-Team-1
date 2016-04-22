var Request = require('superagent');
var $ = require('jquery');
var Q = require('q');

var geocode = function(address) {
	var url = 'http://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=' + encodeURIComponent(address) + ', Washington, DC' + '&benchmark=9&format=jsonp&callback=?';

	var deferred = Q.defer();

	$.ajax({
		dataType: 'json',
		url: url,
		method: 'GET'
	})
	.done(function(data) {
		deferred.resolve(data);
	});

	return deferred.promise;
}

module.exports.lookup = geocode;