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
        default:
            return state;
    }
}