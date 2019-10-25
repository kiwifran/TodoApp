import * as actionTypes from "../actions/actionCreators";
import firebase from "../firebase";

const dbRef = firebase.database().ref();
// dbRef.on()
const initialState = {
	todoList: [1, 222222, 3]
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			return {
				state
			};
		case actionTypes.UPDATE_TODO:
			return {};
		case actionTypes.DELETE_TODO:
			return {};
		default:
			return state;
	}
}
