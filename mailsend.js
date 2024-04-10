var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
  auth: {
    user: 'mihir.jatayu@gmail.com',
    pass: 'dmpqffwrsnglainc'
  }
});

var mailOptions = {
  from: 'mihir.jatayu@gmail.com',
  to: 'mahavir.jatayu@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});