import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(){
    const parms = useParams();
    const todo = useSelector((state)=> state.reducer);
    const newObj = todo.find((item)=> +item.id == +parms.id)

    return (
        <StLayout>
            <StTodo>               
                <span>id: {newObj.id}</span>
                <h1>{newObj.title}</h1>
                <h3>{newObj.text}</h3>
                <Link to={`/`}>이전으로</Link>
            </StTodo>

        </StLayout>
    )
}

export default Detail;

const StLayout = styled.div`
    background-color: #FFFAF0;
    width: 800px;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`

const StTodo = styled.div`
    width: 400px;
    height: 500px;
    border: 1.5px dotted #2F4F4F;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px;
    padding: 20px;
`

