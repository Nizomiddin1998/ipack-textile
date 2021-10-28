export default function usersReducer(state = {
    users: [
        {id: 1, name: 'Mark',phone: 6706068},
        {id: 2, name: 'Jacob',phone: 6706069},
        {id: 3, name: 'Otto',phone: 6706070},
    ]
}, action) {

    return state
}