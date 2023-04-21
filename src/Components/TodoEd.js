import React,{useState} from 'react'  
import EditIcon from '@mui/icons-material/Edit';  
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function TodoEd({todos,completeTodo,removeTodo}) {  
    const[edit, setEdit] = useState({ id:'null',name: '' });  
    
  return todos.map((todo,index)=>(
    <div
    className={todo.isComplete?'todo-row complete':'todo-row'} key={index}
    >
      <div
      key={todo.id} onClick={()=>completeTodo(todo.id)}
      >
        {todo.name}
      </div>
      <div className='icon'>
      <DeleteOutlineIcon onclick={()=>removeTodo(todo.id)} className='delete-icon'/> 
      <EditIcon onclick={()=>setEdit({id:todo.id,value:todo.name})} className='edit-icon' />
      </div>

    </div>
  )); 
     
}  
  
export default TodoEd  
