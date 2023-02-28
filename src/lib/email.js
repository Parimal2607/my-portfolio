import nodemailer from "nodemailer";

const MAIL_USER = "parimal2607@gmail.com";
const MAIL_PASS = "nwzgaiiqiawkfikw";

const SMTP_SERVICE = "Gmail";
// const SMTP_PORT = "465";
const smtpOptions = {
  host: SMTP_SERVICE,
  // port: SMTP_PORT,
  service: SMTP_SERVICE,
  // secure: true,
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
