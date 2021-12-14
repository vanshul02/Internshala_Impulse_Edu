import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import Input from '../shared/components/util/Input';
import Button from '../shared/components/FormElements/Button/Button';
import DisplayBlock from '../shared/components/DisplayBlock/DisplayBlock';
import './Otp.css';

const Otp = () => {
    const validate = Yup.object({
        code: Yup.string()
            .min(6, "Code must be of atleast 6 digits")
            .required("Required Field"),
    });
    return (
        <Formik
            enableReinitialize
            initialValues={{
                code: ''
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
                            <Link to="/"><i class="uil uil-arrow-left"></i></Link>
                            <h2 className="auth-signup-title centertext"> Verify your email </h2>
                            <p >A verification code has been sent to abc@gmail.com</p>
                            <Form >
                                <Input name='code' type="text" placeholder="6-digit verification code" />
                                <p className='px12text'>Didn’t receive the code? <Link to="/otp"> Resend </Link></p>
                                <div className="auth-otp">
                                    <Button to="/otp" type="submit" disabled={!(formik.isValid)} >Verify Email </Button>
                                </div>
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

export default Otp;
