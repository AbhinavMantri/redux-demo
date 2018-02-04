import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForgotPassForm from '../forms/ForgotPassForm.jsx';
import { sendResetLink } from '../actions/UserAction';

class ForgotPassPage extends React.Component {

    send= (email) => {
      return this.props.sendResetLink(email);
    }

    render() {
        return (
           <div className="ui container">
               <h1>Forgot Password</h1>
               <ForgotPassForm send={this.send} />
           </div>     
        );
    }
};

ForgotPassPage.propTypes = {
    sendResetLink: PropTypes.func.isRequired
};



export default connect(null, { sendResetLink })(ForgotPassPage);