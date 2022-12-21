import { useState, useEffect } from "react";
import Modal from "./Modal/Modal"

const TodosList = ({ todos, setTodos, setEditTodo }) => {
	const handleDelete = ({ id }) => { setTodos(todos.filter((todo) => todo.id !== id)); }
	const handleComplete = (todo) => {
		setTodos(todos.map((item) => {
			if (item.id === todo.id) {
				return { ...item, completed: !item.completed };
			} return item;
		}));
	};

	const handleEdit = ({ id }) => {

		setModal(true)
		setId(id)
	}

	//MODAL HANDLER vvv
	const [modal, setModal] = useState(false);
	const [id, setId] = useState();

	useEffect(() => {
		toggleModal();
	}, [modal])

	const toggleModal = () => {
		const currentModal = document.getElementById(`modal-${id}`);
		if (currentModal) {
			if (modal) {
				currentModal.style.visibility = "visible";
			} else {
				currentModal.style.visibility = "";
			}
		}
	}
	//MODAL HANDLER ^^^

	return (
		<div>
			{todos.map((todo) => (
				<li className='list-item' key={todo.id}>
					<input
						type="text"
						value={todo.title}
						className="list"
						onChange={(event) => event.preventDefault()}
					/>

					<div className="task-button-wrapper" id={todo.id}>
						<button className="button-complete task-button"
							onClick={() => handleComplete(todo)}
						>
							<i className="fa fa-check-circle">
							</i>
						</button>
						<button className="button-edit task-button"
							onClick={() => handleEdit(todo)}>
							<i className="fa fa-edit">
							</i>
						</button>
						<button className="button-delete task-button">
							<i className="fa fa-trash"
								onClick={() => handleDelete(todo)}>
							</i>
						</button>
						<Modal todo={todo} setModal={setModal} setId={setId} setEditTodo={setEditTodo} handleEdit={handleEdit} todos={todos} />
					</div>
				</li>
			))}

		</div>
	)
}

export default TodosList