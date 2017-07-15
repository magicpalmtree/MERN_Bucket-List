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

			<button action="submit" className="btn btn-primary">Sign in</button>

		</form>
		);
	}
}

// When exporting w/Redux Form, use the reduxForm() helper method.
// The 1st set of parentheses is for configuration.
export default reduxForm({
	// Pass in an object w/2 properties:
	form: 'signin',
	fields: ['email', 'password']
// The 2nd set of parentheses is for components; here, we have a Signin component:
}, null, actions)(Signin);
// The null value fits in for mapStateToProps in the configuration.
// Passing in the "actions" variable to the configuration gives us access to a lot of different action on props.






































