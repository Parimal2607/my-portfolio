// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { render } from "@react-email/render"
import WelcomeTemplate from "../../emails/template"
import { sendEmail } from "../../lib/email"

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
      html: req.body.subject + req.body.text + req.body.to,
    })
  console.log("response",response)
    return res.status(200).json({ message: "Email sent successfully" })
  }
}
