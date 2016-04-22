var React = require('react');

class Intro extends React.Component {
	render() {
		return (
			<div className="intro">
				<h2>Throw Some Shade</h2>
                <p> The tree canopy in our neighborhoods reduces energy used to heat and
                    cool our buildings, protects us from overexposure to the sun and the health complications that
                    can result, and reduces urban heat island effect.</p>
                <p>Enter an address to calculate a shade score for the area, view information about trees in your neighborhood,
                and generate insights relating shade coverage to census data. </p>
			</div>

		);
	}
}

module.exports = Intro;