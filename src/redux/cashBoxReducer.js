import {createAction, createReducer} from "@reduxjs/toolkit";

export const addCashName = createAction('ADD_CASH_NAME')
export const deleteCash = createAction('DELETE_CASH');
export function editCashName(name,id){
    return{
        type: 'EDIT_CASH_NAME',
        payload: name,
        Id: id,
    }
}

export default createReducer({
    cashBOX: [
        {id: 1, name: 'Kassa1'},
        {id: 2, name: 'Kassa2'},
        {id: 3, name: 'Kassa3'},
    ]
},{
    ADD_CASH_NAME:(state,action)=>{
        state.cashBOX.push({
            id: state.cashBOX.length + 1,
            name: action.payload
        })
    },
    DELETE_CASH:(state,action)=>{
        state.cashBOX.splice(action.payload, 1)
    },
    EDIT_CASH_NAME:(state,action)=>{
        state.cashBOX.splice(action.Id, 1,{
            id: action.Id + 1,
            name: action.payload
        })
    }

})

//
// export default function cashBoxReducer(state = {
//     cashBOX: [
//         {id: 1, name: 'Kassa1'},
//         {id: 2, name: 'Kassa2'},
//         {id: 3, name: 'Kassa3'},
//     ]
// }, action) {
//     switch (action.type) {
//         case 'ADD_CASH_NAME':
//             const cash = [...state.cashBOX]
//             cash.push({
//                 id: cash.length + 1,
//                 name: action.payload
//             })
//             state = {
//                 cashBOX: cash
//             }
//             break;
//         case 'DELETE_CASH':
//             const cashBox = [...state.cashBOX]
//             cashBox.splice(action.payload, 1)
//             state = {
//                 cashBOX: cashBox
//             }
//             break
//         case 'EDIT_CASH_NAME':
//             const cash1 = [...state.cashBOX]
//             cash1.splice(action.Id, 1,{
//                 id: action.Id + 1,
//                 name: action.payload
//             })
//             state = {
//                 ...state,
//                 cashBOX: cash1
//             }
//             break;
//         default:
//             return state
//     }
//     return state
// }