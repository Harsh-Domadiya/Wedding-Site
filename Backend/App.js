const express = require('express');
const nodemailer = require('nodemailer')
const cors = require('cors')
const mongoose = require('mongoose');


const Message = require('./models/Message');

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

const url = "mongodb://localhost:27017/wedding";

mongoose.connect(url)
  .then(() => console.log("DataBase connected"))
  .catch((err) => console.error(err))


var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "77203ebbdf6a4e",
    pass: "d391f91f2c02aa"
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, contacts, message } = req.body;

  if (!name || !email || !contacts || !message) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }

  const mailOptions = {
    from: 'service@uncleblock.in',
    to: email,
    subject: `New message from ${name}`,
    text: 'Hello ${name}',
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wedding Planner Response</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f7f7f7;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding: 20px 0;
    }
    .header img {
      width: 100px;
    }
    .header h1 {
      margin: 0;
      color: #d56b8b;
    }
    .content {
      padding: 20px 0;
    }
    .content p {
      line-height: 1.6;
    }
    .footer {
      text-align: center;
      padding: 20px 0;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting Us!</h1>
    </div>
    <div class="content">
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to us regarding your upcoming wedding. We are thrilled to assist you in making your special day unforgettable.</p>
      <p>We have received your inquiry and one of our wedding planners will get in touch with you shortly. In the meantime, here are some essential contacts that might be helpful for you:</p>
      <p>If you need immediate assistance, please feel free to contact us at <a>9428553006</a> or <a>info@Mrsh.com</a> </p>
    </div>
  </div>
</body>
</html>

`};

  transport.sendMail(mailOptions, async (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'An error occurred while sending the email.' });
    }
    console.log('Email sent:', info.response);

    try {
      // Create a new message document and save it to the database
      const newMessage = new Message({ name, email, contacts, message });
      await newMessage.save();

      return res.json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error saving message:', error);
      return res.status(500).json({ error: 'An error occurred while saving the message.' });
    }
  });
});

app.get('/all-content', async (req, res) => {
  const messageData = req.body;

  try {
    const messages = await Message.find({});
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'An error occurred while fetching messages.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
