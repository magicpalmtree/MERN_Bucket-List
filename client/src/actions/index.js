// Import axios, a promise-based http library that let us make AJAX requests:
import axios from 'axios';
import { browserHistory } from 'react-router';

/* Before backend is set up, use a constant Root_URL to call out to a test api:

const ROOT_URL = "http://rest.learncode.academy/api/paul"; 

Once backend's set up, create a variable that contains the URL of the api server: */
const ROOT_URL = 'http://localhost:3000';

// Create a constant:
export const CREATE_POSTS = 'CREATE_POSTS';

export function signinUser({ email, password }){

	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
			.then(response => {
				browserHistory.push('/newitem');
			})
			.catch(() => {

			});
	}
}


// Action creator function "createPost" (returns an action):
export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}







































