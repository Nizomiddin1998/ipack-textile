
import {createAction,createReducer} from "@reduxjs/toolkit";

export const addExpenseName = createAction('ADD_EXPENSE_NAME')
export const deleteExpense = createAction('DELETE_EXPENSE')
export function editExpanseName(name,id){
    return{
        type: 'EDIT_EXPANSE_NAME',
        payload: name,
        Id: id
    }
}

export default createReducer({
    expense: [
        {id: 1, foydalanuvchi_id:3,miqdori:1000,kassa_id: 3, vaqt:'02/12/2021'},
        {id: 2, foydalanuvchi_id:2,miqdori:4000,kassa_id: 1, vaqt:'01/09/2021'},
        {id: 3, foydalanuvchi_id:3,miqdori:2300,kassa_id: 2, vaqt:'01/10/2021'},
    ]
},{
    DELETE_EXPENSE:(state,action)=>{
        state.expense.splice(action.payload,1)
    },
    ADD_EXPENSE_NAME:(state,action)=>{
        state.expense.push({id: state.expense.length+1, ...action.payload})
    },
    EDIT_EXPANSE_NAME:(state,action)=>{
        state.expense.splice(action.Id, 1, {id: action.Id + 1, ...action.payload})
    }
})

//
// export default function expenseReducer(state = {
//     expense: [
//         {id: 1, foydalanuvchi_id:3,miqdori:1000,kassa_id: 3, vaqt:'02/12/2021'},
//         {id: 2, foydalanuvchi_id:2,miqdori:4000,kassa_id: 1, vaqt:'01/09/2021'},
//         {id: 3, foydalanuvchi_id:3,miqdori:2300,kassa_id: 2, vaqt:'01/10/2021'},
//     ]
// }, action) {
//     switch (action.type) {
//         case 'DELETE_EXPENSE':
//             const  expense= [...state.expense]
//             expense.splice(action.payload,1)
//             state={
//                 expense
//             }
//             break;
//         case 'ADD_EXPENSE_NAME':
//             const expenseAdd=[...state.expense]
//             expenseAdd.push({
//                 id: expenseAdd.length+1,
//                 foydalanuvchi_id:action.payload[0].value,
//                 miqdori:action.payload[2].value,
//                 kassa_id: action.payload[1].value,
//                 vaqt: action.payload[3].value
//             })
//             state={
//                 expense: expenseAdd
//             }
//             break;
//         case 'EDIT_EXPANSE_NAME':
//             const expenseEdit=[...state.expense]
//             expenseEdit.splice(action.Id,1,{
//                 id: action.Id+1,
//                 foydalanuvchi_id:action.payload[0].value,
//                 miqdori:action.payload[2].value,
//                 kassa_id: action.payload[1].value,
//                 vaqt: action.payload[3].value
//             })
//             state={
//                 expense: expenseEdit
//             }
//             break;
//         default:
//             return state;
//     }
//     return state
// }