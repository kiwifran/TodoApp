import * as actionTypes from "../actions/actionCreators";

export default function rootReducer(state = {}, action) {
	switch (action.type) {
		case actionTypes.FETCH_TODOS:
			return action.payload;
		default:
			return state;
	}
}
