var React = require('react');
var Leaflet = require('react-leaflet');

var Marker = require('./MapMarker.jsx');

var L = require('leaflet');

var defaultProps = {
	foundLocation: false
};

class MapComponent extends React.Component {

	dropMarkers() {
		var position = [this.props.data.lat, this.props.data.lng];
		var map = this.refs.map.getLeafletElement();

		// draw home location
		var marker = L.marker(position).addTo(map);

		// draw trees
		var treeIcon = L.icon({
			iconUrl: 'tree2.png',
			iconSize: [48/2,65/2],
			iconAnchor: [24/2, 65/2]
		});
		this.props.data.response.trees.forEach(function(tree) {
			var treePos = [tree.lat, tree.lng];
			var treeMarker = L.marker(treePos, {icon: treeIcon}).addTo(map);
			treeMarker.bindPopup('<b>' + tree.cmmn_name + '</b><br />' + tree.cond + ' condition');
		});

	}

	render() {
		var position = [this.props.data.lat, this.props.data.lng];
		var markers = '';

		if (this.props.data.foundLocation) {
			this.dropMarkers();
		}

		return (
			<div className="map" id="map">
				<Leaflet.Map ref="map" center={position} zoom={this.props.data.zoom}>
					<Leaflet.TileLayer
					url="http://api.tiles.mapbox.com/v4/kevinlig.kphk91ok/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2V2aW5saWciLCJhIjoiT191emR3cyJ9.T3NsT5NxSNso4LXoXJgNZQ"
					attribution='<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>'
					/>
				</Leaflet.Map>
			</div>
		);	
	}
}

MapComponent.defaultProps = defaultProps;

module.exports = MapComponent;