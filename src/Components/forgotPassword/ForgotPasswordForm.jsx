import React, { Component } from 'react'
import { connect } from "react-redux";
import { forgotPassword } from "../../redux";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../formUiComponents/FormikControl';

class ForgotPasswordForm extends Component {
 
    constructor(props) {
        super(props)
    
        this.state = {
             successful: false
        }
    }
    
    onSubmit = (values, submitProps) => {
        let emailDetails = { 
            email: values.email
        };

        this.props.dispatch(forgotPassword(emailDetails)).then(() => {
            this.setState({
                successful: true,
            });
        })
        .catch(() => {
            this.setState({
                successful: false,
            });
        });

        submitProps.setSubmitting(false)
    };

    render() {
       

        
        const INITIAL_FORM_STATE = {
            email: ''
        };

        const FORM_VALIDATION = Yup.object({
            email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        })
        const { emailData } = this.props;
        return emailData.loading ? (
            <h2>Loading</h2>
          ) : emailData.error ? (
            <h2>{emailData.error}</h2>
          ) :(
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
                                    {this.state.error &&
                                        <p>Error</p>}
                                    <Form>
                                        <FormikControl control='input' label="Enter Your Gmail" name="email" type="email" />
                                        <button className="btn btn-success m-1" disabled={!formik.isValid || formik.isSubmitting} type="submit">Submit</button>
                                    </Form>
                                    {emailData.message && (
                                        <div className="form-group">
                                            <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                                {emailData.message}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
    emailData : state.forgotPassword,
    };
}

export default connect(mapStateToProps)(ForgotPasswordForm);