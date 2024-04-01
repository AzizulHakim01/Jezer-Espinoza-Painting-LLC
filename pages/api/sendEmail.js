// pages/api/sendEmail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: "bdoneoversease01@gmail.com",
        pass: "3ZRpz0xt4sLNdQyh",
      },
    });

    const htmlData = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Details</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      h3 {
        margin: 10px 0;
        font-size: 18px;
        color: #333;
      }

      p {
        margin: 10px 0;
        font-size: 20px;
        color: #666;
    font-weight:700;;
      }

      .details {
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        border: 1px solid #ddd;
      }
  
    </style>
    </head>
    <body>

    <div class="container">
      <div class="details">
        <h3 style="text-align:center">You have a requirement from ${name}</h3>
        <h3>Phone: ${phone}</h3>
        <h3>Email: ${email}</h3>
        <p>Message: ${message}</p>
      </div>
    </div>

    </body>
    </html>
    `;

    const mailOptions = {
      from: "bdoneoversease01@gmail.com",
      to: "azizulhakimgps@gmail.com",
      subject: `New Message from ${name}`,
      html: htmlData,
    };

    try {
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({
          success: false,
          message: "Error sending email. Please try again later.",
        });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
