export default function cashBoxReducer(state = {
    kassalar: [
        {id: 1, name: 'Kassa1'},
        {id: 2, name: 'Kassa2'},
        {id: 3, name: 'Kassa3'},
    ]
}, action) {
    switch (action.type) {
        case 'ADD_CASH_NAME':
            const cash = [...state.kassalar]
            cash.push({
                id: cash.length + 1,
                name: action.payload
            })
            state = {
                kassalar: cash
            }
            break;
        case 'DELETE_CASH':
            const cashBox = [...state.kassalar]
            cashBox.splice(action.payload, 1)
            state = {
                kassalar: cashBox
            }
            break
        case 'EDIT_CASH_NAME':
            const cash1 = [...state.kassalar]
            cash1.splice(action.Id, 1,{
                id: action.Id + 1,
                name: action.payload
            })
            state = {
                ...state,
                kassalar: cash1
            }
            break;
        default:
            return state
    }
    return state
}