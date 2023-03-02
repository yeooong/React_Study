import React, { useState } from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);

  const newTodoList = {
    id: 0,
    title: "",
    content: "",
    isDone: false
  }

  const [todo, setTodo] = useState(newTodoList);

  const onChangeHandler = (event) => {
    const { name, value } = event.target

    setTodo((prev) => {
      return {...prev, [name]: value, id: todoList.length +1}
    })
  }

  const addTodoList = (event) => {
    event.preventDefault();

    setTodoList((prev) => {return [...prev, todo]});
    setTodo(todo);
  };


  const deleteTodoList = (id) => {
    setTodoList(todoList.filter( (todo) => todo.id !== id));
  }

  
  
  return (
    <div className='layout'>
      <header className='title-board'>
        <div>My Todo List</div>
        <div>React</div>
      </header>

      <form onSubmit={addTodoList}>
        <label>제목</label>
        <input name='title' onChange={onChangeHandler} />
        <label>내용</label>
        <input name='content' onChange={onChangeHandler} />

        <button>추가</button>
      </form>

      <div className='list-board'>
        <h2>Working..❤️‍🔥</h2>

        {
          todoList.map((todoList, id) => {
            const { title, content, isDone } = todoList
            console.log(todoList.id);
            return (

              <div key={`todoList_box${id}`} className='list-box'>
                <div className='todo-box'>
                  <h2 className='todo-title'>
                    {title}
                  </h2>
                </div>

                <div className='todo-content'>
                  {content}
                </div>

                {
                  ({ isDone })
                    ? <div className='list-buttons'>
                      <button onClick={() => deleteTodoList(todoList.id)}
                        className='todo-delete-button'>삭제하기</button>
                      <button className='todo-done-button'>취소</button>
                    </div>
                    : <div className='list-buttons'>
                      <button onClick={() => deleteTodoList(todoList.id)}
                        className='todo-delete-button'>삭제하기</button>
                      <button className='todo-done-button'>완료</button>
                    </div>
                }

              </div>
            )
          })
        }

        <h2>Done..!💖</h2>

      </div>

    </div>
  );
}

export default App;
