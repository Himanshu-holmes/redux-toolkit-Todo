import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [todoId, setTodoId] = useState('');
  const [input, setInput] = useState('');
 
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo isEditing={isEditing} setIsEditing={setIsEditing} todoId={todoId} setTodoId={setTodoId} input={input} setInput={setInput}/>
      <Todos isEditing={isEditing} setIsEditing={setIsEditing} todoId={todoId}  setTodoId={setTodoId} input={input} setInput={setInput} />
    </>
  )
}

export default App
