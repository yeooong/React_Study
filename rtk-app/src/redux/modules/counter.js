import { createSlice } from "@reduxjs/toolkit";
/* 
// 일반 리덕스 예시 코드
// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";


// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};


// Initial State
const initialState = {
  number: 0,
};


// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};


// export default reducer
export default counter;
 */


// Initial State
const initialState = {
  number: 0,
};

// action Creator + Reducer
// reducer name, initialState, reducers 를 객체 형태로 createSlice 안에 넣어주기!
const counterSlice = createSlice({
  name: 'counter',
  // initialState: 'initialState',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export default counterSlice.reducer;
export const {addNumber, minusNumber} = counterSlice.actions;
