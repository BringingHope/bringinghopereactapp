import React, { Component } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../formUiComponents/FormikControl';
import OrganisationRegistrationService from '../../services/OrganisationRegistrationService';
export default class RegistrationForm extends Component {
  onSubmit = (values) => {
    let OrgRegistrationDetails = {
      firstName: values.firstName,
      organisationName: values.organisationName,
      username: values.username,
      phoneNumber: values.phoneNumber,
      password: values.password,
    };

    OrganisationRegistrationService.createVolunteer(
      OrgRegistrationDetails
    ).then((res) => {
      console.log("Sent Successfully");
    });
    console.log(OrgRegistrationDetails);
  };

    render() {
        const INITIAL_FORM_STATE = {
            firstName: '',
            organisationName: '',
            username: '',
            phoneNumber: '',
            password: '',
            confirmPassword: ''

        };
        const FORM_VALIDATION = Yup.object({
            firstName: Yup.string()
                .required('Name is required'),
            organisationName: Yup.string()
                .required('Organisation Name is required'),
            phoneNumber: Yup.string()
                .required('Phone Number is required'),
                username: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password must match')
                .required('Confirm password is required'),
        })
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <Formik
                            initialValues={{
                                ...INITIAL_FORM_STATE
                            }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={values => {
                                console.log(values);
                            }}
                        >
                            {formik => (
                                <div>
                                    <h1 className="my-4 font-weight-bold .display-4">Registration Form</h1>
                                    <Form>
                                        <FormikControl control='input' label="First Name" name="firstName" type="text" />
                                        <FormikControl control='input' label="Organisation Name" name="organisationName" type="text" />
                                        <FormikControl control='input' label="Phone Number" name="phoneNumber" type="number" />           
                                        <FormikControl control='input' label="Email" name="username" type="email" />
                                        <FormikControl control='input' label="Password" name="password" type="password" />
                                        <FormikControl control='input' label="Confirm Password" name="confirmPassword" type="password" />
                                        <button className="btn btn-success m-1" type="submit">Register</button>
                                        <button className="btn btn-dark" type="reset">Reset</button>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </div>
                    <div className="col-md-7 my-auto">
                        <img className="img-fluid w-100" src="./img/RegistrationPage.jpg" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
