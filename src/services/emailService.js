const nodemailer = require('nodemailer')

const { USER_MAIL, PASS_MAIL } = process.env

function emailService(email) {
  const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: USER_MAIL,
      pass: PASS_MAIL
    }
  })
  const message = {
    from: 'no-reply@nonlegitdisney.api',
    to: email,
    subject: 'Welcome to disney API',
    text: 'Welcome to disney API'
  }
  transport.sendMail(message, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
}

module.exports = emailService
