import React, { useEffect } from 'react';
import {useState,useRef} from 'react';
import '../Components/Todo.css';
// import EditIcon from '@mui/icons-material/Edit';  
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'; 
function TodoList(props) {
    const  [input,setInput] = useState(props.edit?props.edit.value:'');
    const inputRef = useRef(null)
    useEffect(()=>{
      inputRef.current.focus()
    })
    const handleChange=(e)=>{
      setInput(e.target.value)
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSubmit({
          id: Date.now(),
          name: input,
        });
        setInput('');
    };
   
   
    
  return (
   
    
      <form className="todo-form" onSubmit={handleSubmit}> 
     {props.edit ?(
      <>
      <input 
        type="text" 
        className ="todo-input" 
        placeholder="Update your Task..." 
        autoComplete="off"
        value = {input}
        name = 'text'
        onChange={handleChange}
        ref={inputRef}
        />   
        <button type="submit" className="add-button" >Update</button>
        </>
        ):
        (
          <> <input 
          type="text" 
          className ="todo-input" 
          placeholder="Add a Todo..." 
          autoComplete="off"
          value = {input}
          name = 'text'
          onChange={handleChange}
          ref={inputRef}
          />   
          <button type="submit" className="add-button" >ADD</button>
          </>)
          
        }
         
        
     
      </form> 
     
    
  )
      }




export default TodoList
