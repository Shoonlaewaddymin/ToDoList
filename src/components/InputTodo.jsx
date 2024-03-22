import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";


const InputTodo = ({addTodoItem}) => {
  const [title, setTitle ] = useState('');
  const [message,setMessagae]= useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // console.log (title);
    if(title.trim()){ 
      addTodoItem(title);
      setTitle('');
      setMessagae('');
    }else{ 
      setMessagae("Please Add Title");
    }
    
  }
  return( 
  <>
  <form onSubmit={handleSubmit}> 
  <div className="input-group">

    <input type="text" placeholder="Add Todo..." value={title} onChange={(e) => setTitle(e.target.value)} className='form-control'/>
    <button className='btn btn-primary'>Submit</button>
    </div>
  </form>
  <span>{message}</span>
  </>
  )
}

export default InputTodo;