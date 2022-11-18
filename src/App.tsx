import React,{useState} from 'react';
import Input from "./Component/input";
import './App.css';
import {Todo} from "./Component/todo"
import TodoList from "./Component/todolist"
const App: React.FC= ()=> {
  const[todo , setTodo] = useState<string>("");
  const[todos , setTodos] = useState<Todo[]>([]);

  
  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id: Date.now(), todo, done:false}]);
      setTodo("");
    }

    
  };
  
  return (
    <div className="App">
      <span className='heading'>To-Do list</span>
      <Input todo={todo} setTodo ={setTodo} handleAdd = {handleAdd}/>
      
      <TodoList todos={todos} setTodos ={setTodos}/>
    </div>
  );
}

export default App;
