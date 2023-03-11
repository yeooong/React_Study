import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  

  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: "",
    // json방식의 data-base는 id 속성은 자동으로 입력되므로,
    // 지금은 title만 가지면 된다!
  })
  const [targetID, setTargetID] = useState('');
  const [contents, setContents] = useState('');

  const url = "http://localhost:3001/todos";

  // 조회 함수
  const fetchTodos = async () => {
    // async 안에서 await을 만나면, await이 있는 줄은 해당 줄이 끝날 때까지 기다린다!
    // 여기서는 response 줄이 url로부터 데이터를 받아올 때까지 기다렸다가 실행됨.
    // await을 쓰지않았을 경우에는 console.log에서 response가 Promise {<pending>}이라고 찍힘.
    // const response = await axios.get('http://localhost:3001/todos');
    // console.log("response", response);

    const {data} = await axios.get(url);
    console.log("data", data);
    setTodos(data);
  }

  // 추가 함수
  const onSubmitHandler = async () => {
    axios.post(url, inputValue);
    // 이렇게만 했을 경우 쾌적하지 않다 = 컴포넌트가 렌더링이 되지 않아서 새로고침 해야한다.
    // 컴포넌트 렌더링이 안 되는 이유 = state값이 변경되지 않기 때문.
    // 컴포넌트가 렌더링이 되는 조건 3가지
    // #1.state 변경  #2.props 변경  #3.부모 컴포넌트 변경
    
    // setTodos([...todos, inputValue]);
    // setTodos하면 DB에는 id가 자동으로 입력이 되지만, state에는 id값을 알 수 없어서 자동으로 갱신되지 않아서,
    // Warning: Each child in a list should have a unique "key" prop. 라는 경고가 뜨고
    // UI에도 새로고침 전에는 id값이 반영되지 않는다.
    // 그래서 다시 Todos를 읽어오는 방식이 더 적합하다.
    fetchTodos();
    // 그런데 이렇게 했더니 첫번째 추가는 잘 반영되는데, 두번째 추가하니까 반영이 안됨. 새로고침 해야됨.
  }

  // 삭제 함수
  const onDeleteButtonClickHandler = async (id) => {
    axios.delete(`${url}/${id}`);
    // 이렇게하면 마찬가지로 실시작으로 반영되지 않음.
    setTodos(todos.filter((item) => {
      return item.id !== id;
    })
    );
  };

  // 수정함수
  const onUpdateButtonClickHandler = async () => {
    // id, contents값이 필요하지만 인자로 넘겨받지 않아도 된다.
    // 왜냐하면 state로 따로 저장되어있기 때문에 활용하면 된다!
    axios.patch(`${url}/${targetID}`, {
      title: contents,
    });

    setTodos(todos.map((item)=> {
      if(item.id == targetID) {
        // item.id와 targetID의 type이 달라서 ===로는 안 됨!
        return {...item, title: contents};
      } else {
        return item;
      }
    }))

  }

  useEffect(()=>{
    // db로부터 값을 가져올 것이다.
    fetchTodos()
  }, []);


  return (
    < >
      <div>
        {/* 수정 영역 */}
        <input type="text" placeholder="수정할 아이디"
          value={targetID}
          onChange={(e) => {
            setTargetID(e.target.value);
          }}
        />
        <input type="text" placeholder="수정할 내용"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button onClick={onUpdateButtonClickHandler}>수정</button>
        <br />
        <br />

      </div>
      <div>
        {/* INPUT 영역 */}
        <form
          onSubmit={(e)=>{
            e.preventDefault();

            // 버튼 클릭시, input에 들어있는 값(state)를 이용하여 DB에 저장(post 요청)
            onSubmitHandler();
          }}
        >
          <input
            type="text"
            value={inputValue.title}
            onChange={(e) => {
              setInputValue({
                title: e.target.value,
              })
            }}
          />
          <button type="submit" >추가</button>
        </form>
      </div>

      <div>
        {todos?.map((item) => {
          return (
            <div key={item.id}>
              {item.id} : {item.title}
              &nbsp;<button onClick={()=>onDeleteButtonClickHandler(item.id)}>삭제</button>
            </div>
            // onClick에 함수 넣을 때, 인자를 보내줘야하는데 바로 함수만 넣으면 예.함수(인자) 최초 렌더링시에 바로 실행되어버림.
            // 그래서 항상 함수로 한 번 감싸줘야 예.()=>함수(인자), 원하는대로 onClick시에 함수가 실행되게 할 수 있다.
          )
        })}
      </div>
      
    </>
  );
}

export default App;
