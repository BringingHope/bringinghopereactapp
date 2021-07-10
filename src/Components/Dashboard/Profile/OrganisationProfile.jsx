import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./Profile.css";
import { Col, Card, CardText, CardBody, Container, Row } from "reactstrap";
import ImageUpload from "./ImageUpload";
import FormikControl from "../../../formUiComponents/FormikControl";
import OrganisationProfileService from "../../../services/OrganisationDashboardService";
import MainOrgPic from "./MainOrgPic";
import OrgLogo from "./OrgLogo";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "../sidebar/Sidebar";

class OrganisationProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",

      OrgProfileDetails: {
        orgName: "",
        AboutOrg: "",
        //our work
        education: "",
        health: "",
        covid: "",
        //our reach
        States: "",
        project: "",
        village: "",
        //events nd updates
        update1: "",
        update2: "",
        update3: "",
        //awards and recognition
        acreditation: "",
        awards: "",
        suppSpeech: "",

        //volunteers
        volunteer1: "",
        volunteer2: "",
        volunteer3: "",
        email: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
      },
    };
  }

  componentDidMount() {
    OrganisationProfileService.getOrganisationProfileDetailsById(
      this.state.id
    ).then((res) => {
      let orgDetails = res.data;
      this.setState({
        orgName: orgDetails.OrgProfileDetails.orgName,
        AboutOrg: orgDetails.OrgProfileDetails.AboutOrg,
        education: orgDetails.OrgProfileDetails.education,
        health: orgDetails.OrgProfileDetails.health,
        covid: orgDetails.OrgProfileDetails.covid,

        States: orgDetails.OrgProfileDetails.States,
        project: orgDetails.OrgProfileDetails.project,
        village: orgDetails.OrgProfileDetails.village,
        update1: orgDetails.OrgProfileDetails.update1,
        update2: orgDetails.OrgProfileDetails.update2,
        update3: orgDetails.OrgProfileDetails.update3,
        acreditation: orgDetails.OrgProfileDetails.acredential,
        awards: orgDetails.OrgProfileDetails.awards,
        suppSpeech: orgDetails.OrgProfileDetails.suppSpeech,
        volunteer1: orgDetails.OrgProfileDetails.volunteer1,
        volunteer2: orgDetails.OrgProfileDetails.volunteer2,
        volunteer3: orgDetails.OrgProfileDetails.volunteer3,

        email: orgDetails.OrgProfileDetails.email,
        phone: orgDetails.OrgProfileDetails.phone,
        addressLine1: orgDetails.OrgProfileDetails.addressLine1,
        addressLine2: orgDetails.OrgProfileDetails.addressLine2,
        city: orgDetails.OrgProfileDetails.city,
        state: orgDetails.OrgProfileDetails.state,
        country: orgDetails.OrgProfileDetails.country,
      });
    });
  }

  onSubmit = (values, submitProps) => {
    let OrgProfileDetails = {
      orgName: values.orgName,
      AboutOrg: values.AboutOrg,
      education: values.education,
      health: values.health,
      covid: values.covid,
      States: values.States,
      project: values.project,
      village: values.village,
      update1: values.update1,
      update2: values.update2,
      update3: values.update3,
      acreditation: values.acredential,
      awards: values.awards,
      suppSpeech: values.suppSpeech,

      volunteer1: values.volunteer1,
      volunteer2: values.volunteer2,
      volunteer3: values.volunteer3,

      phone: values.phone,
      email: values.email,
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
      city: values.city,
      state: values.state,
      country: values.country,
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
    const { user: currentUser } = this.props;

    // if (!currentUser) {
    //   return <Redirect to="/login" />;
    // }

    const FORM_VALIDATION = Yup.object().shape({
      orgName: Yup.string().required("Required"),
      AboutOrg: Yup.string(),
      education: Yup.string(),
      health: Yup.string(),
      covid: Yup.string(),
      States: Yup.string(),
      project: Yup.string(),
      village: Yup.string(),
      update1: Yup.string(),
      update2: Yup.string(),
      update3: Yup.string(),
      acreditation: Yup.string(),
      awards: Yup.string(),
      suppSpeech: Yup.string(),
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
      city: Yup.string(),
      state: Yup.string(),
      country: Yup.string(),
    });

    return (
      <>
        <Sidebar />
        <Formik
          initialValues={{}}
          validationSchema={FORM_VALIDATION}
          onSubmit={this.onSubmit}
          enableReinitialize
        >
          {(formik) => (
            <div>
              <h1 className="regheading">Organisation Profile</h1>
              <Form>
                <Container>
                  <Card body className="orgname">
                    <MainOrgPic />
                    <Card>
                      <OrgLogo />

                      <h3 className="Reach1">ORGANISATION NAME</h3>
                      <div className="text-center">
                        <CardBody>
                          <FormikControl
                            rows="3"
                            control="textarea"
                            label=""
                            name="orgName"
                            type="work"
                          />
                        </CardBody>
                      </div>
                    </Card>
                  </Card>

                  <Card body className="Reach">
                    ABOUT ORGANISATION
                  </Card>
                  <Card className="text-center">
                    <CardBody className="orgacre">
                      <FormikControl
                        rows="15"
                        control="textarea"
                        label=""
                        name="AboutOrg"
                        type="work"
                      />
                    </CardBody>
                  </Card>
                  <Card body className="Reach">
                    OUR WORK
                  </Card>
                  <Row>
                    <Col className="cardbody-org" sm="4">
                      <Card body className="card-org">
                        <FormikControl
                          rows="25"
                          control="textarea"
                          label="Education"
                          name="education"
                          type="work"
                        />
                      </Card>
                    </Col>
                    <Col className="cardbody-org" sm="4">
                      <Card body className="card-org">
                        <FormikControl
                          rows="25"
                          control="textarea"
                          label="Health"
                          name="health"
                          type="work"
                        />
                      </Card>
                    </Col>
                    <Col className="cardbody-org" sm="4">
                      <Card body className="card-org">
                        <FormikControl
                          rows="25"
                          control="textarea"
                          label="Covid Relief"
                          name="covid"
                          type="work"
                        />
                      </Card>
                    </Col>
                  </Row>
                  <div>
                    <Card body className="Reach">
                      OUR REACH
                    </Card>
                    <Container className="containero">
                      <div className="cardo">
                        <Card className="boxo">
                          <CardBody className="contento">
                            <FormikControl
                              control="input"
                              label="States"
                              name="States"
                              type="reach"
                            />
                          </CardBody>
                        </Card>
                      </div>
                      <div className="cardo">
                        <Card className="boxo">
                          <CardBody className="contento">
                            <FormikControl
                              control="input"
                              label="Events/Projects"
                              name="project"
                              type="reach"
                            />
                          </CardBody>
                        </Card>
                      </div>
                      <div className="cardo">
                        <Card className="boxo">
                          <CardBody className="contento">
                            <FormikControl
                              control="input"
                              label="Villages"
                              name="village"
                              type="reach"
                            />
                          </CardBody>
                        </Card>
                      </div>
                    </Container>
                  </div>

                  <Card body className="Reach">
                    EVENTS AND UPDATES
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
                    ACCREDITATIONS
                  </Card>
                  <Card className="text-center">
                    <CardBody className="orgacre">
                      <FormikControl
                        rows="15"
                        control="textarea"
                        label=""
                        name="acreditation"
                        type="work"
                      />
                    </CardBody>
                  </Card>
                  <Card body className="Reach">
                    AWARDS/RECOGNITION
                  </Card>
                  <Card className="text-center">
                    <CardBody className="orgacre">
                      <FormikControl
                        rows="15"
                        control="textarea"
                        label=""
                        name="award"
                        type="work"
                      />
                    </CardBody>
                  </Card>
                  <Card body className="Reach">
                    SUPPORTERS SPEECH
                  </Card>
                  <Card className="text-center">
                    <CardBody className="orgacre">
                      <FormikControl
                        rows="15"
                        control="textarea"
                        label=""
                        name="suppSpeech"
                        type="work"
                      />
                    </CardBody>
                  </Card>

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
                          <FormikControl
                            control="input"
                            label="City"
                            name="city"
                            type="text"
                          />
                          <FormikControl
                            control="input"
                            label="State"
                            name="state"
                            type="text"
                          />
                          <FormikControl
                            control="input"
                            label="Country"
                            name="country"
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
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(OrganisationProfile);
