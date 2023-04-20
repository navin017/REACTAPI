import React,{useState} from 'react';
import TodoList from './Todolist';


function TodoFunc() {
    const[todos, setTodos] = useState([]);
   const addTodo=todo=>{
        if(!todo.name || /^\s*$/.test(todo.name)){
          return;
        }
        const newTodos = [todo,...todos];
        setTodos(newTodos)
    };
    
    
    
  return (
    <div>
      <TodoList onSubmit={addTodo}/>
     
    </div>
  )
}

export default TodoFunc;
