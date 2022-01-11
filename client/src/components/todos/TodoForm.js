import { useState, useEffect } from 'react'

const TodoForm = ({ addTodo, id, title, desc, complete, updateTodo, setEdit }) => {
  const [todo, setTodo] = useState({ title: '', desc: '', complete: false })

  useEffect( () => {
    if (id) {
      setTodo({ id, title, desc, complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTodo(id, todo)
      setEdit(false)
    } else {
      addTodo(todo)
    }
    setTodo({ title: '', desc: '', complete: false })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input 
          name='title'
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          required
        />
        <label>Description:</label>
        <textarea
          name="desc"
          value={todo.desc}
          onChange={(e) => setTodo({ ...todo, desc: e.target.value })}
          required
        ></textarea>
        <label>Completed?</label>
        <input 
          type="checkbox"
          name="complete"
          // value={todo.complete}
          defaultChecked={todo.complete}
          onChange={(e) => setTodo({ ...todo, complete: e.target.checked })}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default TodoForm;