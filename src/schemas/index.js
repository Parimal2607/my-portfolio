import * as Yup from "yup";
const phoneRegExp = /(\+91)?(-)?\s*?(91)?\s*?(\d{3})-?\s*?(\d{3})-?\s*?(\d{4})/
export const LoginSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter your name"),
  email: Yup.string().email().required("Please Enter your email"),
  number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Please Enter your phone number")
})

