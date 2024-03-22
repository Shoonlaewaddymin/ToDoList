import React from 'react'

const TodoItem = ({todo, setTodos, deleteTodo}) => {

  const completedStyle = { 
    textDecoration : "line-through"
  }

  const handleChange = (id) => { 
// console.log("Changed",id);
setTodos( (prevState) => prevState.map(todo => { 
  if(todo.id === id){ 
    return{ 
      id:todo.id,
      title:todo.title,
      complete:!todo.complete,
    };
  }return todo;
}))
  };
  return (
   <li className='my-3 list-unstyled text-center'>
    <input type='checkbox' checked={todo.complete} onChange={()=> handleChange(todo.id)}/>
    <span style={todo.complete ? completedStyle : null }> {todo.title} </span>
    <button className="btn btn-danger ms-3"onClick={()=>deleteTodo(todo.id)}>Delete</button>
   </li>
  )
}

export default TodoItem;