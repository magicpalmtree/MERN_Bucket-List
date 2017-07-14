import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
import SelectedBand from './reducer_selectedband';
import {reducer as formReducer} from 'redux-form';
import GoalsReducer from './reducer_goals';

// Define the properties of our Application State:
	const rootReducer = combineReducers({
		bands: BandsReducer,
		SelectedBand: SelectedBand,
		goals: GoalsReducer
	});

export default rootReducer;






