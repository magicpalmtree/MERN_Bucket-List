import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth_reducer';

// We're already importing these in the auth_reducer:
// import {
// 	AUTH_USER,
// 	UNAUTH_USER
// } from '../actions/types';

// Define the properties of our Application State:
	const rootReducer = combineReducers({
		form: formReducer,
		// Notice the auth key in this object inside the combineReducers function:
		auth: authReducer
	});

export default rootReducer;







































