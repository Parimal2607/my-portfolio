import { Html } from "@react-email/html"
import { Text } from "@react-email/text"
import { Section } from "@react-email/section"
import { Container } from "@react-email/container"
import { Img } from '@react-email/img';
import { Column } from '@react-email/column';

export default function WelcomeEmail() {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <div>
            <div style={emailTemplate}>
              <div style={emailHeader}>
                <h1 style={emailTitle}>Hello I'm Parimal Sharma, I'm Frontend Developer</h1>
              </div>
              <div className="container my-4">
                <div className="emailContent">
                  <p style={emailDescription}>As a frontend developer, my expertise lies in creating and implementing visually appealing and user-friendly web applications. With a strong command of HTML, CSS, and JavaScript, I have the ability to design and develop responsive and dynamic web pages that deliver a seamless user experience across different devices and platforms.</p>
                  <p style={emailDescription}>My experience in working with various web development frameworks such as React, Angular, and Vue.js enables me to build highly interactive and scalable applications that meet the business requirements of clients. I have also worked with backend developers to integrate APIs and build a robust and efficient system.</p>
                  <p style={emailDescription}>Additionally, I possess excellent problem-solving skills and the ability to debug and troubleshoot web application issues. My passion for keeping up with the latest web development trends and technologies helps me stay updated and deliver cutting-edge solutions.</p>
                  <p style={emailDescription}>Overall, I am a highly motivated and enthusiastic frontend developer with a strong portfolio of successful projects. I am committed to delivering high-quality solutions that exceed client expectations and drive business growth.</p>
                  <p style={emailDescription}>Here is my Portfolio link <a href='#'>portfolio link</a></p>
                  <p style={emailDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <div style={emailDescription}>
                    {/* <p style={emailDescription} className="pb-3">you can download My resume <a href=""> on click</a></p> */}

                  </div>
                </div>
              </div>
              <footer className='position-absolute bottom-0 w-100'>
                <div style={emailFooter}>
                  <div>
                    <p style={emailTitle}>Follow me on</p>
                    <div style={socialLink} className="d-flex justify-content-center">
                      <a href="https://instagram.com/parimal_sharma_?igshid=ZDdkNTZiNTM="><Img src="https://cdn.icon-icons.com/icons2/914/PNG/96/Instagram_Color_icon-icons.com_71811.png" alt="instagram" width="40" height="40" /></a>
                      <a href="https://www.linkedin.com/in/parimal-sharma-2521561b1"><Img src="https://cdn.icon-icons.com/icons2/1906/PNG/96/iconfinder-linkedin-4550875_121338.png" alt="linkedin" width="26" height="26" /></a>
                      <a href="https://github.com/Parimal2607" style={{height:"33"}}><Img src="https://cdn.icon-icons.com/icons2/509/PNG/96/Github_icon-icons.com_49946.png" alt="github" width="40" height="40" /></a>
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
const socialLink = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}
const emailTitle = {
  color: "white",
}
const emailDescription = {
  color: "black",
  textAlign: "justify",
  fontWeight: "600",
}