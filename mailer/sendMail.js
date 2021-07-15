import nodemailer from "nodemailer";

export const sendMail = () => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  let mailOptions = {
    from: "bambang@gmail.com",
    to: "izzuddinumar13@gmail.com",
    subject: "Nodemailer Project",
    text: "Hi from your nodemailer project",
  };

  transporter.sendMail(mailOptions, function (err, data) {
    console.log('masuk')
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

