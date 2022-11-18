import React,{useRef} from "react";
import './style.css';

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent)=>void;
}
const InputField :React.FC<Props> = ({todo,setTodo,handleAdd}:Props)=> {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
        <form className='input' onSubmit={(e)=>{handleAdd(e)
        inputRef.current?.blur()}}>
        <input ref = {inputRef} className='inputbox' type="input" value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder='Enter a task' />   
        <button className='inputbutton' type='submit'>GO</button>
        </form>
        
    </div>
  )
}
export default InputField;