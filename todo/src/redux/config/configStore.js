import { createStore } from "redux";
import { combineReducers } from "redux";
import reducer from "../modules/reducer";


const rootReducer = combineReducers({
    //reducer: reducer, 
    reducer,
}); 
const store = createStore(rootReducer); 

export default store;