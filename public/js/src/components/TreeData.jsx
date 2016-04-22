var React = require('react');
var TreeRow = require('./TreeRow.jsx');

class TreeData extends React.Component {

	render() {
		var rows = '';
		
		if (this.props.data.response.trees.length > 0) {
			rows = this.props.data.response.trees.map(function(tree, index) {
				return <TreeRow tree={tree} key={index} />;
			});
		}

		return (
			<div>
				<div className="shade-index">
				    <span className="glyphicon glyphicon glyphicon-sunglasses" aria-hidden="true"></span>
				    <span className="number-value">[#.#]</span>
				    <div className="shade-description">Throwin' [verbage based on index] of shade</div>
				</div>
				<div className="info-group">
				    <h3>Types of Trees</h3>
				    <ul>
				        <li>Type</li>
				    </ul>
				</div>
				<div className="info-group">
				    <div className="group-heading">
				        <span className="glyphicon glyphicon glyphicon glyphicon-tree-conifer header-icon" aria-hidden="true"></span>
				        <h3>Types of Trees</h3>
				    </div>
				    <ul>
				        <li>Type</li>
				    </ul>
				</div>
				<div className="info-group">
				    <div className="group-heading">
				        <span className="glyphicon glyphicon-tree-deciduous header-icon" aria-hidden="true"></span>
				        <h3>Census Block Group [] Summary</h3>
				    </div>
				    <p><span>Population:</span>[Population]</p>
				    <p><span>Trees per person:</span>[trees/ppl]</p>
				</div>

				<table className="table table-bordered">
					<thead>
						<th>Tree Type</th>
						<th>Location</th>
						<th>Tree Condition</th>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
}

module.exports = TreeData;