var React = require('react');

class SearchBar extends React.Component {
	render() {
		return (
			<div className="row">
	            <div className="serach-bar">
	                <div className="input-group">
	                    <input type="text" className="form-control" placeholder="Enter Address" />
	                    <span className="input-group-btn">
	                        <button className="btn btn-default" type="button">
	                                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
	                        </button>
	                    </span>
	                </div>
	            </div>
	        </div>
		);
	}
}

module.exports = SearchBar;