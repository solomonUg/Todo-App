import TodoItem from "./TodoItem";

export default function ({ todos, setTodos }) {

  const sortedTodos = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done))

  return (
    <div className="pr-2  w-[40%] mt-2 rounded-lg shadow-xl">
        {sortedTodos.map((item) => (
          <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  );
}
