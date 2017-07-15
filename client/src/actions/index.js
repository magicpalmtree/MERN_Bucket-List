// Import axios, a promise-based http library that let us make AJAX requests:
import axios from 'axios';
import { browserHistory } from 'react-router';

import { 
	AUTH_USER, 
	UNAUTH_USER,
	AUTH_ERROR 
} from './types';

import authReducer from '../reducers/auth_reducer';

// Create a constant:
export const CREATE_POSTS = 'CREATE_POSTS';

/* Before backend is set up, use a constant Root_URL to call out to a test api:
const ROOT_URL = "http://rest.learncode.academy/api/paul"; 

Once backend's set up, create a variable that contains the URL of the api server: */
const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }){

	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
			.then(response => {
				// This only kickstarts if the request was good.
				// Update the state to indicate authenticated user:
				dispatch({ type: AUTH_USER });
				// Put the token in localStorage so it's safe:
				localStorage.setItem('token', response.data.token);
				// This sends us off to the /newitem view:
				browserHistory.push('/newitem');
			}) // /.then(response =>

			// Put an Action Creator inside the Action Creator.
			// If the user tries to sign in and fails, dispatch a method that says, "Bad login info":
			.catch(response => dispatch(authError)("Bad login info"));



			// Action Creator that returns an Action. Has a type property in it.
			export function authError(error) {
				return {
					type: AUTH_ERROR,
					payload: error
				};
			}





	} // /return function(dispatch)
} // /export function




// Action creator function "createPost" (returns an action):
export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}







































