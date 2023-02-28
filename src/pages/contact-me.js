import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { LoginSchema } from '../schemas';
import AnimatedBg from "./AnimatedBg"
import Nav from './Nav'
const initialValues = {
    email: "",
    name: "",
    number: "",
    description:""
};
function Contact() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values, action) => {
            // console.log(values)
            const tempObj = {
                from: "parimal2607@gmail.com",
                to: values?.email,
                subject: values?.name,
                text: values?.description
            }

            // let headers = new Headers();

            // headers.append('Content-Type', 'application/json');
            // headers.append('Accept', 'application/json');
            // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
            // headers.append('Origin', 'http://localhost:3002');


            // const response = fetch('http://localhost:3002/api/send', {
            //     method: 'post',
            //     mode: 'cors',
            //     headers: headers,
            //     body: JSON.stringify({ ...tempObj }),

            // }).then(response => response.json())
            //     .then(json => console.log(json))
            //     .catch(error => console.log('Authorization failed: ' + error.message));

            const response = axios({
                method: 'post',
                url: '/api/sendMail',
                // responseType: 'json'
                data:tempObj
              })
                .then(function (response) {
                  console.log("response", response);
                });
        
            action.resetForm()
        }

    })
    // useEffect(() => {
    //     const body = document.querySelector('#root');

    //     body.scrollIntoView({
    //         behavior: 'smooth'
    //     }, 500)

    // }, []);
    return (
        <>
            <Nav />
            <div className='contact-me'>
                <AnimatedBg />
                <div className="container">
                    <div className="row contact-header">
                        <h1>CONTACT ME</h1>
                    </div>
                    <div className="row">
                        {/* eslint-disable-next-line react/no-unescaped-entities*/}
                        <h4 > I'd love to hear from you!</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row input-container">
                            <div className="col-xs-12">
                                <div className="styled-input wide">
                                    <input type="text" required id="name" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                    <label>Name</label>
                                    {errors.name && touched.name ? <p className='error-msg'>{errors.name}</p> : null}
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="styled-input">
                                    <input type="text" required id="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.email && touched.email ? <p className='error-msg'>{errors.email}</p> : null}
                                    <label>Email</label>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="styled-input" >
                                    <input type="text" required id="number" name="number" value={values.number} onChange={handleChange} onBlur={handleBlur} />
                                    <label>Phone Number</label>
                                    {errors.number && touched.number ? <p className='error-msg'>{errors.number}</p> : null}
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <div className="styled-input wide">
                                    <textarea name='description' value={values.description} onChange={handleChange} onBlur={handleBlur} required></textarea>
                                    <label>Message</label>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <button class="cssbuttons-io-button" type="submit"> Send Message
                                    <div class="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contact