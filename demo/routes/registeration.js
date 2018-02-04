const express = require('express');
const User = require('../models/User');
const parseError = require('../utils/parseError');
const { sendConfirmationEmail } = require('../mailer/mailer'); 

const router = express.Router();

router.post('/', (req, res) => {
    const { email, password } = req.body.user;
    const user = new User({ email });
    user.setPassword(password);
    user.setConfirmationToken();
    user.save()
        .then(userRecord => { 
            sendConfirmationEmail(userRecord);
            res.json({ user: userRecord.toAuthJSON() });
        })
        .catch(err => res.status(400).json({ errors: parseError(err.errors) }));
});

router.post('/confirm', (req, res) => {
    const token  = req.body.token;
    User.findOneAndUpdate(
        { confirmationToken: token}, 
        { confirmationToken: "", confirmed: true},
        {new: true})
        .then(user => res.json({ user: user.toAuthJSON()}))
        .catch(err => res.status(400).json({}));
});

module.exports = router;