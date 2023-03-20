import React from 'react'

import AddTodo from './AddTodo';
import ListTodos from './ListTodos';

const Todo = () => {
  return (
    <div>
      <h2>Todo App</h2>
      <AddTodo />
      <ListTodos />
    </div>
  )
}

export default Todo;
