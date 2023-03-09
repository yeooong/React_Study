// 초기 상태값(state)
// const [number, setNumber] = useState(0); 이전에는 이렇게 사용했던 것!
const initialState = {
    userId: 123,
};


// 리듀서 : 'state'에 변화를 일으키는 함수!
// >> state를 action의 type에 따라 변경하는 함수.
// input: state와 action 두가지 값을 가진다.
// action: type/value를 가진 객체 형태. state를 어떻게 수정할 건지 그 action에 대해서 설명
const users = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default users;
