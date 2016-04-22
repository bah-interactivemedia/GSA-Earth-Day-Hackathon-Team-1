var React = require('react');
var Geocoder = require('../helpers/geocoderHelper.js');
var fetchApi = require('../helpers/apiHelper.js');
var Q = require('q');

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			address: ''
		}
	}

	changeAddress(e) {
		this.setState({
			address: e.target.value
		});
	}

	geocodeAddress(e) {
		e.preventDefault();

		var lat;
		var lng;

		var self = this;
		Geocoder.lookup(this.state.address)
			.then(function(data) {
				lat = data.result.addressMatches[0].coordinates.y;
				lng = data.result.addressMatches[0].coordinates.x;
				return fetchApi(lat, lng);
			})
			.then(function(data) {
				self.props.updatedCoords(lat, lng, data);
			})
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<form className="serach-bar" onSubmit={this.geocodeAddress.bind(this)}>
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Enter Address" value={this.state.address} onChange={this.changeAddress.bind(this)} />
	                    <span className="input-group-btn">
	                        <button className="btn btn-default" type="button" onClick={this.geocodeAddress.bind(this)}>
								<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
							</button>
	                    </span>
						</div>
					</form>
				</div>
	        </div>
		);
	}
}

module.exports = SearchBar;