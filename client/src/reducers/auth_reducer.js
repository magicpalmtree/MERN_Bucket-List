import { 
	AUTH_USER, 
	UNAUTH_USER,
	AUTH_ERROR
} from '../actions/types';

export default function(state = {}, action) {
	// The action.type parameter grabs from the type from the returned action:
	switch(action.type) {
		case AUTH_USER:
			return { ...state, error: '', authenticated: true };
		case UNAUTH_USER:
			return { ...state, authenticated: false };
		// Handle an action - If the user signs in and fails, we will dispatch the method that says "Bad login info" (redux-thunk lets us dispatch the method):
		case AUTH_ERROR:
			return { ...state, error: action.payload };

	}
	return state;
}



































