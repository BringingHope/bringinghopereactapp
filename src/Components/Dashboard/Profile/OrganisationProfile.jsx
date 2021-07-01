import React, { Component  } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Card } from "react-bootstrap";
import FormikControl from "../../../formUiComponents/FormikControl";
import OrganisationProfileService from "../../../services/OrganisationProfileService";

export default class OrganisationProfile extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
        id: "", 
        
        OrgProfileDetails:{
        orgName: "",
        email: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
      }
    }
  }
  
 componentDidMount(){
   OrganisationProfileService.getOrganisationProfileDetailsById(this.state.id).then((res) =>{
     let orgDetails = res.data;
     this.setState({
      orgName: orgDetails.OrgProfileDetails.orgName,
      email: orgDetails.OrgProfileDetails.email,
      phone: orgDetails.OrgProfileDetails.phone,
      addressLine1: orgDetails.OrgProfileDetails.addressLine1,
      addressLine2: orgDetails.OrgProfileDetails.addressLine2,
      city: orgDetails.OrgProfileDetails.city,
      state: orgDetails.OrgProfileDetails.state,
      country: orgDetails.OrgProfileDetails.country
     });
   });
 }
 
  onSubmit = (values, submitProps) => {
    let OrgProfileDetails = {
      orgName: values.orgName,
      email: values.email,
      phone: values.phone,
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
      city: values.city,
      state: values.state,
      country: values.country,
    };

    OrganisationProfileService.updateOrganisationProfileDetailsById(OrgProfileDetails).then((res) =>{
      console.log("Sent Successfully");
    });
    console.log(OrgProfileDetails)

    submitProps.setSubmitting(false)
  };

  render() {
    
    

    const FORM_VALIDATION = Yup.object().shape({
      orgName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email.").required("Required"),
      phone: Yup.number()
        .integer()
        .typeError("Please enter a valid phone number")
        .required("Required"),
      addressLine1: Yup.string().required("Required"),
      addressLine2: Yup.string(),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
    });
    
    return (
     <>

            <Formik
              initialValues={{
                
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={this.onSubmit}
              enableReinitialize
            >
              {(formik) => (
                <div>
                  <Card className="regform">
                    <h1 className="regheading">Donor Form</h1>
                    <Form>
                      <FormikControl
                        control="input"
                        label="Organisation Name"
                        name="orgName"
                        type="text"
                      />
                       <FormikControl
                        control="input"
                        label="Phone Number"
                        name="phone"
                        type="number"
                      />
                      <FormikControl
                        control="input"
                        label="Email"
                        name="email"
                        type="email"
                      />
                      <FormikControl
                        control="input"
                        label="Address Line 1"
                        name="addressLine1"
                        type="text"
                      />
                      <FormikControl
                        control="input"
                        label="Address Line 2"
                        name="addressLine2"
                        type="text"
                      />
                      <FormikControl
                        control="input"
                        label="City"
                        name="city"
                        type="text"
                      />
                      <FormikControl
                        control="input"
                        label=" State "
                        name="state"
                        type="text"
                      />
                      <FormikControl
                        control="input"
                        label="Country"
                        name="country"
                        type="text"
                      />

                      <button className="regbtn" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                        Save
                      </button>
                    </Form>
                  </Card>
                </div>
              )}
            </Formik>
</>
    );
  }
}
