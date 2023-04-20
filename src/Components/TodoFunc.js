import {useState,useEffect} from 'react';
import React from 'react';
import TodoList from './Todolist';
import ResponsiveDial from './mui'

function TodoFunc() {
    const[todos, setTodos] = useState([]);
   const addTodo=todo=>{
        if(!todo.name || /^\s*$/.test(todo.name)){
          return;
        }
        const newTodos = [todo,...todos];
        setTodos(newTodos)  
    };

    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    
  return (
    <div>
      <TodoList onSubmit={addTodo}/>
     
    </div>
  )
}

export default TodoFunc;
