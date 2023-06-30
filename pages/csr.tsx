// pages/csr.tsx
import { useEffect, useState } from "react";
import { fetchTodos, Todo } from "../utils/fetchTodos";

const CSRPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default CSRPage;
