export default function async(req: any, res: any) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  });
  //   let transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     port: 465,
  //     auth: {
  //       type: "OAuth2",
  //       user: process.env.MAIL_USERNAME,
  //       pass: process.env.MAIL_PASSWORD,
  //       clientId: process.env.GOOGLE_CLIENT_ID,
  //       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //       refreshToken: process.env.REFRESH_TOKEN,
  //     },
  //     tls: {
  //         rejectUnauthorized: false
  //     },
  //     secure: false,
  //   });

  let mailOptions = {
    from: `umar.website.bot@gmail.com`,
    to: "izzuddinumar13@gmail.com",
    subject: "Say Hi!",
    text: `${req.body.val} `,
    html: `<div>${req.body.val}</div><p>Sent from:
    ${req.body.email}</p>`
  };

  transporter.sendMail(mailOptions, function (err: any, data: any) {
    console.log("masuk");
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

  res.status(200);
  res.send("Memanggil API");
}
