// pages/ssr.tsx
import { GetServerSideProps } from "next";
import { fetchTodos, Todo } from "../utils/fetchTodos";

interface Props {
  todos: Todo[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const todos = await fetchTodos();
  return {
    props: { todos },
  };
};

const SSRPage: React.FC<Props> = ({ todos }) => (
  <div>
    {todos.map((todo) => (
      <div key={todo.id}>
        <h2>{todo.title}</h2>
      </div>
    ))}
  </div>
);

export default SSRPage;
