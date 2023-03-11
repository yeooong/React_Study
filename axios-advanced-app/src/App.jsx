// import axios from "axios";
import api from "./axios/api"
import React, { useEffect, useState } from "react";


function App() {


  const [todos, setTodos] = useState(null);
  const [todo, setTodo] = useState({
    title: "",
    // json방식의 data-base는 id 속성은 자동으로 입력되므로,
    // 지금은 title만 가지면 된다!
  });
  const [targetId, setTargetId] = useState("");
  const [editText, setEditText] = useState("");


  // 조회 함수
  // 비동기 함수 : 서버(json-server)dp todos를 요청하는 함수
  const fetchTodos = async () => {
    // async 안에서 await을 만나면, await이 있는 줄은 해당 줄이 끝날 때까지 기다린다!
    // 여기서는 response 줄이 url로부터 데이터를 받아올 때까지 기다렸다가 실행됨.
    // await을 쓰지않았을 경우에는 console.log에서 response가 Promise {<pending>}이라고 찍힘.
    // const response = await axios.get('http://localhost:3001/todos');
    // console.log("response", response);

    const { data } = await api.get(
      "/todos"
    );
    console.log("data", data);
    setTodos(data);
  }

  // 추가 함수
  const onSubmitHandler = async (todo) => {
    await api.post("/todos", todo);
    setTodos([...todos, todo]);
    setTodo({
      title: "",
    });

    // axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, todo);
    // 이렇게만 했을 경우 쾌적하지 않다 = 컴포넌트가 렌더링이 되지 않아서 새로고침 해야한다.
    // 컴포넌트 렌더링이 안 되는 이유 = state값이 변경되지 않기 때문.
    // 컴포넌트가 렌더링이 되는 조건 3가지
    // #1.state 변경  #2.props 변경  #3.부모 컴포넌트 변경

    // setTodos([...todos, todo]);
    // setTodos하면 DB에는 id가 자동으로 입력이 되지만, state에는 id값을 알 수 없어서 자동으로 갱신되지 않아서,
    // Warning: Each child in a list should have a unique "key" prop. 라는 경고가 뜨고
    // UI에도 새로고침 전에는 id값이 반영되지 않는다.
    // 그래서 다시 Todos를 읽어오는 방식이 더 적합하다.(fetchTodos)

    // fetchTodos();
    // 그런데 이렇게 했더니 첫번째 추가는 잘 반영되는데, 두번째 추가하니까 반영이 안됨. 새로고침 해야됨.
  };

  // 삭제 함수
  const onClickDeleteButtonHandler = async (id) => {
    await api.delete(`/todos/${id}`);
    // 이렇게하면 마찬가지로 실시작으로 반영되지 않음.
    setTodos(todos.filter((todo) => {
      return todo.id !== id;
    })
    );
  };

  // 수정함수
  const onClickUpdateButtonHandler = async (targetId, editText) => {
    // const onClickUpdateButtonHandler = async () => {
    // id, editText값이 필요하지만 인자로 넘겨받지 않아도 된다.
    // 왜냐하면 state로 따로 저장되어있기 때문에 활용하면 된다!
    await api.patch(`/todos/${targetId}`, {
      title: editText,
    });

    setTargetId("");
    setEditText("");

    setTodos(
      todos.map((item) => {
        if (item.id == targetId) {
          // item.id와 targetId의 type이 달라서 ===로는 안 됨!
          return { ...item, title: editText };
        } else {
          return item;
        }
      }))

  }

  useEffect(() => {
    // db로부터 값을 가져올 것이다.
    fetchTodos()
  }, []);


  return (
    < >
      <div>
        {/* 수정 영역 */}
        <input
          type="text"
          placeholder="수정 대상 ID"
          value={targetId}
          onChange={(e) => {
            setTargetId(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="수정할 내용"
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        />
        <button
          type="button"
          // onClick={onClickUpdateButtonHandler}
          onClick={() => onClickUpdateButtonHandler(targetId, editText)}
        >
          수정하기
        </button>
      </div>
      <br />
      {/* INPUT 영역 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          // 버튼 클릭시, input에 들어있는 값(state)를 이용하여 DB에 저장(post 요청)
          onSubmitHandler(todo);
        }}
      >
        <input
          type="text"
          value={todo.title}
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              title: value,
            });
          }}
        />
        <button type="submit" >추가하기</button>
      </form>
      <div>
        {todos?.map((todo, index) => {
          return (
            <div key={index}>
              {todo.id} : {todo.title}
              &nbsp;
              <button
                type="button"
                // onClick에 함수 넣을 때, 인자를 보내줘야하는데 바로 함수만 넣으면 예.함수(인자) 최초 렌더링시에 바로 실행되어버림.
                // 그래서 항상 함수로 한 번 감싸줘야 예.()=>함수(인자), 원하는대로 onClick시에 함수가 실행되게 할 수 있다.
                onClick={() => {
                  onClickDeleteButtonHandler(todo.id)
                }}
              >
                삭제
              </button>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
