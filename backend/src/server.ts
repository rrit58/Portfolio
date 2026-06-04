import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import emailTemplate from "./emailTemplate.ts";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Routes
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.post("/send-message", async (req, res) => {
  const { fullName, email, message } = req.body;
  try {
    const info = await transporter.sendMail({
      from: `"Portfolio" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `New Message from Portfolio`,
      html: emailTemplate(fullName, email, message),
    });
    res.status(200).json({ success: true, info });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});