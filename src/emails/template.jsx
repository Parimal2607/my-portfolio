import { Html } from "@react-email/html"
import { Text } from "@react-email/text"
import { Section } from "@react-email/section"
import { Container } from "@react-email/container"


export default function WelcomeEmail() {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <div>
            <div style={emailTemplate}>
              <div style={emailHeader}>
                <h1 style={emailTitle}>Hello I'm Parimal Sharma Frontend Developer</h1>
              </div>
              <div className="container my-4">
                <div className="emailContent">
                  <p style={emailDescription}>Front-end developers are the coders of all the user-facing elements of websites, web applications, and mobile applications. They interpret the needs of the company and its customers and create easy-to-use, interactive web apps. Front-end developers must be adept at both programming languages and design techniques.</p>
                  <p style={emailDescription}>Here is my Portfolio link <a href='#'>portfolio link</a></p>
                  <p style={emailDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <div style={emailDescription}>
                    <p style={emailDescription} className="pb-3">you can download My resume <a href=""> on click</a></p>
                    
                  </div>
                </div>
              </div>
              <footer className='position-absolute bottom-0 w-100'>
                <div style={emailFooter}>
                  <div>
                    <p style={emailTitle}>Follow me on</p>
                    <div className="d-flex gap-4 justify-content-center">
                      <a href="https://instagram.com/parimal_sharma_?igshid=ZDdkNTZiNTM=">Instagram</a>
                      <a href="https://www.linkedin.com/in/parimal-sharma-2521561b1">Linkedin</a>
                      <a href="https://github.com/Parimal2607">Github</a>
                    </div>
                  </div>
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
  // const socialLink = {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   gap: "20px",
  // }
const emailTitle = {
  color: "white",
}
const emailDescription = {
  color: "black"
}