import TodoItem from "./TodoItem";

export default function ({ todos, setTodos }) {
  return (
    <div className="bg-slate-500  pr-2">
        {todos.map((item) => (
          <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  );
}
