import React, { Component } from 'react';
import { connect } from 'react-redux';
// Toggle AUTH_USER and UNAUTH_USER:
import * as actions from '../../actions';

// Signout component:
class Signout extends Component {
	// React Component Lifecycle Diagram - Steps in Mounting: getInitialState -> componentWillMount -> render -> componentDidMount
	componentWillMount() {
		this.props.signoutUser();
	}
	render() {
		return <div>Sorry to see you go...</div>;
	}
}

export default connect(null, actions)(Signout);
