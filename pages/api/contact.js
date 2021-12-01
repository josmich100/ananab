async function sendEmail(req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "ananabcabs@gmail.com",
      pass: "Ananab@2021",
    },
    secure: true,
  });

  const message = {
    from: req.body.email,
    to: "ananabcabs@gmail.com",
    subject: `Message from ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  try {
    await transporter.sendMail(message, function (err, info) {
      if (err) {
        console.log(error);
        return res
          .status(error.statusCode || 500)
          .json({ error: error.message });
      }

      console.log(info);
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  console.log(req.body);
  return res.status(200).json({ error: "" });
}

export default sendEmail;
