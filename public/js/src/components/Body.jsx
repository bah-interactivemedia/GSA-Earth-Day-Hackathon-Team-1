var React = require('react');
var MapComponent = require('./MapComponent.jsx');
var Intro = require('./Intro.jsx');

class Body extends React.Component {
	render() {

		var content = <Intro />;

		return (
			<div className="row content">
				<div className="col-sm-6">
					<MapComponent />
				</div>
				<div className="col-sm-6">
					{content}
				</div>
			</div>

		);
	}
}

module.exports = Body;