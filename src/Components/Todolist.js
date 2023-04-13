import React from 'react';
import {useState} from 'react';
import '../Components/Todo.css'
function Todolist() {
    const  [input,setInput] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
    };
  return (
    <body>
    <div className='cover'>
      <form class="todo-form" onSubmit={handleSubmit}> 
        <input 
        type="text" 
        className ="todo-input" 
        placeholder="Add a Todo..." 
        autocomplete="off"
        value = {input}
        />   
        <button type="submit" className="add-button">ADD</button> 
      </form> 
      <div className='container'>
      <ul class="todo-items"> 
        <li class="item"> 
        </li> 
      </ul> 
    </div>
    </div>
    </body>
  )
}

export default Todolist
