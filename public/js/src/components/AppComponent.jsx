var React = require('react');
var Header = require('./HeaderComponent.jsx');
var SearchBar = require('./SearchBarComponent.jsx');
var Body = require('./Body.jsx');

class AppComponent extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<SearchBar />
				<Body />
			</div>
		);
	}
}

module.exports = AppComponent;