import React from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import ConfirmMessage from '../messages/ConfirmMessage.jsx';

class DashboardPage extends React.Component {
    confirmation= () => { 
        const {history, confirmationToken} = this.props;
        history.push(`/confirmation/${confirmationToken}`);
    }

    render(){
        const { isConfirmed, confirmationToken } = this.props; 
        return (
            <div className="ui container">
                <h1>Dashboard Page</h1>
                {!isConfirmed && 
                <div>
                    <ConfirmMessage />
                    <Button primary onClick={this.confirmation}>Confirmation</Button>
                </div>}
            </div>
        );
    };
}

DashboardPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    confirmationToken: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        isConfirmed: !!state.user.confirmed,
        confirmationToken: state.user.confirmationToken
    }
}

export default connect(mapStateToProps)(DashboardPage);