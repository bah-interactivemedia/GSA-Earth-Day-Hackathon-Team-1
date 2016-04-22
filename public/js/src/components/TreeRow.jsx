var React = require('react');

class TreeRow extends React.Component {
	render() {
		return (
			<tr>
				<td>
					{this.props.tree.cmmn_name}
				</td>
				<td>
					{this.props.tree.lat + ', ' + this.props.tree.lng}
				</td>
				<td>
					{this.props.tree.cond}
				</td>
			</tr>
		);
	}
}

module.exports = TreeRow;