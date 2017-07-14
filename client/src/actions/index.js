// Action Constant Names

const SELECT_BAND = 'SELECT_BAND';

// selectBand is an Action Creator; it returns an action that has to be an object w/a type property:
export function selectBand(band) {
	console.log("You have selected: ", band.name);
	return {
		type: SELECT_BAND,
		payload: band
	};
}





































