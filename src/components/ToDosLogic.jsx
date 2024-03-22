import React, { useState } from 'react'
import InputTodo from './InputTodo';
import TodosList  from './TodosList';
import { v4 as uuidv4 } from "uuid";
const ToDosLogic = () => {

  const deleteTodo = id => { 
    console.log("Deleted",id);
  };
 let [todos, setTodos] = useState([{ 

    id:uuidv4(),
    title:"Todo1",
    complete:true,
  },{ 
    id:uuidv4(),
    title:"Todo2",
    complete:false,
  },{ 
    id:uuidv4(),
    title:"Todo3",
    complete:false,
  },
]);

const addTodoItem = (title) => { 
  const newTodoItem ={ 
    id:4,
    title:title,
    complete:false,
  } 
  setTodos([...todos,newTodoItem]);

};

  return(

    <>
    <InputTodo addTodoItem={addTodoItem}/>
    <TodosList  todos={todos} setTodos = {setTodos} deleteTodo = { deleteTodo} />

    
       
</>
    
  );

};

export default ToDosLogic;