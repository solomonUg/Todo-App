
export default function Footer ({completed, total}){
return <div className="bg-black w-full text-white fixed bottom-0 flex justify-center py-8 gap-8">
    <h2>Completed Todos: {completed} </h2>
    <h2>Total Todos: {total} </h2>

</div>
}