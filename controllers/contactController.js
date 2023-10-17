import { StatusCodes } from "http-status-codes";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

export const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL_USER,
    subject: `${req.body.theme} from ${req.body.company} with email: ${req.body.email}`,
    text: req.body.info,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(StatusCodes.OK).json({ msg: "email sent successfully" });
  } catch (error) {
    throw new Error(error);
  }
};
