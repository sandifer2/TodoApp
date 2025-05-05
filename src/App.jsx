import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import './index.css'
import './fanta.css'

function App() {
  let x = 3

  return (
   <>


      <Header/>
      <Tabs/>
      <TodoList/>
      <TodoInput/>
   </>
    
  )
}

export default App
