import React, { Component } from 'react'
import { connect } from "react-redux";
import { resetPassword } from "../../redux";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../formUiComponents/FormikControl';

class ResetPasswordForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             successful: false
        }
    }
    
    onSubmit = (values, submitProps) => {
        let passwordDetails = { 
            newPassword: values.newPassword,
        };

        this.props.dispatch(resetPassword(passwordDetails)).then(() => {
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
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''

        };

        const FORM_VALIDATION = Yup.object({
            
            oldPassword: Yup.string()
                .required('Password is required'),
            newPassword: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('newPassword'), null], 'Password must match')
                .required('Confirm password is required'),
        })
        const { passwordData } = this.props;
        return passwordData.loading ? (
            <h2>Loading</h2>
          ) : passwordData.error ? (
            <h2>{passwordData.error}</h2>
          ) : (
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
                                    <h1 className="my-4 font-weight-bold .display-4">Reset Password Form</h1>
                                    {this.state.error &&
                                        <p>Error</p>}
                                    <Form>
                                
                                        <FormikControl control='input' label="New Password" name="newPassword" type="password" />
                                        <FormikControl control='input' label="Confirm Password" name="confirmPassword" type="password" />
                                        <button className="btn btn-success m-1" disabled={!formik.isValid || formik.isSubmitting} type="submit">Register</button>
                                        <button className="btn btn-dark" type="reset">Reset</button>
                                    </Form>
                                    {passwordData.message && (
                                        <div className="form-group">
                                            <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                                {passwordData.message}
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
        passwordData : state.forgotPassword,
    };
}

export default connect(mapStateToProps)(ResetPasswordForm);