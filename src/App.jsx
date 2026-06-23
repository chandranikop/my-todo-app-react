import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import api from "./api/axios.js";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Ambil semua todo dari backend saat komponent pertama kali dimuat
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await api.get("/tasks");
                setTodos(response.data);
            } catch (error) {
                console.error("Failed to retrieve data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTodos();
    }, []);

    if (isLoading) return <p>Memuat data</p>;

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 gap-4">
            <h1 className="text-4xl font-bold p-2">To Do App</h1>
            <TodoInput setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
