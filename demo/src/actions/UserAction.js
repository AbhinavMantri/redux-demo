import api from '../api';

const setLoggedUser = (user, dispatch) => {
    localStorage.setItem('bookwormJWT', user.token);
    dispatch(userLoggedIn(user));
};

export const userLoggedIn = (user) => {
    return {
        type: 'USER_LOGGED_IN',
        payload: user
    }
}


export const userLoggedOut = () => {
    return {
        type: 'USER_LOGGED_OUT'
    }
}

// export const userAuth = (user) => {
//     return {
//         type: 'USER_AUTH',
//         payload: user
//     };
// }

// export const userAuthErr = (err) => {
//     return {
//         type: 'USER_AUTH_Err',
//         payload: err
//     };
// }

export const login = credentials => dispatch => {
    return api.user.login(credentials)
                   .then(user => {
                       localStorage.setItem('bookwormJWT', user.token);
                       dispatch(userLoggedIn(user));
                    });
};                    

export const logout = () => dispatch => {
    localStorage.removeItem('bookwormJWT'); 
    dispatch(userLoggedOut());
};

export const signup = user => dispatch => {
    return api.user.signUp(user)
                   .then(user => {
                       localStorage.setItem('bookwormJWT', user.token);
                       dispatch(userLoggedIn(user));
                    });
};

export const confirm = token => dispatch => {
    return api.user.confirm(token)
                   .then(user => {
                        localStorage.setItem('bookwormJWT', user.token);
                        dispatch(userLoggedIn(user));
                   });
};


export const sendResetLink = email => dispatch => {
    return api.user.sendResetLink(email);
};

//    return ((dispatch) => {
//         api.login(credential)
//            .then(user => {
//                dispatch(userAuth(user));
//                if(scalback)
//                     scalback();
//             })
//            .catch(err => {
//                dispatch(userAuthErr(err));
//                if(eclaback) 
//                    eclaback(err);
//            });
//    }); 
