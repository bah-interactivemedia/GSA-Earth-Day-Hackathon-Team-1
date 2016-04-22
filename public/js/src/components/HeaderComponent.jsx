var React = require('react');

class Header extends React.Component {
	render() {
		return (
			<header>
	            <div className="logo"></div>
	            <h1>DC SHADE</h1>
	        </header>
		);
	}
}

module.exports = Header;