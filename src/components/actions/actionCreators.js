export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = newTodo => {
	return {
		type: ADD_TODO,
		newTodo
	};
};

export const updateTodo = (todoId, updatedTodo) => {
	return {
		type: UPDATE_TODO,
		todoId,
		updatedTodo
	};
};
export const deleteTodo = todoId => {
	return {
		type: DELETE_TODO,
		todoId
	};
};
