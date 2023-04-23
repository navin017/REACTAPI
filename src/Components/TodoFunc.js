import {useState,useEffect} from 'react';
import React from 'react';
import TodoList from './Todolist';
import BasicAlerts from './alert';
import TodoEd from './TodoEd';


function TodoFunc() {
    const[todos, setTodos] = useState([]);
    const [isTodo, setIsTodo] = useState(false)
   const addTodo=todo=>{
        if(!todo.name || /^\s*$/.test(todo.name)){
          return;
        }
        
        
        const newTodos = [todo,...todos];
        setTodos(newTodos)  
    };
    useEffect(() => {
     
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos, isTodo])
    
      const updateTodo =  (todoId,newValue)=>{
        if(!newValue.name || /^\s*$/.test(newValue.name)){
          return;
        }   
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };

    const removeTodo = (id) => {
      const removeArr = todos.filter((item) => item.id !== id);
      setTodos(removeArr);
    };

   


  const completeTodo = id =>{
    
    let updatedTodos = todos.map(todo=>{
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    
    setTodos(updatedTodos);

   
    
  };
  
  return (
    
    <div>
     
      <TodoList onSubmit={addTodo} todos={todos} onClick={()=>{setIsTodo(true)}}/>
      <TodoEd todos={todos} completeTodo = {completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoFunc;



// &&, ?:, ??