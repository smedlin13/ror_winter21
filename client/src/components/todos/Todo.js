import { useState } from 'react';
import TodoForm from './TodoForm';

const Todo = ({ id, title, complete, desc, updateTodo, deleteTodo }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <div>
        <h1 style={complete ? styles.complete : {} }>Title: {title}</h1>
        <p>
          Description: {desc}
        </p>
        {
          editing ?
          <>
            <TodoForm 
              id={id}
              title={title}
              desc={desc}
              complete={complete}
              updateTodo={updateTodo}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </>
  )
}

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey',
  }
}

export default Todo;