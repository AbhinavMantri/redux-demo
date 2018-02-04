import React from 'react';
import { Message } from 'semantic-ui-react';

const ConfirmMessage = () => (
    <div>
        <Message info>
            <Message.Header>Please verify your email to unlock the awsomeness</Message.Header>
        </Message>
    </div>
);

export default ConfirmMessage;