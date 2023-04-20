import React from 'react';
import {useState} from 'react';
import '../Components/Todo.css';
import EditIcon from '@mui/icons-material/Edit';  
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'; 
import TodoFunc from './TodoFunc'; 

function TodoList(props) {
    const  [input,setInput] = useState('');
    const[edit, setEdit] = useState({ id:'null',name: '' });
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
   
    <div>
    <div className='cover'>
      <form className="todo-form" onSubmit={handleSubmit}> 
      <div className='align'>
        <input 
        type="text" 
        className ="todo-input" 
        placeholder="Add a Todo..." 
        autocomplete="off"
        value = {input}
        name = 'text'
        onChange={handleChange}
        />   
        <button type="submit" className="add-button" onClick={()=>{props.onClick()}} >ADD</button> 
     
        </div>
      </form> 
      <div className='container'>
      
      {props.todos.map((todo)=>{
        return(
          <li id="item" 
        className={todo.isComplete?'todo-row complete':'todo-row'}
        key={todo.id} onClick={()=>props.completeTodo(todo.id)}>
     <div className='row'>
     {todo.name}  
    
     <EditIcon onclick={()=>setEdit({id:todo.id,value:todo.name})} className='edit-icon' />  
        <DeleteOutlineIcon onclick={()=>props.removeTodo(todo.id)} className='delete-icon'/> 
        
        </div>
        </li> 
        );
        })}
      
    </div>
    </div>
    </div>
    
  )
      }




export default TodoList
