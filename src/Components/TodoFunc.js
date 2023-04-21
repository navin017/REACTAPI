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
      console.log("****************", todos)
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos, isTodo]);
    
   

    // const [show, setShow] = useState(() => {
      
    //   const saved = localStorage.getItem(show);
    //   const initialValue = JSON.parse(saved);
    //   return initialValue || "";
    // });
   const removeTodo=id=>{
    console.log("RMOVE")
    const removeThat =[...todos].filter(todo=>todo.id !==id)
    setTodos(removeThat);
   }

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
    <>
    <div>
      {isTodo && <BasicAlerts/>}
      <TodoList onSubmit={addTodo} todos={todos} onClick={()=>{setIsTodo(true)}}/>
      <TodoEd todos={todos} completeTodo = {completeTodo} removeTodo={removeTodo}/>
      
    </div>
    
    
    </>
    
  )
}

export default TodoFunc;



// &&, ?:, ??