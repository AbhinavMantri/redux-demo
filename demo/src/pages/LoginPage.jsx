import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import LoginForm from '../forms/LoginForm.jsx';
import { login } from '../actions/UserAction';

// @connect((store)=> {
//     return {
//         user: store.user
//     };
// })

class LoginPage extends Component {
    submit = (data) => {
        //this.props.dispatch(login(data,null, errorCalback));
       return this.props.login(data).then(() => this.props.history.push('/dashboard'));
    }

    onClick = () => {
        this.props.history.push('/login/forgotpassword');
    }

    render() {
        //const { user } = this.props;
        return (
            <div className="ui container">
                <h1>Login Page</h1>
                <div>
                    <LoginForm submit={this.submit} /> Or <Button primary onClick={this.onClick}>Forgot Password</Button> 
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
