import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandList extends Component{
	renderList(){
		return this.props.bands.map((bands) => {
			return (
				<li key={bands.name} className="list-group-item">{bands.name}</li>
			);
		});
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

// takes app state as argument
// Whatever gets returned will show up as props inside of band list

function mapStateToProps(state){
	return{
		bands: state.bands
	};
}

// Export statement that'll connect the contents of the current State to the BandList class:
export default connect(mapStateToProps)(BandList);































