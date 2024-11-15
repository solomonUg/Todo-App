export default function ({ item, todos, setTodos}) {

function handleDelete(item) {
  setTodos(todos.filter((todo)=>todo!==item))  
}
function handleClick (name){
  const newArray = todos.map((todo)=>todo.name===name?{...todo, done: todo.done=!todo.done}:todo)
 setTodos(newArray)

}


const itemDone = item.done? "line-through text-lg  pointer": "text-lg  pointer";
  
  return (
    <div className="w-full flex justify-between p-3 border-b-2 ">
      <div className="text-sm">
        <span className={itemDone} onClick={()=>handleClick(item.name)}>{item.name}</span>
        </div>
      <button onClick={()=>handleDelete(item)}  className="text-white border-none rounded-lg px-4 py-2 bg-red-700">x</button>
    </div> 
  );
}


