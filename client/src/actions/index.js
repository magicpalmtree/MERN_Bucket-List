// Import axios, a promise-based http library that let us make AJAX requests:
import axios from 'axios';

// Create a constant:
export const CREATE_POSTS = 'CREATE_POSTS';

// Use a constant Root_URL to call out to a test api because we don't have our backend set up yet:
const ROOT_URL = "http://rest.learncode.academy/api/caitlyntetmeyer";

// Action creator function "createPost" (returns an action):
export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}





































