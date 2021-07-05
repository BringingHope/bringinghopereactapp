import React, { Component } from "react";
import DashBoard1 from "../sidebar/Sidebar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {Col, Card, CardText, CardBody, Container, Row } from "reactstrap";
import "./Events.css";
import FormikControl from "../../../formUiComponents/FormikControl";
import OrganisationProfileService from "../../../services/OrganisationDashboardService";
import ImageUpload from "../Profile/ImageUpload";



export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",

      OrgProfileDetails: {
        email: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        //events nd updates
        update1: "",
        update2: "",
        update3: "",
        //volunteers
        volunteer1: "",
        volunteer2: "",
        volunteer3: "",
        endDate: null,
        startDate: null,
      },
    };
  }

  componentDidMount() {
    OrganisationProfileService.getOrganisationProfileDetailsById(
      this.state.id
    ).then((res) => {
      let orgDetails = res.data;
      this.setState({
        email: orgDetails.OrgProfileDetails.email,
        phone: orgDetails.OrgProfileDetails.phone,
        addressLine1: orgDetails.OrgProfileDetails.addressLine1,
        addressLine2: orgDetails.OrgProfileDetails.addressLine2,
        update1: orgDetails.OrgProfileDetails.update1,
        update2: orgDetails.OrgProfileDetails.update2,
        update3: orgDetails.OrgProfileDetails.update3,
        volunteer1: orgDetails.OrgProfileDetails.volunteer1,
        volunteer2: orgDetails.OrgProfileDetails.volunteer2,
        volunteer3: orgDetails.OrgProfileDetails.volunteer3,
        endDate: orgDetails.OrgProfileDetails.endDate,
        startDate: orgDetails.OrgProfileDetails.startDate,
      });
    });
  }

  onSubmit = (values, submitProps) => {
    let OrgProfileDetails = {
      email: values.email,
      phone: values.phone,
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
      endDate: values.endDate,
      startDate: values.startDate,
      volunteer1: values.volunteer1,
      volunteer2: values.volunteer2,
      volunteer3: values.volunteer3,
      update1: values.update1,
      update2: values.update2,
      update3: values.update3,
    };

    OrganisationProfileService.updateOrganisationProfileDetailsById(
      OrgProfileDetails
    ).then((res) => {
      console.log("Sent Successfully");
    });
    console.log(OrgProfileDetails);

    submitProps.setSubmitting(false);
  };

  render() {
    const FORM_VALIDATION = Yup.object().shape({
      email: Yup.string().email("Invalid email.").required("Required"),
      phone: Yup.number()
        .integer()
        .typeError("Please enter a valid phone number")
        .required("Required"),
      addressLine1: Yup.string().required("Required"),
      addressLine2: Yup.string(),
      startDate: Yup.date().required("Required").nullable(),
      endDate: Yup.date().required("Required").nullable(),
      volunteer1: Yup.string(),
      volunteer2: Yup.string(),
      volunteer3: Yup.string(),
      update1: Yup.string(),
      update2: Yup.string(),
      update3: Yup.string(),
    });

    return (
      <>
        <DashBoard1 />
        <Formik
          initialValues={{}}
          validationSchema={FORM_VALIDATION}
          onSubmit={this.onSubmit}
          enableReinitialize
        >
          {(formik) => (
            <div>
              <h1 className="regheading">Add Events</h1>
              <Form>
                <Container>
                  <Card body className="Reach">
                    Event Name
                  </Card>
                  <FormikControl
                    rows="3"
                    control="textarea"
                    label=""
                    name="update3"
                    type="work"
                  />
                  <Card body className="Reach">
                    Start Date
                  </Card>
                  <FormikControl
                    control="date"
                    label="Pick a date"
                    name="startDate"
                    type="date"
                  />
                  <Card body className="Reach">
                    End Date
                  </Card>
                  <FormikControl
                    control="date"
                    label="Pick a date"
                    name="startDate"
                    type="date"
                  />

                  <Card body className="Reach">
                    EVENT PICS AND DESCRIPTION
                  </Card>
                  <div>
                    <Row>
                      <Col className="cardbody-org" sm="4">
                        <Card body className="card-org">
                          <FormikControl
                            rows="25"
                            control="textarea"
                            label=""
                            name="update1"
                            type="work"
                          />
                          <ImageUpload />
                        </Card>
                      </Col>
                      <Col className="cardbody-org" sm="4">
                        <Card body className="card-org">
                          <FormikControl
                            rows="25"
                            control="textarea"
                            label=""
                            name="update2"
                            type="work"
                          />
                          <ImageUpload />
                        </Card>
                      </Col>
                      <Col className="cardbody-org" sm="4">
                        <Card body className="card-org">
                          <FormikControl
                            rows="25"
                            control="textarea"
                            label=""
                            name="update3"
                            type="work"
                          />
                          <ImageUpload />
                        </Card>
                      </Col>
                    </Row>
                  </div>
                  <Card body className="Reach">
                    OUR VOLUNTEERS
                  </Card>
                  <div>
                    <Row>
                      <Col className="cardbody-org" sm="4">
                        <Card body className="card-org">
                          <ImageUpload />
                          <FormikControl
                            rows="5"
                            control="textarea"
                            label="Conatct details"
                            name="volunteer1"
                            type="work"
                          />
                        </Card>
                      </Col>
                      <Col className="cardbody-org" sm="4">
                        <Card body className="card-org">
                          <ImageUpload />
                          <FormikControl
                            rows="5"
                            control="textarea"
                            label="Contact details"
                            name="volunteer2"
                            type="work"
                          />
                        </Card>
                      </Col>
                      <Col className="cardbody-org" sm="4">
                        <Card body className="card-org">
                          <ImageUpload />
                          <FormikControl
                            rows="5"
                            control="textarea"
                            label="Contact details"
                            name="volunteer3"
                            type="work"
                          />
                        </Card>
                      </Col>
                    </Row>
                  </div>
                  <Card body className="Reach">
                    CONTACT US
                  </Card>
                  <Row>
                    <Col sm="6">
                      <Card body className="card-org">
                        <CardText>
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
                        </CardText>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card body className="card-org">
                        <CardText>
                          <ImageUpload />
                        </CardText>
                      </Card>
                    </Col>
                  </Row>

                  <button
                    className="orgbtn"
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Save
                  </button>
                </Container>
              </Form>
            </div>
          )}
        </Formik>
      </>
    );
  }
}
