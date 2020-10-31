import nodemailer from 'nodemailer';

/*
let transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
     user: 'put_your_username_here',
     pass: 'put_your_password_here'
  }
});
*/

export default (req, res) => {
  console.log(req.body);
  
  res.status(200).json({env: process.env});
}
