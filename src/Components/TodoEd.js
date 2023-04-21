import React,{useState} from 'react'  
import EditIcon from '@mui/icons-material/Edit';  
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TodoFunc from './TodoFunc';

function TodoEd({todos,completeTodo,...props}) { 
    const[edit, setEdit] = useState({ id:'null',name: '' });  
  const deleteTodoFunc =(id)=>{
    console.log("---REMOVE TODO----")
    props.removeTodo(id)

  }
  return todos.map((todo,index)=>(
    
   <div className='todo-items'>
    <ul >
    <li id='item'>
    <div
    className={todo.isComplete?'todo-row complete':'todo-row'} key={index}
    >
      
      <div
      key={todo.id} onClick={()=>completeTodo(todo.id)} className='container'
      >
        {todo.name}
     
      
      <DeleteOutlineIcon onClick={()=>{deleteTodoFunc(todo.id)}} className='delete-icon'/> 
      <EditIcon onClick={()=>setEdit({id:todo.id,value:todo.name})} className='edit-icon' />
      </div>
      
    </div>
    </li>
    </ul>
    </div>
   
  )); 
     
}  
  
export default TodoEd  
