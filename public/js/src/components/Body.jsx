var React = require('react');
var MapComponent = require('./MapComponent.jsx');
var Intro = require('./Intro.jsx');
var TreeData = require('./TreeData.jsx');

class Body extends React.Component {
	render() {

		var content = <Intro />;

		if (this.props.data.foundLocation) {
			content = <TreeData data={this.props.data} />;
		}

		return (
			<div className="row content">
				<div className="col-sm-6">
					<MapComponent data={this.props.data} />
				</div>
				<div className="col-sm-6 side-content">
					{content}
				</div>
			</div>

		);
	}
}

module.exports = Body;