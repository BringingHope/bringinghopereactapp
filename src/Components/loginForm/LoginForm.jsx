import React, { Component } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../formUiComponents/FormikControl';



export default class LoginForm extends Component {
    render() {
        const INITIAL_FORM_STATE = {
            email: '',
            password: ''
        };

        const FORM_VALIDATION = Yup.object().shape({
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required')
        });

        const onSubmit = values => {
            console.log('Form data', values)
        }

        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-7">

                        <Formik
                            initialValues={{ ...INITIAL_FORM_STATE }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={onSubmit}

                        >
                            {formik => (
                                <div>
                                    <h1 className="my-4 font-weight-bold .display-4">Login</h1>
                                    <Form>
                                
                                        <FormikControl
                                            control='input'
                                            // control='chakraInput'
                                            type='email'
                                            label='Email'
                                            name='email'
                                        />
                                        <FormikControl
                                            control='input'
                                            type='password'
                                            label='Password'
                                            name='password'
                                        />
                                        <button className="btn btn-success m-1" type="submit" disabled={!formik.isValid}>Submit</button>
                                        <button className="btn btn-dark" type="reset">Reset</button>
                                        
                                        <div className="py-4">
                                        <a href="/password-reset">Forget Password?</a>
                                            <div>
                                                Are you new here? <a href="/registration">Register Now</a>
                                            </div>
                                        </div>
                                        
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="col-md-7 my-auto">
                    <img className="img-fluid w-100" src="./img/rocket.png" alt="" />
                </div>
            </div>

        )
    }
}




