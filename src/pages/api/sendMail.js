// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { render } from "@react-email/render"
import WelcomeTemplate from "../../emails/template"
import { sendEmail } from "../../lib/email"
import SenderEmail from "@/emails/template2"

export default async function sendMail(req, res) {
  if (req.method === "POST") {  
    const response = await sendEmail({
      to: req.body.to,
      from:req.body.from,
      subject: req.body.subject,
      html: render(WelcomeTemplate()),
    })
    await sendEmail({
      to: "parimal2607@gmail.com",
      from:req.body.from,
      subject: req.body.subject,
      name:req.body.name,
      text:req.body.text,
      html: render(SenderEmail(req.body.from, req.body.subject, req.body.name, req.body.text)),
    })
  console.log("response",response)
    return res.status(200).json({ message: "Email sent successfully" })
  }

  
}
