// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import users from "../modules/user";

const rootReducer = combineReducers({
    //counter: counter, 와 같음
    counter,
    // 마찬가지로 users: users, 와 같음
    // users,
});
const store = createStore(rootReducer);

export default store;