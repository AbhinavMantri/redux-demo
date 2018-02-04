import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../forms/SignupForm.jsx';
import { signup } from '../actions/UserAction';

class SignupPage extends Component {
    
    submit = (data) => {
       const {signup, history} = this.props;
       return signup(data).then(()=> history.push('/dashboard'));
    }
    render() {
        return (
          <div className="ui container">
              <h1>Sign Up Page</h1>
              <SignupForm submit={this.submit} />  
          </div>      
        );
    }
};

SignupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
};



export default connect(null, { signup })(SignupPage);