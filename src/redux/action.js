
export function addCashName(name){
    return{
        type: 'ADD_CASH_NAME',
        payload: name
    }
}
export function addExpenseName(info){
    return{
        type: 'ADD_EXPENSE_NAME',
        payload: info
    }
}
export function addIncomeName(info){
    return{
        type: 'ADD_INCOME_NAME',
        payload: info
    }
}

export function deleteExpense(id){
    return{
        type: 'DELETE_EXPENSE',
        payload: id
    }
}
export function deleteCash(id){
    return{
        type: 'DELETE_CASH',
        payload: id
    }
}
export function deleteIncome(id){
    return{
        type: 'DELETE_INCOME',
        payload: id
    }
}
export function editCashName(name,id){
    return{
        type: 'EDIT_CASH_NAME',
        payload: name,
        Id: id,
    }
}
export function editExpanseName(name,id){
    return{
        type: 'EDIT_EXPANSE_NAME',
        payload: name,
        Id: id,
    }
}
export function editIncomeName(name,id){
    return{
        type: 'EDIT_INCOME_NAME',
        payload: name,
        Id: id,
    }
}