import React from 'react';
import {useState} from 'react';
import '../Components/Todo.css';
// import EditIcon from '@mui/icons-material/Edit';  
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'; 
function TodoList(props) {
    const  [input,setInput] = useState('');
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
     
      </form> 
      /* <div className='container'> */
      
      // * {props.todos.map((todo)=>{
    //     return(
    //       <li id="item" 
    //     className={todo.isComplete?'todo-row complete':'todo-row'}
    //     key={todo.id} onClick={()=>completeTodo(todo.id)}>
    //  <div className='row'>
    //  {todo.name}  
    //   <div className='delete-icon'>
    //     <DeleteOutlineIcon onclick={()=>removeTodo(todo.id)} /> 
    //     </div>
    // <div className='edit-icon'>
    //  <EditIcon onclick={()=>setEdit({id:todo.id,value:todo.name})}  />  
    //  </div>
    
    //     </div>
    //     </li> 
    //     );
        // })} */}
      
    // </div>
    
  )
      }




export default TodoList
