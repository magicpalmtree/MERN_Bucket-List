// This file has to do with the React Components Lifecycle (Mounting, Updating, Unmounting) - componentWillMount() is part of Mounting, and componentWillUpdate() is part of Updating.

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
	class Authentication extends Component {
		static contextTypes = {
			router: React.PropTypes.object
		}

		// componentWillMount() is invoked once, both on the client and server, immediately before the initial rendering occurs:
		componentWillMount() {
			if (!this.props.authenticated) {
				this.context.router.push('/');
			}
		}

		// componentWillUpdate() is invoked immediately before rendering when new props or state are being received. This method is not called for the initial render. It's an opportunity to perform preparation before an update occurs:
		componentWillUpdate(nextProps) {
			if (!nextProps.authenticated) {
				this.context.router.push('/');
			}
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}

	function mapStateToProps(state) {
		return { authenticated: state.auth.authenticated };
	}

	return connect(mapStateToProps)(Authentication);
}












































