import React, { Component } from "react";
import DashBoard1 from "../sidebar/Sidebar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Card, CardText, Container, Row } from "reactstrap";
import { Col } from "reactstrap";
import "./Events.css";
import FormikControl from "../../../formUiComponents/FormikControl";
import OrganisationProfileService from "../../../services/OrganisationDashboardService";
import ImageUpload from "../Profile/ImageUpload";
import { CardBody } from "reactstrap";

export default class OrganisationEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",

      OrgProfileDetails: {
        eventname: "",
        AboutEvent: "",
        startDate: null,
        endDate: null,

        //events nd updates
        update1: "",
        update2: "",
        update3: "",
        //volunteers
        volunteer1: "",
        volunteer2: "",
        volunteer3: "",
        phone: "",
        email: "",
        addressLine1: "",
        addressLine2: "",
      },
    };
  }

  componentDidMount() {
    OrganisationProfileService.getOrganisationProfileDetailsById(
      this.state.id
    ).then((res) => {
      let orgDetails = res.data;
      this.setState({
        eventname: orgDetails.OrgProfileDetails.eventname,
        startDate: orgDetails.OrgProfileDetails.startDate,
        endDate: orgDetails.OrgProfileDetails.endDate,
        update1: orgDetails.OrgProfileDetails.update1,
        update2: orgDetails.OrgProfileDetails.update2,
        update3: orgDetails.OrgProfileDetails.update3,
        volunteer1: orgDetails.OrgProfileDetails.volunteer1,
        volunteer2: orgDetails.OrgProfileDetails.volunteer2,
        volunteer3: orgDetails.OrgProfileDetails.volunteer3,
        phone: orgDetails.OrgProfileDetails.phone,
        email: orgDetails.OrgProfileDetails.email,
        addressLine1: orgDetails.OrgProfileDetails.addressLine1,
        addressLine2: orgDetails.OrgProfileDetails.addressLine2,
      });
    });
  }

  onSubmit = (values, submitProps) => {
    let OrgProfileDetails = {
      eventname: values.eventname,
      AboutEvent: values.AboutEvent,
      startDate: values.startDate,
      endDate: values.endDate,
      update1: values.update1,
      update2: values.update2,
      update3: values.update3,
      volunteer1: values.volunteer1,
      volunteer2: values.volunteer2,
      volunteer3: values.volunteer3,
      phone: values.phone,
      email: values.email,
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
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
      eventname: Yup.string(),
      AboutEvent: Yup.string(),
      startDate: Yup.date().required("Required").nullable(),
      endDate: Yup.date().required("Required").nullable(),
      update1: Yup.string(),
      update2: Yup.string(),
      update3: Yup.string(),
      volunteer1: Yup.string(),
      volunteer2: Yup.string(),
      volunteer3: Yup.string(),
      phone: Yup.number()
        .integer()
        .typeError("Please enter a valid phone number")
        .required("Required"),
      email: Yup.string().email("Invalid email.").required("Required"),
      addressLine1: Yup.string().required("Required"),
      addressLine2: Yup.string(),
    });

    return (
      <>
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
                    name="eventname"
                    type="work"
                  />
                  <Card body className="Reach">
                    ABOUT EVENT
                  </Card>
                  <Card className="text-center">
                    <CardBody className="orgacre">
                      <FormikControl
                        rows="15"
                        control="textarea"
                        label=""
                        name="AboutEvent"
                        type="work"
                      />
                    </CardBody>
                  </Card>
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
