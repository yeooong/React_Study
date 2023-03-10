import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter";

function App() {
    const number = useSelector((state)=> state.counter.number);
    const dispatch = useDispatch();

    const onPlusButtonClickHandler = () => {
      dispatch(addNumber(1));
    };

    const onMinusButtonClickHandler = () => {
      dispatch(minusNumber(1));
    };

  return (
    <div >
      {number}
      <br />
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
    </div>
  );
}

export default App;
