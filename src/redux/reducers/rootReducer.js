import { combineReducers } from "redux";
import userReducer from './userReducer';

const roorReducer = combineReducers({
    user: userReducer,
});
export default roorReducer;