import Info from "./Info";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

export default function () {
    const [todos, setTodos] = useState([]);
    const completed = todos.filter((todo)=>todo.done).length
    const total = todos.length


  return (
    <div className="flex flex-col items-center mt-12 bg-slate-300">
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      <Info completed={completed} total = {total} />
    </div>
  );
}
