import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 2개의 INPUT
// (1) 이름 : 지금은 의미 크게 없음
// (2) 함수
export const __addNumber = createAsyncThunk(
    "ADD_NUMBER_WAIT",
    (payload, thunkAPI) => {
        // 수행하고 싶은 동작 : 3초를 기다리게 할 예정
        setTimeout(()=> {
            // thunkAPI: component에서 dispatch를 호출 했던 것과 같음
            thunkAPI.dispatch(addNumber(payload))
        }, 3000)
    }
);

export const __minusNumber = createAsyncThunk(
    "ADD_NUMBER_WAIT",
    (payload, thunkAPI) => {
        // 수행하고 싶은 동작 : 3초를 기다리게 할 예정
        setTimeout(()=> {
            // thunkAPI: component에서 dispatch를 호출 했던 것과 같음
            thunkAPI.dispatch(minusNumber(payload))
        }, 3000)
    }
);

const initialState = {
    number: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // 갑자기 여기에 state는 어떻게 들어와있는 건지 모르겠다~.~
        addNumber: (state, action) => {
            state.number = state.number + action.payload;
        },
        minusNumber: (state, action) => {
            state.number = state.number - action.payload;
        },
    },
});

export default counterSlice.reducer;
export const { addNumber, minusNumber } = counterSlice.actions;