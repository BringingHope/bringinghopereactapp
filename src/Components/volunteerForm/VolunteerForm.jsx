import React, { Component } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../formUiComponents/FormikControl';
import VolunteerService from '../../services/VolunteerService';

export default class VolunteerForm extends Component {


    onSubmit = (values) => {
        

        let Volunteer ={
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            addressLine1: values.addressLine1,
            addressLine2: values.addressLine2,
            city: values.city,
            state: values.state,
            country: values.country,
            message: values.message
        }
        
        
        VolunteerService.createVolunteer(Volunteer).then(
            res => {
               console.log("Sent Successfully")
            });
            console.log(Volunteer);

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
            message: Yup.string()

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
                                    <h1 className="my-4 font-weight-bold .display-4">Volunteer Form</h1>
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
                                        <FormikControl control='input' label="Message" name="message" type="text" />
                                        <p>Disclaimer: Hereby, you accept giving contact details for organisation volunteers too contact you.</p>                                        <button className="btn btn-success m-1" type="submit">Submit</button>
                                        <button className="btn btn-dark" type="reset">Reset</button>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </div>
                    <div className="col-md-7 my-auto">
                        <img className="img-fluid w-100" src="./img/VolunteerPage.jpg" alt="" />
                    </div>
                </div>

            </div>

        )
    }
}
