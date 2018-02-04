import axios from 'axios';

// export const login = (credential) => {
//     return axios.post('/api/login', { credential }).then(res => res.data.user);
// } 

export default {
    user: {
        login: (credentials) => {
          return axios.post('/api/login', { credentials }).then(res => res.data.user);
        },
        signUp: (user) => {
            return axios.post('/api/registeration', { user }).then(res => res.data.user);
        },
        confirm: (token) => {
            return axios.post('/api/registeration/confirm', { token }).then(res => res.data.user);
        },
        sendResetLink: (email) => {
            return axios.post('/api/login/sendResetLink', { email }).then(res => res.data.user);
        }
    }
}