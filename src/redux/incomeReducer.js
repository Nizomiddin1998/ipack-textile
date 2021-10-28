export default function incomeReducer(state = {
    income: [
        {id: 1, foydalanuvchi_id:1,miqdori:2000,kassa_id: 1,vaqt:'01/12/2021'},
        {id: 2, foydalanuvchi_id:2,miqdori:1000,kassa_id: 2,vaqt:'01/11/2021'},
        {id: 3, foydalanuvchi_id:3,miqdori:2300,kassa_id: 3,vaqt:'01/10/2021'},
    ]
}, action) {
    switch (action.type) {
        case 'DELETE_INCOME':
            const income = [...state.income]
            income.splice(action.payload,1)
            state={
                income
            }
            break
        case 'ADD_INCOME_NAME':
            const incomeAdd=[...state.income]
            incomeAdd.push({
                id: incomeAdd.length+1,
                foydalanuvchi_id:action.payload[0].value,
                miqdori:action.payload[2].value,
                kassa_id: action.payload[1].value,
                vaqt: action.payload[3].value
            })
            state={
                income: incomeAdd
            }
            break;
        case 'EDIT_INCOME_NAME':
            const incomeEdit=[...state.income]
            incomeEdit.splice(action.Id,1,{
                id: action.Id+1,
                foydalanuvchi_id:action.payload[0].value,
                miqdori:action.payload[2].value,
                kassa_id: action.payload[1].value,
                vaqt: action.payload[3].value
            })
            state={
                income: incomeEdit
            }
            break;
        default:
            return state;
    }
    return state
}