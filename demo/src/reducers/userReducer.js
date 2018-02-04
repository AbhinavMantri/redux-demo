// const initialCed = {
//     user: {
//         email: null
//     },
//     error: null
// }

const userReducer = (state = {}, action = {}) => {
    switch(action.type) {
        // case "USER_AUTH": {
        //     state = action.payload;
        // } 
        // case "USER_AUTH_ERR": {
        //    state = action.payload;
        // }
        case "USER_LOGGED_IN":
            return action.payload;
        case "USER_LOGGED_OUT":
            return {};    
        default:
            return state;    
    } 
}

export default userReducer;