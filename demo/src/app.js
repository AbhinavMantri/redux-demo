import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import store from './store';
import AppComponent from './components/AppComponent.jsx';
import { userLoggedIn } from './actions/UserAction';

if(localStorage.bookwormJWT) {
    const payload = decode(localStorage.bookwormJWT);
    const user = { token: localStorage.bookwormJWT, email: payload.email, confirmed: payload.confirmed };
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(<BrowserRouter>
                   <Provider store={store}>
                        <Route component={AppComponent} />
                    </Provider>
                </BrowserRouter>, document.getElementById('root'));

