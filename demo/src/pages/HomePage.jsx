import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/UserAction';

class HomePage extends Component {
    render() {
        const { isAuthenticated, logout } = this.props;
        return (
            <div className="ui container">
                <h1>Home Page</h1>
                { isAuthenticated ? 
                  <button onClick={ () => logout()}>logout</button> 
                  : <div><Link to="/login">Login</Link> Or <Link to="/signup">SignUp</Link></div>}
            </div>
        );
    }
}

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : !! state.user.token 
    };
};

export default connect(mapStateToProps, { logout })(HomePage);