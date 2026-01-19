import { useState } from "react";

const TodoInput = ({ setTodos }) => {
  const [text, setText] = useState("");

  const hendleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);
    setText("");
  };

  return (
    <form onSubmit={hendleSubmit}>
      <input
        className="border-2 border-fuchsia-400 focus:border-fuchsia-600 outline-none w-sm rounded-md px-2 py-1 mr-4"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tambah Tugas"
      />
      <button
        className="bg-amber-500 p-1 rounded-md ring-1 ring-amber-600 hover:bg-amber-400"
        type="submit"
      >
        Tambah
      </button>
    </form>
  );
};

export default TodoInput;
