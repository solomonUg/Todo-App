export default function ({ item, todos, setTodos}) {

function handleDelete(item) {
  setTodos(todos.filter((todo)=>todo!==item))  
}
function handleClick (name){
  const newArray = todos.map((todo)=>todo.name===name?{...todo, done: todo.done=!todo.done}:todo)
 setTodos(newArray)

}


const itemDone = item.done? "line-through text-lg text-white pointer": "text-lg text-white pointer";
  
  return (
    <div className="w-72 flex justify-between ">
      <div className="text-sm">
        <span className={itemDone} onClick={()=>handleClick(item.name)}>{item.name}</span>
        </div>
      <button onClick={()=>handleDelete(item)}  className="text-white border pr-2 pl-2 pt-0 pb-0 bg-red-700">x</button>
    </div>
    
  );
}
