import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import './index.css'
import './fanta.css'
import { useState } from "react"

  function App() {
    // const todos = [
    // { input: 'Hello! Add your first todo!', complete: true },
    // { input: 'Get the groceries!', complete: false },
    // { input: 'Learn how to web design', complete: false },
    // { input: 'Say hi to gran gran', complete: true },
    // ]


  const [todos,setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('All')

  function handleAddTodo(newTodo) // add
  { 
    const newTodoList = [...todos, 
      {input: newTodo, complete : false}]
      setTodos(newTodoList)
  }

  function handleCompleteToDo(index) //update/edit
  {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)

  }

  function handleDeleteTodo(index) //delete
  {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index 

    })
    setTodos(newTodoList)

  }


    return (
    <>


        <Header todos = {todos}/>
        <Tabs selectedTab={selectedTab} 
        setSelectedTab = {setSelectedTab}
        todos = {todos}/>
        <TodoList handleCompleteToDo={handleCompleteToDo} handleDeleteTodo = {handleDeleteTodo} selectedTab = {selectedTab} todos = {todos}/>
        <TodoInput handleAddTodo={handleAddTodo} />
    </>
      
    )
  }

export default App
