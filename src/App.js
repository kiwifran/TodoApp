import React from "react";
import TodoForm from "./components/container/TodoForm";
import TodoList from "./components/container/TodoList";
function App() {
	return (
		<div className="App">
			<TodoForm />
			<TodoList />
		</div>
	);
}
export default App;
