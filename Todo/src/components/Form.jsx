import { useState } from "react";


export default function({ todos, setTodos}) {
  const [todo, setTodo] = useState({name:"", done: false});

    function handleSubmit(e) {
        e.preventDefault();
        if(todo.name!== ""){
          setTodos([...todos, todo]);
          setTodo({name: "", done:false});
        }
       
      }
    return <form className=" w-[40%] flex gap-1"> 
        <input
          type="text"
          className="border-black-400 	outline-black border py-3 pr-20 pl-2 w-[100%]"  placeholder="Enter your todo... "
          value={todo.name}
          onChange={(e) => setTodo({name:e.target.value, done: false})}
        />
        <button className="flex items-center justify-center bg-black p-3  text-white" onClick={handleSubmit}>
          Add 
        </button>

    </form>
}