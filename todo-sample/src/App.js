import { useState } from 'react';
import './App.css';
import TodoCard from './components/TodoCard';
import TodoForm from './components/TodoForm';


function App() {
  // 각 todo-card안에 데이터가 들어가야 함. 
  // 데이터의 형태는 유니크한 정보를 담은 {content:"",id:0}과 같은 객체 형태가 좋을 듯.
  // 그러면 todo-card가 여러개니까 객체를 여러개 저장할 state가 필요
  // 배열이니까 이름은 array 혹은 list가 좋아
  const [todoList, setTodoList] = useState([
    // 어떻게 생겼는지 미리 이야기 = 초기값을 넣어주면 좋아
    {
      content: "리액트 재밌음",
      id: 0,
    },
  ]);
  

  //todoList가 정말 초기값을 들고 있는지 확인
  // console.log(todoList);

  return (
    //div의 display 속성 : block(화면의 한 라인을 다 먹음)
    // vs inline(text만큼만 영역을 가짐)
    // HTML과 CSS는 계속 공부해야해!
    <div className='todo-wrapper'>
      <TodoForm setTodoList={setTodoList} todoList={todoList} />
      <div>
        <h1>Todo List</h1>
      </div>

      <div className='todo-wrapper_cards'>
        {/* div들도 하나의 배열로 만들기 */}
        {
          todoList.map((value, index) => {
            // console.log(value) / {content: "리액트 재밌음", id:0}
            return <TodoCard id={value.id} content={value.content} />;
          })
        }
      </div>
    </div>
  );
}

export default App;
