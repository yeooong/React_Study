/* 
// 초기 상태값(state)
// const [number, setNumber] = useState(0); 이전에는 이렇게 사용했던 것!
const initialState = {
    number: 0,
};

// <<<<<리듀서 : 'state'에 변화를 일으키는 함수!를 만들거야!!!!>>>>>
// >> state를 action의 type에 따라 변경하는 함수.
// input: state와 action 두가지 값을 가진다.
// action: type/value를 가진 객체 형태. state를 어떻게 수정할 건지 그 action에 대해서 설명
const counter = (state = initialState, action) => {
    switch(action.type) {
        case PLUS_ONE:
            // App.js 파일에서 useDispatch를 해줄 때, action객체를 던져줘야 하니까 
            // 여기서 객체를 return해야지 action객체가 store로 전달된다.
            return {
                number: state.number+1,
            };
        case MINUS_ONE:
            return {
                number: state.number-1,
            }
        default:
            return state;
    }
}

export default counter;
----------------------------------------------------------------------------------

 */



/* 16강 Redux Action Value Creator

// action value
// APP.js 등에서 쓸 수 있게 export해주기!

// action creator 쓰면 내부에서만 사용하기 때문에 export할 필요 없음!
const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";


// action creator : action value를 return하는 함수
// component에서 쓰기 위해서 export하기
export const plusOne = () => {
    return {
        type: PLUS_ONE,
    }
}

export const minusOne = () => {
    return {
        type: MINUS_ONE,
    }
}

// 초기 상태값(state)
// const [number, setNumber] = useState(0); 이전에는 이렇게 사용했던 것!
const initialState = {
    number: 0,
};

// <<<<<리듀서 : 'state'에 변화를 일으키는 함수!를 만들거야!!!!>>>>>
// >> state를 action의 type에 따라 변경하는 함수.
// input: state와 action 두가지 값을 가진다.
// action: type/value를 가진 객체 형태. state를 어떻게 수정할 건지 그 action에 대해서 설명
const counter = (state = initialState, action) => {
    switch(action.type) {
        case PLUS_ONE:
            // App.js 파일에서 useDispatch를 해줄 때, action객체를 던져줘야 하니까 
            // 여기서 객체를 return해야지 action객체가 store로 전달된다.
            return {
                number: state.number+1,
            };
        case MINUS_ONE:
            return {
                number: state.number-1,
            }
        default:
            return state;
    }
}

export default counter;
----------------------------------------------------------------------------------
 */



const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N"
const MINUS_N = "counter/MINUS_N"

export const plusOne = () => {
    return {
        type: PLUS_ONE,
    }
}

export const minusOne = () => {
    return {
        type: MINUS_ONE,
    }
}

export const plusN = (payload) => {
    // 잘 들어오는지 확인
    // console.log('payload', payload);
    return {
        type: PLUS_N,
        payload: payload,
    };
}

export const minusN = (payload) => {
    return {
        type: MINUS_N,
        payload,
    }
}


const initialState = {
    number: 0,
};


// action 객체라는 것은 action type을 payload만큼 처리하는 것이다!
// ex : payload: 3 = 3만큼을 plus하겠다.

const counter = (state = initialState, action) => {
    switch(action.type) {
        case PLUS_ONE:
     
            return {
                number: state.number+1,
            };
        case MINUS_ONE:
            return {
                number: state.number-1,
            }
        case PLUS_N:
            return {
                number: state.number + action.payload
            }
        case MINUS_N:
            return {
                number: state.number - action.payload
            }
        default:
            return state;
    }
}

export default counter;

