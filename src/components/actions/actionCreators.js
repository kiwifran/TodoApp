import dbRef from "../configs/firebase";
export const FETCH_TODOS = "FETCH_TODOS";
export const addTodo = newToDo => async dispatch => {
	dbRef.push(newToDo);
};
export const fetchTodos = () => {
	return dispatch => {
		dbRef.on("value", res => {
			dispatch({
				type: FETCH_TODOS,
				payload: res.val()
			});
		});
	};
};
export const updateTodo = (todoId, updatedTodo) => async dispatch => {
	dbRef.child(todoId).set(updatedTodo);
};
export const deleteTodo = todoId => async dispatch => {
	dbRef.child(todoId).remove();
};
