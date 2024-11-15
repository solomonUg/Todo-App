
export default function Info ({completed, total}){
return <div className="bg-gray-400 w-[40%] text-black font-medium  bottom-0 flex justify-center py-8 gap-8">
    <h2>Completed Todos: {completed} </h2>
    <h2>Total Todos: {total} </h2>
</div>
}