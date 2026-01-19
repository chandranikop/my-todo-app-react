const TodoItem = ({ todo, setTodos }) => {
  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <li className="m-2 flex items-center gap-3">
      <input
        className="w-5 h-5 cursor-pointer"
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
      />
      <span
        className={`bg-green-300 hover:bg-green-500 rounded-md px-2 py-1 w-md truncate inline-block ${todo.completed ? "line-through" : ""}`}
        // style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        title={todo.text}
      >
        {todo.text}
      </span>
      <button
        className="font-light hover:font-bold px-2 text-red-500 w-8 cursor-pointer"
        onClick={deleteTodo}
      >
        &times;
      </button>
    </li>
  );
};

export default TodoItem;
