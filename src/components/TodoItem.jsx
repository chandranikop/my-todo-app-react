import api from "../api/axios";

const TodoItem = ({ todo, setTodos }) => {
    const toggleTodo = async () => {
        try {
            const response = await api.put(`/tasks/${todo.id}`, {
                is_completed: !todo.is_completed,
            });

            setTodos((prev) => prev.map((t) => (t.id === todo.id ? response.data : t)));
        } catch (error) {
            console.error("Failed to update assignment:", error);
        }
    };

    const deleteTodo = async () => {
        try {
            await api.delete(`/tasks/${todo.id}`);
            setTodos((prev) => prev.filter((t) => t.id !== todo.id));
        } catch (error) {
            console.error("Failed to delete task:", error);
        }
    };

    return (
        <li className="m-2 flex items-center gap-3">
            <input
                className="w-5 h-5 cursor-pointer"
                type="checkbox"
                checked={todo.is_completed}
                onChange={toggleTodo}
            />
            <span
                className={`bg-green-300 hover:bg-green-500 rounded-md px-2 py-1 w-md truncate inline-block ${todo.is_completed ? "line-through" : ""}`}
                title={todo.title}
            >
                {todo.title}
            </span>
            <button className="font-light hover:font-bold px-2 text-red-500 w-8 cursor-pointer" onClick={deleteTodo}>
                &times;
            </button>
        </li>
    );
};

export default TodoItem;
