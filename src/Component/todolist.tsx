import React from 'react'
import{Todo} from "./todo";
interface Props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const todolist:React.FC<Props>=({todos,setTodos}:Props)=> {
  return (
    <div>{}</div>
  )
}

export default todolist