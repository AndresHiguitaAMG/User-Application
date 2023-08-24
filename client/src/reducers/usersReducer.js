export const usersReducer = (state = [], action) => {
    switch (action.type) {
        // eslint-disable-next-line no-undef
        case "addUser":
            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(),
                }
            ];
        case "RemoveUser": 
            return state.filter(user => user.id !== action.payload);    
        default:
            return state;
    }
}