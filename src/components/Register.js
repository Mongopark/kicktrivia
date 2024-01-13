import React, { useState, } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validations/register"
import CustomButton from "./layouts/button";
import COLORS from './constants/colors';
import Kick from './icon/Kick.png'
import RegisterIcon from './icon/RegisterIcon.png'

const Register = () => {
  const initialValues = {
    username: "",
    phoneNumber: "",
    email: "",
    dob: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (values) => {
    // Handle the registration logic here using values
    console.log("Registration data:", values);
    // Reset the form after submission
    
  };


  const containerStyle = {
    backgroundColor: COLORS.primary,
    height: '100vh', // 100% of the viewport height
    display: 'flex',
    flexDirection: 'column',
    padding: '20px', // Add padding as needed
    paddingTop: 50,
  };

  return (
    <section className="mx-auto w-75 align-items-center row h-100" style={containerStyle}>
    <div className="container col-10 col-md-6 col-lg-6">
    <div className="text-deepest small d-flex justify-content-center py-1 py-lg-5">
    <img src={Kick} alt="Kick Logo" className="small justify-self-center"/>
</div>
      <div className="mb-4 text-center text-light">Register to play</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-light">Username or Phone Number:</label>
            <Field type="text" id="username" name="username" className="form-control text-light no-bother" placeholder="Enter your username or phone number" style={{backgroundColor: COLORS.primary, borderTop: "2px solid #060D1F", 
    borderLeft: "2px solid #060D1F", borderRight: "2px solid #060D1F", borderBottom: "2px solid #FFFFFF", }}/>
            <ErrorMessage name="username" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">Email Address:</label>
            <Field type="email" id="email" name="email" className="form-control text-light no-bother" placeholder="Enter your email address" style={{backgroundColor: COLORS.primary, borderTop: "2px solid #060D1F", 
    borderLeft: "2px solid #060D1F", borderRight: "2px solid #060D1F", borderBottom: "2px solid #FFFFFF", }} />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="dob" className="form-label text-light">Date of Birth:</label>
            <Field id="dob" name="dob" className="form-control text-light no-bother" placeholder="MM/DD/YYYY" style={{backgroundColor: COLORS.primary, borderTop: "2px solid #060D1F", 
    borderLeft: "2px solid #060D1F", borderRight: "2px solid #060D1F", borderBottom: "2px solid #FFFFFF", }} />
            <ErrorMessage name="dob" component="div" className="text-danger" />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="form-label text-light no-bother">Password:</label>
            <div className="input-group">
              <Field
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="form-control text-light no-bother"
                placeholder="Enter password"
                style={{backgroundColor: COLORS.primary, borderTop: "2px solid #060D1F", 
                borderLeft: "2px solid #060D1F", borderRight: "2px solid #060D1F", borderBottom: "2px solid #FFFFFF", }}  
              />
              <button
                type="button"
                className="btn btn-light no-bother"
                onClick={togglePasswordVisibility}
                style={{backgroundColor: COLORS.primary, borderTop: "2px solid #060D1F", 
                borderLeft: "2px solid #060D1F", borderRight: "2px solid #060D1F", borderBottom: "2px solid #FFFFFF", }}
              >
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-light no-bother`}></i>
                        </button>
          </div>
          <ErrorMessage name="password" component="div" className="text-danger" />
        </div>

          {/* <button type="submit" className="btn btn-primary">Register</button> */}
          <div className="d-flex justify-content-center">
  <CustomButton
    title="Register"
    color={"white"}
    bG={COLORS.pink}
    style={{ width: 200, height: 40 }}
    onPress={onSubmit}
    outline={false}
    disabled={false}
    goTo="/dashboard"
  />
</div>
        </Form>
      </Formik>
      <div className="text-deepest small d-flex justify-content-center py-4">
    <img src={RegisterIcon} alt="Kick Logo" className="small justify-self-center"/>
</div>
    </div>
    </section>
  );
};

export default Register;
