// This file is the signin form component. It uses Redux Forms.
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		console.log(email, password);
		//need to do sth to log user in
	}

	render() {
		const { handleSubmit, fields: { email, password }}=this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

				<fieldset className="form-group">
					<label>Email:</label>
					<input {...email} className="form-control" />
				</fieldset>

				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} className="form-control" />
				</fieldset>

			<button action="submit" className="btn btn-primary">Sign in</button>

		</form>
		);
	}
}

// When exporting w/Redux Form, use the reduxForm() helper method:
export default reduxForm({
	// Pass in an object w/2 properties:
	// This 1st set of parentheses is for configuration:
	form: 'signin',
	fields: ['email', 'password']
// This 2nd set of parentheses is for components; here, we have a Signin component:
})(Signin);






































