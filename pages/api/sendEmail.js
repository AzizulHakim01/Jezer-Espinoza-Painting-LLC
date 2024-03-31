// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      auth: {
        user: 'bdoneoversease01@gmail.com',
        pass: '3ZRpz0xt4sLNdQyh'
      }
    });

    const htmlData = `
      <h3>Name: ${name}</h3>
      <h3>Phone: ${phone}</h3>
      <h3>Email: ${email}</h3>
      <p>Message: ${message}</p>
    `;

    const mailOptions = {
      from: 'bdoneoversease01@gmail.com',
      to: 'azizulhakimgps@gmail.com',
      subject: `New Message from ${name}`,
      html: htmlData
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
