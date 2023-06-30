// pages/ssg.tsx
import { GetStaticProps } from "next";
import { fetchTodos, Todo } from "../utils/fetchTodos";

interface Props {
  todos: Todo[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const todos = await fetchTodos();
  return {
    props: { todos },
    revalidate: 60,
  };
};

const SSGPage: React.FC<Props> = ({ todos }) => (
  <div>
    {todos.map((todo) => (
      <div key={todo.id}>
        <h2>{todo.title}</h2>
      </div>
    ))}
  </div>
);

export default SSGPage;
