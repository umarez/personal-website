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

  let mailOptions = {
    from: `umar.website.bot@gmail.com`,
    to: "izzuddinumar13@gmail.com",
    subject: "Say Hi!",
    text: `${req.body.val}`,
    html: `<div>${req.body.val}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailOptions, function (err: any, data: any) {
    console.log(req.body);
    if (err || req.body.email == undefined) {
      console.log("Error " + err);
      res.send(err).status(400);
    } else {
      console.log("Email sent successfully");
      res.send("Email sent successfully").status(200);
    }
  });

  res.status(200);
}
