const router = require("express").Router();
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com", //replace with your email provider
  port: 587,
  auth: {
    user: "jared.seefried@outlook.com",
    pass: "Adelynn12!@"
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.route("/")
  .post((req, res, next) => {
    const name = req.body.firstName + " " + req.body.lastName
    const email = req.body.email
    const subject = req.body.subject
    // const message = req.body.message
  
    const mail = {
      from: "jared.seefried@outlook.com",
      to: "jared.seefried@outlook.com",
      subject: name +" submitted Contact form",
      text:  `Hi Jared!
      
      ${name} filled out the contact form on your portfolio and wrote

      "${subject}"
      
      Respond back to them at ${email}
      
      Jared's Portfolio Contact form!`
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })

module.exports = router