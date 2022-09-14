import { combineReducers } from "redux";
import slideShowReducer from "./reducers/slideShowReducer";

const rootReducer = combineReducers({
    login: slideShowReducer
})

export default rootReducer;