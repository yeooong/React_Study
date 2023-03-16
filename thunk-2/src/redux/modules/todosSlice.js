import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    // 원래는 state가 배열이었는데, 지금은 객체 형태로!
    todos: [],
    isLoading: false,
    isError: false,
    error: null,
};

// 비동기 함수 콜하기
// thunk함수는 보통 '__'로 시작
// createAsyncThunk(1."이름", 2.함수: (payload, thunkAPI(thunk와 관련된 기능을 가짐) )=> {})
export const __getTodos = createAsyncThunk(
    "getTodos",
    // 서버랑 통신하기 때문에 반드시 비동기여야하니까 async 꼭 챙겨주기~
    async (payload, thunkAPI) => {
        // 항상 성공을 보장할 수 없으니까 try, catch문 써주기~
        try {
            const response = await axios.get("http://localhost:3001/todos");
            // console.log('response', response);
            console.log('axios.get -> response', response.data); // [] = initialState.todos
                        
            // 원래는(이 전 thunk강의) 비동기 통신이 끝나고 나면 thunkAPI.dispatch로 Slice의 reducers로 어떤 동작을 하도록 넘겨줬었지.
            // 이제는 fulfilWithValue 혹은 rejectWithValue로 extraReducers로 보내줄 것이다.

            //---------------------------------------------
            // 위에서 data 갖고왔지? 그럼 이제 store에 넣어줄 것이다.
            // tollkit에서 제공하는 API임.
            // Promise가 -> resolve(=네트워크 요청이 성공한 경우) -> dispatch해주는 기능을 가진 API
            // = 네트워크 요청 성공하면 reducer한테 action, payload넘겨준다.
            // 참고로 response는 엄청 많은 정보를 가졌다고~ 그 중에 우리한테 필요한 data만 넘겨줄거다.
            return thunkAPI.fulfillWithValue(response.data);
            // 이렇게 호출하면 extraReducers중에서 __getTodos.fulfilled를 알아서 찾아간다.
            // 참 return쓰는거 잊지말자!
            
        } catch(error) {
            console.log('axios.get -> error', error);

            // toolkit에서 제공하는 API다.
            // Promise가 -> reject(=네트워크 요청이 실패한 경우) -> dispatch해주는 기능을 가진 API
            return thunkAPI.rejectWithValue(error);
            // 이렇게 호출하면 extraReducers중에서 __getTodos.rejected를 알아서 찾아간다.
        }
    }
);


export const todosSlice = createSlice({
    name: "todos",
    // 여기서 초기값 = initialState로 지정해줬기 때문에, 이제 이 슬라이스는 initialState랑 연결 된 거야!!
    initialState,
    reducers: {},
    extraReducers: {
        [__getTodos.pending]: (state, action) => {
            // 아직 통신이 진행중일 때
            // 저어기 위에 있는 initialstate의 isLoading이 true인 것이다.
            state.isLoading = true;
            // 저어기 위에 있는 initialstate의 isError는 false인 것이다.
            state.isError = false;
        },

        // thunkAPI.fulfillWithValue(response.data), thunkAPI.rejectWithValue(error) 값이 자동으로 분류됨
        // __getTodos 이름을 가지고 __getTodos.fulfilled로 분류되어서 reducer를 찾아감
        [__getTodos.fulfilled]: (state, action) => {
            // console.log('fulfilled: ', action); //type: "getTodos/fulfilled", payload: undefined
            state.isLoading = false;
            state.isError = false;
            // 마지막으로 action.payload = 서버에서 받아온 data
            // 이 payload가 어디서부터 시작되었냐하면은 axios.get통신 성공하면 dispatch로 response.data를 인자로 넘겨주지?
            // 그러면 그게 여기에 action으로 들어오는 것임.
            state.todos = action.payload;
        },
        
        
        [__getTodos.rejected]: (state, action) => {
            // 통신이 거절됐을 때
            // 저어기 위에 있는 initialstate의 isLoading이 false겠지.
            state.isLoading = false;
            // 물론 isError는 true일 거고.
            state.isError = true;
            // fulfilled랑 마찬가지로 통신에 실패하면 dispatch로 error객체 넘겨줬자나? 그게 여기 들어와서 action이 된것이다.
            // 그래서 그 error를 state로 넘겨준다.
            state.error = action.payload;
        }

    },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;