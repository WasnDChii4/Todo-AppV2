import React, { useState } from "react";

export default function Todo()  {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Learning Todo App V2', time: '08:00 AM', date: '', completed: false}
  ])
  const [newTodo, setNewTodo] = useState('')

  // Function for add todo
  const addTodo = () => {
    if(newTodo.trim() == '')
    return;
    const currentDate = new Date();
    const timeString = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    const dateString = currentDate.toLocaleDateString();

    setTodos ([
      {
        text: newTodo,
        id: Date.now(),
        time: `${timeString}, ${dateString}`,
        completed: false
      },
      ...todos
    ])
    setNewTodo('')
  }

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // Toggle Complete
  const completeTodo = (id) => {
    setTodos(todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo));
  }

  return (
    <div className="">

    </div>
  )
}