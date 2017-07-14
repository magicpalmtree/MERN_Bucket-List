import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
import SelectedBand from './reducer_selectedband';

// Import the pre-built reducer from redux-form:
import {reducer as formReducer} from 'redux-form';

import GoalsReducer from './reducer_goals';

// Define the properties of our Application State:
	const rootReducer = combineReducers({
		form: formReducer
		// bands: BandsReducer,
		// SelectedBand: SelectedBand,
		// goals: GoalsReducer
	});

export default rootReducer;







































