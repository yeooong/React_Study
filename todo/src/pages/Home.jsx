import React from "react";
import Todos from "../components/Todos";
import TodoForm from "../components/TodoForm";
import styled from "styled-components";

function Home() {

    return (
        <StLayout>
            <TodoForm />

            <StSection>
                <h2>해야하는 일❤️‍🔥———</h2>
                <Todos TodoisDone={false} />
                <h2>다 한 일💖-——</h2>
                <Todos TodoisDone={true} />
            </StSection>

        </StLayout>
    );
}

export default Home;

const StLayout = styled.div`
    background-color: #FFFAF0;
    width: 800px;
    height: 1200px;
`

const StSection = styled.section`
    padding: 20px;
    display: flex;
    flex-direction: column;
`

