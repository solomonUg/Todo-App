
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

export default function () {
    const [todos, setTodos] = useState([]);

  return (
    <div className="flex justify-center mt-32 flex-col items-center w-100% bg-blue-300 ">
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
