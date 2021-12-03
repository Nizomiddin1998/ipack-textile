// import {createStore,applyMiddleware,combineReducers} from "redux";
// import {logger} from "redux-logger";
import cashBoxReducer from "./cashBoxReducer";
import usersReducer from "./usersReducer";
import incomeReducer from "./incomeReducer";
import expenseReducer from "./expenseReducer";
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
        cashBOX: cashBoxReducer,
        income: incomeReducer,
        users: usersReducer,
        expense: expenseReducer
    }
})

// const store = createStore(combineReducers({cashBoxReducer,incomeReducer,usersReducer,expenseReducer}),applyMiddleware(logger))
//
// export default store;