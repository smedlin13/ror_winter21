import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect( () => {
    // grab all todos from db 
    axios.get('/api/todos')
      .then(res => {
        // set the all todos from the db to the state 
        setTodos(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addTodo = (todo) => {
    // add the todo into the db
    //  { todo: {title: '', desc: '', complete: true }}
    // not permitted
    //  { newTodo: {title: '', desc: '', complete: true }}
    // axios.post('/api/todos', { newTodo })
    axios.post('/api/todos', { todo })
      .then( res => {
        // add the todo into the state 
        setTodos([...todos, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateTodo = (id, todo) => {
    // update the todo in the db
    axios.put(`/api/todos/${id}`, { todo })
      .then(res => {
        // update the todo in the state
        const newUpdatedTodos = todos.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t 
        })
        setTodos(newUpdatedTodos)
      })
      .catch( err => console.log(err))
  }

  const deleteTodo = (id) => {
    // delete the todo in the db
    axios.delete(`/api/todos/${id}`)
      .then( res => {
        // delete in the state
        setTodos( todos.filter( t => t.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>My Todo List </h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        updateTodo={updateTodo} 
        deleteTodo={deleteTodo}
        todos={todos} 
      />
    </>
  )
}


export default App;
















