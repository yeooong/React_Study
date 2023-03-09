import React, {useState} from "react";

const TodoForm = ({ setTodoList, todoList }) => {

    //저 todo의 값을 바꿔줄 수 있는 유일한 함수
    const [todo, setTodo] = useState("");
    //input이 가는 텍스트의 값

    const addTodoHandler = (event) => {
        event.preventDefault();
        //data = inpput창에 입력해서 들고온 data => todo
        // #1. input에 있는 value를 들고온다.
        // #2. 정말로 이 data가 이 함수 안에 들어오는지 확인핟다.
        // #3. todoList라는 배열에 내가 원하는 값을 넣어준다. => 배열에 값을 추가한다.

        // console.log(todo);
        const data = {
            content: todo,
            id: Math.random(),
            // 나중에는 id값 다른 것으로 쓰기
        }
        // console.log(data)
        const newList = [...todoList, data];
        setTodoList(newList);
        setTodo('');
    };
    // console.log(todoList);


    return (
        <>
            <form className='todo-wrapper_form'>
                <input
                    value={todo}
                    placeholder='투두 만들기'
                    onChange={(event) => {
                        setTodo(event.target.value);
                    }}
                />
                <button onClick={addTodoHandler}>추가하기</button>
            </form>
        </>
    );
};

export default TodoForm;