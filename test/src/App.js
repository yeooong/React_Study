import React, {useState} from 'react';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  }

  const addTodoList = (event) => {
    event.preventDefault()

    setTodos([...todos, todo]);
    setTodo('');
  }

  return (
    <>
      <form onSubmit={addTodoList} className='form'>
        <input  value={todo} onChange={onChangeHandler}></input>
        <button >추가하기</button>
      </form>

      <h1 className='title'>Todo List</h1>

      <div className='todo-lists'>
        {
        todos.map((todo) => {
          return (
            <div key={todo} className='todo'>{todo}</div>
          )
        })
        }
      </div>
    </>
  );
}

export default App;
