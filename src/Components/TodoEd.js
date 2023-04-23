import React,{useState} from 'react'  
import EditIcon from '@mui/icons-material/Edit';  
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TodoList from './Todolist';

function TodoEd({ todos, completeTodo, removeTodo,updateTodo }) {
  const[edit, setEdit] = useState({ id:'null',name: '' });  
  const [showEditInput, setShowEditInput] = useState(false);
  const submitUpdate = (name) => {
    
    updateTodo(edit.id,name,)
    setEdit({
      id:'null',
      name: '' 

    })
setShowEditInput(false)
  }
  
   
    console.log("....",edit.id)
   
  function handleRemoveTodoClick(id) {
    removeTodo(id);
  }
  
  const handleEditTodoClick = (todo) => {
    setEdit({ id: todo.id, name: todo.name });
    setShowEditInput(true)
  };
  return (
    

    <div className="todo-items">
    {showEditInput && <TodoList edit={edit} onSubmit={submitUpdate} />}
      

        {todos.map((todo, index) => (
              
          <ul className='align'>
                       


          <li key={todo.id} id="item">
            
            <div
              className={todo.isComplete ? "todo-row complete" : "todo-row"}
              key={index}
            >
              <div               key={todo.id}
                onClick={() => completeTodo(todo.id)}
                className="container"
                >
                </div>   
{todo.name}
              <DeleteOutlineIcon
                onClick={() => handleRemoveTodoClick(todo.id)}
                className="delete-icon"
              />
              <EditIcon
                onClick={() => handleEditTodoClick(todo)}
                className="edit-icon"
                
              />

   
            </div>

          </li>

          </ul>
          
        ))}
        
          
    </div>
    
  );
}

export default TodoEd;

  