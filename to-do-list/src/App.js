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
      return { ...prev, [name]: value, id: todoList.length + 1 }
    })
  }

  const addTodoList = (event) => {
    event.preventDefault();

    setTodoList((prev) => { return [...prev, todo] });
    setTodo(newTodoList);
  };


  const deleteTodoList = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  const isDoneChangeHandler = (id) => {

    console.log('todoList', todoList)

    const filteredTodo = todoList.filter((todo) => todo.id === id);

    console.log('필터링',filteredTodo, typeof filteredTodo);
    console.log('필터링1',filteredTodo[0].isDone);

    filteredTodo[0].isDone = !filteredTodo[0].isDone

    console.log('필터링2',filteredTodo[0].isDone);
    
    setTodoList((prev) => {return {...prev, filteredTodo}});


    console.log('변경된todoList', todoList);
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

      <section >
        <article className='list-board'>
          <h2>Working...❤️‍🔥</h2>
          {
            todoList.filter(todoList => todoList.isDone===false).map((todoList, id) => {
              const { title, content} = todoList
              console.log(todoList.id);
              return (
                (<div key={`todoList_box${id}`} className='list-box'>
                  <h2 className='todo-title'>
                    {title}
                  </h2>

                  <h5 className='todo-content'>
                    {content}
                  </h5>

                  <div className='list-buttons'>
                    <button onClick={() => deleteTodoList(todoList.id)}
                      className='todo-delete-button'>삭제하기</button>
                    <button
                      className='todo-done-button'
                      onClick={() => isDoneChangeHandler(todoList.id)}
                    >
                      '완료'
                    </button>
                  </div>

                </div>)
              )
            })
          }
        </article>

        <article className='list-board'>
          <h2>Done...💖</h2>
          {
            todoList.filter(todoList=> todoList.isDone===true).map((todoList, id) => {
              const { title, content} = todoList
              console.log(todoList.id);
              return (
                (<div key={`todoList_box${id}`} className='list-box'>
                  <h2 className='todo-title'>
                    {title}
                  </h2>

                  <h5 className='todo-content'>
                    {content}
                  </h5>
                  <div className='list-buttons'>
                    <button onClick={() => deleteTodoList(todoList.id)}
                      className='todo-delete-button'>삭제하기</button>
                    <button
                      className='todo-done-button'
                      onClick={() => isDoneChangeHandler(todoList.id)}
                    >
                      '취소'
                    </button>
                  </div>
                </div>)
              )
            })
          }

        </article>

      </section>

    </div>
  );
}

export default App;
