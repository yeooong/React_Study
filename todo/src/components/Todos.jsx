import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteToDo, toggleHandler } from "../redux/modules/reducer";
import styled from "styled-components";

function Todos({TodoisDone}) {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.reducer);

    const onDelete = (id) => {
        dispatch(deleteToDo(id));
    };

    const onToggleHandler = (id) => {
        dispatch(toggleHandler(id));
    };

    return(
      todo.map((item)=>{
        if(item.isDone === TodoisDone){
          return(
              <StTodoList key={item.id}>
                  <Link to={`/Detail/${item.id}`}>상세페이지</Link>
                  <StTodoListTodo>
                      <h3>{item.title}</h3>
                      <h5>{item.text}</h5>
                      <div>
                          <StButton onClick={() => { onDelete(item.id) }}>삭제</StButton>
                          <StButton onClick={() => { onToggleHandler(item.id) }} >
                              {
                                  item.isDone ? '취소' : '완료'
                              }
                          </StButton>
                      </div>
                  </StTodoListTodo>


                  
              </StTodoList>
          );
        }
      })
    );
}

export default Todos;

const StTodoList = styled.div`
    width: 200px;
    height: 200px;
    border: 1.5px solid #2F4F4F;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px;
    padding: 20px;
`
const StTodoListTodo = styled.div`
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const StButton = styled.button`
    border-radius: 5px;
    border: 1px solid #2F4F4F;
    background-color: #2F4F4F;
    color: white;
    margin: 5px;
`