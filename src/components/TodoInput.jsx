import { input } from "framer-motion/client"
import { useState } from "react"


export function TodoInput(props){
    const {handleAddTodo} = props
    const[inputValue, setInputValue] = useState('')
    
    return(
        <div className="input-container">
            <input value={inputValue} onChange={ 
                (e)=> {setInputValue(e.target.value)

                }} placeholder="Add task"/>
                <button onClick ={()=>{
                    if(!inputValue) {return} //gaurd clause
                    handleAddTodo(inputValue)
                    setInputValue('')
                    
                }}>
                <i className="fa-solid fa-plus"></i>
                </button>
        </div>
    )
}