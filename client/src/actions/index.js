// Import axios, a promise-based http library that let us make AJAX requests:
import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
	AUTH_USER, 
	UNAUTH_USER,
	AUTH_ERROR,
	CREATE_POSTS,
	FETCH_POSTS,
	FETCH_POST,
	DELETE_POST,
	UPDATE_POST
} from './types';

import authReducer from '../reducers/auth_reducer';

// export const CREATE_POSTS = 'CREATE_POSTS';

const ROOT_URL = 'http://cct-bucketlist.herokuapp.com/api';

// This config variable will be used to get our token from local storage and attach it to our header so that we can make an authenticated request:
var config = {
	headers: { authorization: localStorage.getItem('token') }
}

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
				
				})
				.catch(response => dispatch(authError("Bad login info")));


	} // /return function(dispatch)

} // /export function


// The purpose of type is to catch unauth_user case.
// It flips auth tag to "false," & there won't be any links associated w/them.
export function signoutUser() {
	// Get rid of token:
	localStorage.removeItem('token');
	return {type: UNAUTH_USER};
}


// Action Creator that returns an Action. Has a type property in it.
export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};

}


// Action creator function (returns an action):
export function createPost(props) {
	return function(dispatch){
		axios.post(`${ROOT_URL}/newitem`, { props }, config )
		.then(request => {
			dispatch({
				type: CREATE_POSTS,
				payload: request
			});
			browserHistory.push('/items');
		});
	}
}

export function signupUser({ email, password }){

	return function(dispatch) {
		// Submit email/password to the server:
		axios.post(`${ROOT_URL}/signup`, {email, password})
			.then(response => {
				dispatch({ type: AUTH_USER });
				
				// Update the token:
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/signin');
				
			})
			.catch(response => dispatch(authError(response.data.error)));
	}
} 

export function fetchPosts() {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/items`, config)
		.then((response) => {
			console.log("Response", response)
			dispatch({
				type: FETCH_POSTS,
				payload: response
			});
		});
	}
}

// Complement to the server side for fetching a single post:
export function fetchPost(id) {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/items/${id}`, config)
		.then( (response) => {
			console.log("Response", response)
			dispatch({
				type: FETCH_POST,
				payload: response
			});
		});
	}
}

// Complement to the server side for deleting a single post:
export function deletePost(id) {
	return function(dispatch) {
		axios.delete(`${ROOT_URL}/items/${id}`, config)
		.then( (response) => {
			dispatch({
				type: DELETE_POST,
				payload: response
			});
			browserHistory.push('/items');
		});
	}
}

export function updatePost(props, id) {
	return function(dispatch) {
		axios.put(`${ROOT_URL}/items/${id}`, { props }, config)
		.then(response => {
			dispatch({
				type: UPDATE_POST,
				payload: response
			});
			browserHistory.push('/items');
		});
	}
}










































