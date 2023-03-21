import React from 'react'

import Todos from '../pages/Todo/Todos';
import DisplayTodos from '../pages/Todo/DisplayTodos';

const Todo = () => {
  return (
    <>
    <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </>
  )
}

export default Todo