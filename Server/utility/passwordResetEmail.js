const nodeMailer = require("nodemailer");
const sendEmail = async (options) => {
    console.log(`hi${ SMTP_SERVICE }`);
    const transpoter = nodeMailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            email: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });
    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }
    await transpoter.sendMail(mailOptions);
}

module.exports = sendEmail; 