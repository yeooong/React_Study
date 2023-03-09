import React from "react";

const TodoCard = ({ id, content }) => {
    // console.log('card rendering');
    return (
        <>
            {/* 유니크한 key값 */}
            <div
                key={`todoList-card-${id}`}
                className='todo-wrapper_cards_card'>
                <span>{content}</span>
            </div>
        </>
    );
}

export default TodoCard;