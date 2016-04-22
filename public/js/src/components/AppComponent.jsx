var React = require('react');
var Header = require('./HeaderComponent.jsx');
var SearchBar = require('./SearchBarComponent.jsx');
var Body = require('./Body.jsx');

class AppComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			lat: 38.898930,
			lng: -77.036589,
			zoom: 13,
			foundLocation: false,
			response: {}
		};
	}

	receivedProps(lat, lng, data) {
		this.setState({
			lat: lat,
			lng: lng,
			zoom: 15,
			foundLocation: true,
			response: data
		});
	}

	render() {
		return (
			<div className="container">
				<Header />
				<SearchBar updatedCoords={this.receivedProps.bind(this)} />
				<Body data={this.state} />
			</div>
		);
	}
}

module.exports = AppComponent;