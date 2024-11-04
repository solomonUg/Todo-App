
import Footer from "./Footer";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

export default function () {
    const [todos, setTodos] = useState([]);
    const completed = todos.filter((todo)=>todo.done).length
    const total = todos.length


  return (
    <div className="flex justify-center mt-32 flex-col items-center w-100% ">
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      <Footer completed={completed} total = {total} />
    </div>
  );
}
