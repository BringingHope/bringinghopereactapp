import React, { Component } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../formUiComponents/FormikControl';



export default class LoginForm extends Component {
    render() {
        const INITIAL_FORM_STATE = {
            username: '',
            password: ''
        };

        const FORM_VALIDATION = Yup.object().shape({
            username: Yup.string()
                .email('Email is invalid')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Required')
        });


    const onSubmit = (values) => {
      console.log("Form data", values);
    };

    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-7">
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Card className="regform">
                  <h1 className="regheading">Login</h1>
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
                      name="username"
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
                      <a href="/password-reset">Forget Password?</a>
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




