import React, { Component } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../formUiComponents/FormikControl';
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from '../../redux/authentication/authActions'; 
import { Redirect } from 'react-router-dom';


class Login extends Component {


  onSubmit = (values, submitProps) => {
    let LoginDetails = {

      email: values.email,
      password: values.password,

    };
    const { dispatch, history } = this.props;

    dispatch(login(LoginDetails)).then(() => {
      history.push("/dashboard");
      window.location.reload();
    }).catch(() => { submitProps.setSubmitting(false) })

    submitProps.setSubmitting(false)
  };

  render() {
    const INITIAL_FORM_STATE = {
      email: '',
      password: ''
    };

    const FORM_VALIDATION = Yup.object().shape({
      email: Yup.string()
        .email('Email is invalid')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required')
    });



    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-7">
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={this.onSubmit}
            >
              {(formik) => (
                <Card className="regform">
                  <h1 className="regheading">Login</h1>
                  {message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    </div>
                  )}
                  <Form>
                    <FormikControl
                      control="input"
                      // control='chakraInput'
                      type="email"
                      label="Email"
                      name="email"
                    />
                    <FormikControl
                      control="input"
                      type="password"
                      label="Password"
                      name="password"
                    />
                    <button
                      className="regbtn"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      Submit
                    </button>
                    <button className="regbtn" type="reset">
                      Reset
                    </button>

                    <div className="py-4">
                      <a href="/forgotPassword">Forget Password?</a>
                      <div>
                        Are you new here?{" "}
                        <a href="/registration">Register Now</a>
                      </div>
                    </div>
                  </Form>
                  
                </Card>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Login);



