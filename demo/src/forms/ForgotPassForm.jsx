import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Message, Icon} from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError.jsx';

class ForgotPassForm extends React.Component {
    state = { 
        email: '',
        loading: false,
        errors: {},
        success: false
    };

    onChange = e => {
        this.setState({
            email: e.target.value
        });
    }

    validate= (email) => {
        const errors = {};
        if(!isEmail(email)) {
            errors.email = "Invalid email";
        }

        return errors;
    }   

    submit = () => {
        const { email } = this.state; 
        const errors = this.validate(email);
        this.setState({ errors });
        if(Object.keys(errors).length == 0) {
            this.setState({ loading: true });
            this.props.send(email)
                      .then(res => this.setState({ success: true, loading: false }))
                      .catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
        }
    }
    render() {
        const { loading, errors, success} = this.state;
        return (
            <Form onSubmit={this.submit} loading={loading}>
                {errors.global && <Message negative icon>
                    <Icon className="warning circle" />
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.global}</p>
                </Message>}
                {success && <Message success icon>
                    <Icon className="checkmark"></Icon>
                    <Message.Header>Success</Message.Header>
                    <p>Email has been send successfully!!</p>
                </Message>}
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example@example.com" onChange={this.onChange}/>
                    {errors.email && <InlineError text={errors.email}  />}
                </Form.Field>    
                <Button primary>Send</Button>
            </Form>
        );
    }
};

ForgotPassForm.propTypes = {
    send: PropTypes.func.isRequired
};

export default ForgotPassForm;