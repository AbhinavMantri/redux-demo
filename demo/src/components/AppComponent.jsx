import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import DashboardPage from '../pages/DashboardPage.jsx';
import SignupPage from '../pages/SignupPage.jsx';
import ConfirmationPage from '../pages/ConfirmationPage.jsx';
import ForgotPassPage from '../pages/ForgotPassPage.jsx';
import UserRoute from './routes/UserRoute.jsx';
import GuestRoute from './routes/GuestRoute.jsx';



const AppComponent = ({ location }) => {
        return (
            <div>
                <Route location={location} path="/" exact component={HomePage} />
                <Route location={location} path="/confirmation/:token" exact component={ConfirmationPage} />
                <Route location={location} path="/login/forgotpassword" exact component={ForgotPassPage} />
                <GuestRoute location={location} path="/login" exact component={LoginPage} />
                <GuestRoute location={location} path="/signup" exact component={SignupPage} />
                <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
            </div>
        );
};

AppComponent.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default AppComponent;