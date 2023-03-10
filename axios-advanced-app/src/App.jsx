import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  

  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    // async 안에서 await을 만나면, 해당 줄은 해당 줄이 끝날 때까지 기다린다!
    // 여기서는 response 줄이 url로부터 데이터를 받아올 때까지 기다렸다가 실행됨.
    // await을 쓰지않았을 경우에는 console.log에서 response가 Promise {<pending>}이라고 찍힘.
    // const response = await axios.get('http://localhost:3001/todos');
    // console.log("response", response);

    const {data} = await axios.get("http://localhost:3001/todos");
    console.log("data", data);
    setTodos(data);
  }

  useEffect(()=>{
    // db로부터 값을 가져올 것이다.
    fetchTodos()
  }, []);

  return (
    <div >
      {todos?.map((item) => {
        return (
          <div key={item.id}>
            {item.id} : {item.title}
          </div>
        )
      } )}
    </div>
  );
}

export default App;
