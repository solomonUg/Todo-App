export default function ({ item, todos, setTodos}) {

function handleDelete(item) {
  setTodos(todos.filter((todo)=>todo!==item))  
}
function handleClick (name){
  todos.map((todo)=>todo.name===name?{...todo, done: todo.done=!todo.done}:todo)
 
  console.log(todos);

}

  return (
    <div className="w-72 flex justify-between ">
      <div className="">
        <span  onClick={()=>handleClick(item.name)}>{item.name}</span>
        </div>
      <button onClick={()=>handleDelete(item)}  className="text-white border pr-2 pl-2 pt-0 pb-0 bg-red-700">x</button>
    </div>
    
  );
}
