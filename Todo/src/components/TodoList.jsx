import TodoItem from "./TodoItem";

export default function ({ todos, setTodos }) {

  const sortedTodos = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done))

  return (
    <div className="bg-slate-500  pr-2">
        {sortedTodos.map((item) => (
          <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  );
}
