// utils/fetchTodos.ts
export type Todo = {
  id: string;
  title: string;
};

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch("http://localhost:8080/api/todos");
  const data = await res.json();
  return data;
}
