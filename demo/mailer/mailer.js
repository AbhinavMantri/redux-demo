const nodemailer = require('nodemailer');
const user = require('../models/User');

const setup = () => {
    return (
        nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER_ID,
                pass: process.env.EMAIL_USER_PASSWORD
            }
        })
    );
};

const from = '"Bookworm" <info@bookworm.com>';


module.exports = {
    sendConfirmationEmail: (user) => {
        const transport = setup();
        const email = {
            from,
            to: user.email,
            subject: "Welcome to Bookworm",
            text: `
            Welcome to Bookworm. Please confirm your email.
            ${user.generateConfirmationURL()}
            `
        };

        transport.sendMail(email);
    }
} 