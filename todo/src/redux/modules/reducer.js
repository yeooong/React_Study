const ADD_TO_DO = "ADD_TO_DO";
const DELETE_TO_DO = "DELETE_TO_DO";
const CHANGE_STATUS = "CHANGE_STATUS";

export const addTodo = (data) => {
    return { type : ADD_TO_DO, data, };
    //요게 액션이다!!
}

export const deleteToDo = (id) => {
    return { type : DELETE_TO_DO, id,}
}

export const toggleHandler = (id) => {
    return { type : CHANGE_STATUS, id,}
}

const initialState = [
	{
		id: 1, // id는 모두 고유값이어야 합니다.
		title: "리액트 강의보기",
		text: "챕터 1부터 챕터 12까지 학습",
		isDone: false
	},
	{
		id: 2, // id는 모두 고유값이어야 합니다.
		title: "저녁 먹기",
		text: "저녁 뭐먹지..?",
		isDone: true
	}
];

//배열로 쓰면 확장성이 좋음.
//객체로 쓰면 수정? 이 자유롭다고 하긴 함..


//dispatch가 이벤트 발생한 인자를 액션 갖고 들어가서
//action을 트리거링 시켜주면
//아래 리듀서가 실행되면서 스위칭 문이 돌아감
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return [...state, action.data];
        
        case DELETE_TO_DO:
            const newState = state.filter((item) => item.id !== action.id);
            return newState;

        case CHANGE_STATUS:
            return (state.map((item)=> {
                if(action.id == item.id){
                    item.isDone = !item.isDone;
                    return item;
                }
                else{
                    return item;
                }
            }))
            
        default:
        return state;
    }
  };
  
  export default reducer;