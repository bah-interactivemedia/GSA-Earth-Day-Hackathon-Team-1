var React = require('react');
var Leaflet = require('react-leaflet');

class MapComponent extends React.Component {
	render() {
		var position = [38.898930, -77.036589];
		return (
			<div className="map">
				<Leaflet.Map center={position} zoom={13}>
					<Leaflet.TileLayer
					url="http://api.tiles.mapbox.com/v4/kevinlig.kphk91ok/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2V2aW5saWciLCJhIjoiT191emR3cyJ9.T3NsT5NxSNso4LXoXJgNZQ"
					attribution='<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>'
					/>
				</Leaflet.Map>
			</div>
		);	
	}
}

module.exports = MapComponent;