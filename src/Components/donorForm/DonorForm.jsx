import React, { Component } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../formUiComponents/FormikControl';
import DonorService from '../../services/DonorService';

export default class DonorForm extends Component {


    onSubmit = (values) => {
        

        let donor ={
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            addressLine1: values.addressLine1,
            addressLine2: values.addressLine2,
            city: values.city,
            state: values.state,
            country: values.country,
            donations: values.donations,
            message: values.message
        }
        
        DonorService.createDonor(donor).then(
            res => {
               console.log("Sent Successfully")
            });
            console.log(donor);

    }

    render() {

        const INITIAL_FORM_STATE = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            country: '',
            donations: '',
            message: ''

        };

        const FORM_VALIDATION = Yup.object().shape({
            firstName: Yup.string()
                .required('Required'),
            lastName: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email('Invalid email.')
                .required('Required'),
            phone: Yup.number()
                .integer()
                .typeError('Please enter a valid phone number')
                .required('Required'),
            addressLine1: Yup.string()
                .required('Required'),
            addressLine2: Yup.string(),
            city: Yup.string()
                .required('Required'),
            state: Yup.string()
                .required('Required'),
            country: Yup.string()
                .required('Required'),
            donations: Yup.string()
                .required('Required'),
            message: Yup.string(),

        });



        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">

                        <Formik
                            initialValues={{
                                ...INITIAL_FORM_STATE
                            }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={this.onSubmit}
                        >
                            {formik => (
                                <div>
                                    <h1 className="my-4 font-weight-bold .display-4">Donor Form</h1>
                                    <Form>
                                        <FormikControl control='input' label="First Name" name="firstName" type="text" />
                                        <FormikControl control='input' label="Last Name" name="lastName" type="text" />
                                        <FormikControl control='input' label="Phone Number" name="phone" type="number" />
                                        <FormikControl control='input' label="Email" name="email" type="email" />
                                        <FormikControl control='input' label="Address Line 1" name="addressLine1" type="text" />
                                        <FormikControl control='input' label="Address Line 2" name="addressLine2" type="text" />
                                        <FormikControl control='input' label="City" name="city" type="text" />
                                        <FormikControl control='input' label=" State " name="state" type="text" />
                                        <FormikControl control='input' label="Country" name="country" type="text" />
                                        <FormikControl control='input' label="Donations" name="donations" type="text" />
                                        <FormikControl control='input' label="Message" name="message" type="text" />
                                        <p>Disclaimer: Hereby, you accept giving contact details for organisation volunteers too contact you.</p>
                                        <button className="btn btn-success m-1" type="submit">Submit</button>
                                        <button className="btn btn-dark" type="reset">Reset</button>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </div>
                    <div className="col-md-7 my-auto">
                        <img className="img-fluid w-100" src="./img/DonorPage.jpg" alt="" />
                    </div>
                </div>
            </div>

        )
    }
}
