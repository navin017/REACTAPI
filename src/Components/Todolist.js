import React from 'react';
import {useState} from 'react';
import '../Components/Todo.css';
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
    <body>
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
        <button type="submit" className="add-button">ADD</button> 
        </div>
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

export default TodoList
