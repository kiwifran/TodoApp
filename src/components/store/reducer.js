import * as actionTypes from "../actions/actionCreators";
import dbRef from "../firebase";

// dbRef.on()
// const initialState = {
// 	todoList: []
// };

export default function rootReducer(state = {}, action) {
	switch (action.type) {
		case actionTypes.FETCH_TODOS:
			return action.payload;
		case actionTypes.ADD_TODO:
			dbRef.push(action.newTodo);
			return state;
		case actionTypes.UPDATE_TODO:
			return {};
		case actionTypes.DELETE_TODO:
			return {};
		default:
			return state;
	}
}
