import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/reducer";
import styled from "styled-components";

function TodoForm() {
    const todo = useSelector((state) => state.reducer)
    const dispatch = useDispatch();

    // console.log('todo', todo) // ((state)=> state) -> object
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setTitle('');
        setText('');
    }

    const onAddtodo = () => {
      dispatch(
        addTodo({
          id: todo.length + 1,
          title,
          text,
          isDone: false,
        })
      );
    }

    return (
        <StNav>
            <h1>TodoList</h1>
            <StForm onSubmit={(event) => onSubmitHandler(event)}>
                <label for='title'>제목</label>
                <input id='title' type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
                <label for='title'>내용</label>
                <input id='text' type='text' value={text} onChange={(event) => setText(event.target.value)} />
                <StAddBtn onClick={onAddtodo}>추가하기</StAddBtn>
            </StForm>
        </StNav>
        
    )
};

export default TodoForm;

const StNav = styled.nav`
    border: 1.5px solid #2F4F4F;
    width: 800px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StForm = styled.form`
    padding: 10px;
`

const StAddBtn = styled.button`
    border-radius: 5px;
    border: 1px solid #2F4F4F;
    background-color: #2F4F4F;
    color: white;
`
