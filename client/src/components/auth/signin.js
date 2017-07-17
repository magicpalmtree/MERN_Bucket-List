// This file is the signin form component. It uses Redux Forms.
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		console.log(email, password);
		//need to do sth to log user in
		this.props.signinUser({ email, password });
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Sorry partner.</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, fields: { email, password }} = this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

				<fieldset className="form-group">
					<label>Email:</label>
					<input {...email} className="form-control" />
				</fieldset>

				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} type="password" className="form-control" />
				</fieldset>
					{/* The below line will render if the renderAlert() above is "true". */}
					{this.renderAlert()}
			<button action="submit" className="btn btn-primary">Sign in</button>
		</form>
		);
	}
}

// Below: Notice that the value of the object is state.auth.error. That matches the “auth” key from the rootReducer & the error from the switch case:
function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

// Below: When exporting w/Redux Form, use the reduxForm() helper method.
// The 1st set of parentheses is for configuration.

export default reduxForm({

	// Pass in an object w/2 properties:
	form: 'signin',
	fields: ['email', 'password']

// The 2nd set of parentheses is for components; here, we have a Signin component:

}, mapStateToProps, actions)(Signin);

// Above line: Passing in the "actions" variable to the configuration gives us access to a lot of different action on props.

// Above: The mapStateToProps function takes a single argument of the entire Redux store's state and returns an object to be passed as props. It is often called a selector.






































