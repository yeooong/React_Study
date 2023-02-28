import React, { useState } from 'react';
import './App.css';


function App() {
  return (
    <div className='layout'>

      <div className='title-square'>
        <div>My Todo List</div>
        <div>React</div>
      </div>

      <form className='input-square'>
        <div className='input-box'>
          <label className='input-label'>제목</label>
          <input type='text' className='input'></input>
          <label className='input-label'>내용</label>
          <input type='text' className='input'></input>
        </div>
        <button className='input-button'>추가하기</button>
      </form>

      <div className='list-square'>
        <h2>Working..❤️‍🔥</h2>

        <div className='list-box'>
          <div className='todo-box'>
            <h2 className='todo-title'>리액트 공부하기</h2>
            <div className='todo-content'>리액트 기초를 공부해봅시다.</div>
          </div>
          <div className='list-buttons'>
            <button className='todo-delete-button'>삭제하기</button>
            <button className='todo-done-button'>완료</button>
          </div>
        </div>
        <h2>Done..!💖</h2>
      </div>

    </div>
  );
}

export default App;
