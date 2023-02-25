import nodemailer from "nodemailer";

const MAIL_USER = "499322fe55dc57";
const MAIL_PASS = "9d2dc6b6813adc";

const SMTP_SERVICE = "smtp.mailtrap.io";
const SMTP_PORT = "2525";
const smtpOptions = {
  host: SMTP_SERVICE,
  port: SMTP_PORT,
  service: SMTP_SERVICE,
  secure: false,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
};

export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  });
};
