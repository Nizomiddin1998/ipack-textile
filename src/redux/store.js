import {createStore,applyMiddleware,combineReducers} from "redux";
import {logger} from "redux-logger";
import cashBoxReducer from "./cashBoxReducer";
import usersReducer from "./usersReducer";
import incomeReducer from "./incomeReducer";
import expenseReducer from "./expenseReducer";

const store = createStore(combineReducers({cashBoxReducer,incomeReducer,usersReducer,expenseReducer}),applyMiddleware(logger))

export default store;