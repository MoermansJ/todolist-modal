import "./Modal.css"
import { useRef } from "react";

function Modal({ todo, setModal, setId, todos, setEditTodo }) {
	const inputRef = useRef();

	const closeModal = () => {
		setId(todo.id);
		setModal(false);
	}

	const handleSave = () => {
		const findTodo = todos.find((todo) => todo.id);
		findTodo.title = inputRef.current.value;
		closeModal();
	}

	return (
		<div className="modal" id={`modal-${todo.id}`}>
			<div className="modal-interface">
				<button className="modal-button-close" onClick={closeModal}>X</button>
				<div className="modal-content">
					<div>Edit todo</div>
					<input defaultValue={todo.title} ref={inputRef} />
					<button className="modal-button-save" onClick={handleSave}>save</button>
				</div>
			</div>
		</div >
	)
}

export default Modal