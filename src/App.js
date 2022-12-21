import React, { useState } from "react";
import './App.css';
import Header from './components/header';
import Form from './components/Form';
import TodosList from './components/TodosList';

function App() {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);
	const [editTodo, setEditTodo] = useState(null);

	return (
		<div className="container">
			<div className="app-wrapper">
				<div>
					<Header />
				</div>
				<div>
					<Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodos={editTodo} setEditTodos={setEditTodo} />
				</div>
				<TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
			</div>
		</div>
	);
}

export default App;
