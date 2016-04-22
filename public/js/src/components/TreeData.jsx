var React = require('react');
var TreeRow = require('./TreeRow.jsx');
var TreeList = require('./TreeList.jsx');
var _ = require('lodash');

class TreeData extends React.Component {

	render() {
		var rows = '';
		
		if (this.props.data.response.trees.length > 0) {
			rows = this.props.data.response.trees.map(function(tree, index) {
				return <TreeRow tree={tree} key={index} />;
			});
		}

		var shadeIndex = 4;

		var verbage = 'no';
		if (shadeIndex < 2.5 && shadeIndex > 0) {
			verbage = 'hardly any';
		}
		else if (shadeIndex < 5) {
			verbage = 'a little';
		}
		else if (shadeIndex < 7.5) {
			verbage = 'some';
		}
		else {
			verbage = 'lots of';
		}

		var population = 2258;
		var rate = Math.round(population/this.props.data.response.trees.length);

		var allTypes = [];
		this.props.data.response.trees.forEach(function(tree) {
			allTypes.push(tree.cmmn_name);
		});

		var uniqueTypes = _.orderBy(_.uniq(allTypes));
		var types = '';
		if (uniqueTypes.length > 0) {
			types = uniqueTypes.map(function(item, index) {
				return <TreeList value={item} key={index} />;
			})
		}

		var income = '$124,719';
		return (
			<div>
				<div className="shade-index">
				    <span className="glyphicon glyphicon glyphicon-sunglasses" aria-hidden="true"></span>
				    <span className="number-value">Shade Index: {shadeIndex}</span>
				    <div className="shade-description">{'Throwin\' ' + verbage + ' shade'}</div>
				</div>
				<div className="info-group">
				    <div className="group-heading">
				        <span className="glyphicon glyphicon glyphicon glyphicon-tree-conifer header-icon" aria-hidden="true"></span>
				        <h3>Types of Trees</h3>
				    </div>
				    <ul>
				        {types}
				    </ul>
				</div>
				<div className="info-group">
				    <div className="group-heading">
				        <span className="glyphicon glyphicon-tree-deciduous header-icon" aria-hidden="true"></span>
				        <h3>Census Block Group Summary</h3>
				    </div>
				    <p><span>Median Income: </span>{income}</p>
				    <p><span>Population: </span>{population}</p>
				    <p><span>Trees per person: </span>{rate}</p>
				</div>

				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Tree Type</th>
							<th>Location</th>
							<th>Tree Condition</th>
						</tr>
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