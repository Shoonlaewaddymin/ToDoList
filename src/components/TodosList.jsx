import React from 'react'
import TodoItem from './TodoItem';

const TodosList = ({todos,setTodos, deleteTodo}) => {
  return (
    <ul>
   {todos.map((todo)=>(
   <TodoItem key={todo.id} todo={todo} setTodos={setTodos} deleteTodo={deleteTodo} />
   ))}
    </ul>
  )
}

export default TodosList;