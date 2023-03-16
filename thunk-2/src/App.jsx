import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "./redux/modules/todosSlice";

function App() {
  //thunk호출하기위해 dispatch 써주기
  const dispatch = useDispatch();

  // useSelector를 통해서 Store안에 있는 state에 접근이 가능하지?
  // 그 안에 있는 isLoading, error, todos를 구조분해할당으로 빼오는 것!
  const {isLoading, error, todos} = useSelector(state => {
    return state.todos;
  })
  
  // 컴포넌트가 mount될 때만 호출 할 것이다. 뭐를? __getTodos를
  // getTodos를 사용하기 위해서는 딱히 payload가 필요 없응까 인자로 payload는 받지 않겠다.
  useEffect(()=> {
    dispatch(__getTodos())
  },[]);

  // 저어기 위에서 useSelector로 읽어왔던 isLoading을 가지고, 로딩중에 어떻게 할 건지 처리할거야.
  if(isLoading) {
    return <div>로딩 중...</div>;
  }

  // 저어기 위에서 useSelector로 읽어왔던 error 가지고, error 메세지를 표시 할거야.
  if (error) {
    return <div>{error.message}</div>;
  }

  // 그것도 아니라면, 즉 정상이라면! 이렇게 return을 해 줄 것이다.
  return (
    <div >
      { // map은 항상 key가져야 되는거 잊지말고~
        todos.map(todo => {
          return (
            <div key={todo.id}>
              {todo.title}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;