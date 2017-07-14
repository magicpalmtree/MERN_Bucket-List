// State argument is not the entire application state, rather only the piece of state for which this reducer is responsible.

// If we boot up the app, and the user hasn't selected a band, this reducer would return "undefined", which is illegal in redux, so we defaul the state argument to null.

export default function(state = null, action){
	switch(action.type){
		case 'SELECT_BAND':
			return action.payload;
	}

	return state;
}



































