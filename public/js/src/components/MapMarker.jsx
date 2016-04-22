var React = require('react');
var Leaflet = require('react-leaflet');

var defaultProps = {
	text: '',
	position: [0,0]
};

class Marker extends React.Component {
	render() {
		console.log(this.props.position);
		return (
			<Leaflet.Marker position={this.props.position}>
			</Leaflet.Marker>
		);
	}
}

Marker.defaultProps = defaultProps;

module.exports = Marker;