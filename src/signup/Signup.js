import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../shared/components/util/Input';
import Button from '../shared/components/FormElements/Button/Button';
import DisplayBlock from '../shared/components/DisplayBlock/DisplayBlock';
import './Signup.css';

const Signup = () => {
    const validate = Yup.object({
        mobile: Yup.string()
            .min(10, "Please enter a valid mobile number")
            .required("Required Field"),
        email: Yup.string()
            .email("Invalid E-Mail Id")
            .required("Required Field"),
        password: Yup.string()
            .min(6, "Password must be of at least 6 characters")
            .required("Required Field"),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords do not match!")
            .required("Required Field")
    });
    return (
        <Formik
            enableReinitialize
            initialValues={{
                mobile: '',
                email: '',
                password: '',
                confirmpassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {formik => (
                <React.Fragment>
                    <div className='upper-title'>
                        <h1>Subspace.</h1>
                        <p>Already a user? &nbsp;&nbsp;
                            <Button>Log In </Button></p>
                    </div>
                    <div className="content-wrapper" >
                        <div className="auth-signup-wrapper">
                            <h2 className="auth-signup-title centertext"> Create an Account </h2>
                            <Form >
                                <Input name='mobile' type="text" placeholder="Enter Mobile" />
                                <Input name='email' type="email" placeholder="Enter E-Mail" />
                                <Input name='password' type="password" placeholder="Enter Password" />
                                <Input name='confirmpassword' type="password" placeholder="Confirm Password" />
                                <Input name='18plus' type="checkbox" className="checkmark" label="I hearby confirm that I am above 18 years old." />
                                <div className="auth-signup">
                                    <Button to="/otp" type="submit" disabled={!(formik.isValid)} >Verify OTP </Button>
                                </div>
                                <p className='px12text'>By creating this account, you agree to our <Link to="/"> Privacy Policy </Link> and <Link to="/">Terms of Use </Link></p>
                            </Form>
                        </div>
                        <div className="right-box">
                            <h2 className='centertext'>Why choose SubSpace?</h2>
                            <p className='centertext'>2000+ businesses trust their payments with SubSpace</p>
                            <DisplayBlock />
                            <p className='centertext'>Need help? We are just a click away. <Link to="/"> Contact Us </Link></p>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </Formik >
    );
}

export default Signup
