const nodemailer = require('nodemailer')

EMAIL_SERVICE='SendGrid'
EMAIL_USERNAME='apikey'
EMAIL_PASSWORD='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'
EMAIL_FROM='cse.mkamble@gmail.com'




const sendEmail = () => {
    const transporter = nodemailer.createTransport({
        service: EMAIL_SERVICE,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD,
        }
    })
    const mailOptions = {
        from: EMAIL_FROM,
        to: 'mk2000abc@gmail.com',
        subject: 'Verify Email',
        html: 'hello',
    }
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log('err', err)
        } else {
            console.log('info', info)
        }
    })
}

sendEmail()