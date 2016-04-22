var React = require('react');

class TreeList extends React.Component {
	render() {
		return (
			<li>
				{this.props.value}
			</li>
		);
	}
}

module.exports = TreeList;