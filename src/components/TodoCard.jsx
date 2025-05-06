export function TodoCard(props)
{
    const{todo, handleDeleteTodo, todoIndex, handleCompleteToDo} = props
    
    return(
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className ="todo-buttons">
                
                <button onClick ={()=> {
                    handleCompleteToDo(todoIndex)
             
                }}
                    disabled ={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick={()=> {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )

}