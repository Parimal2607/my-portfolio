import { Html } from "@react-email/html"
import { Section } from "@react-email/section"
import { Container } from "@react-email/container"

export default function SenderEmail(from, subject, name, text) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
        <div>
            <div style={emailTemplate}>
              <div style={emailHeader}>
                <h1 style={emailTitle}>It&apos;s a Requirement Alert</h1>
              </div>
              <div className="container my-4">
                <div className="emailContent">
                  <p style={emailDescription}>{from}</p>
                  <p style={emailDescription}>{subject}</p>
                  <p style={emailDescription}>{name}</p>
                  <p style={emailDescription}>{text}</p>
                  
                </div>
              </div>
              <footer className='position-absolute bottom-0 w-100'>
                <div style={emailFooter}>
                  <p style={emailTitle}>I want be a more successful</p>
                </div>
              </footer>
            </div >
          </div >
        </Container>
      </Section>
    </Html>
  )
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
}
const emailTemplate = {
  position: "relative",
  height: "100vh",
}
const emailHeader = {
  textAlign: "center",
  backgroundColor: "#0d1d31",
  padding: "20px",
}
const emailFooter = {
  textAlign: "center",
  backgroundColor: "#0d1d31",
  padding: "20px",
}
const emailTitle = {
  color: "white",
  margin: "0"
}
const emailDescription = {
  color: "black",
  textAlign: "justify",
  fontWeight: "600",
}
