import {createStore,applyMiddleware,combineReducers} from "redux";
import {logger} from "redux-logger";
import cashBoxReducer from "./redux/cashBoxReducer";
import usersReducer from "./redux/usersReducer";
import incomeReducer from "./redux/incomeReducer";
import expenseReducer from "./redux/expenseReducer";

const store = createStore(combineReducers({cashBoxReducer,incomeReducer,usersReducer,expenseReducer}),applyMiddleware(logger))

export default store;