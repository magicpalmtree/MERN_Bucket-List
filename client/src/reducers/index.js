import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth_reducer';
import PostsReducer from './reducer_posts';

// Define the properties of our Application State:
	const rootReducer = combineReducers({
		form: formReducer,
		// Notice the auth key:
		auth: authReducer,
		posts: PostsReducer
	});

export default rootReducer;







































