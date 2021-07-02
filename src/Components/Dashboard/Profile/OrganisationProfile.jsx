import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./Profile.css";
import { Card, CardText, CardBody, Container, Row } from "reactstrap";
import { Col } from "reactstrap";
import ImageUpload from "./ImageUpload";
import FormikControl from "../../../formUiComponents/FormikControl";
import OrganisationProfileService from "../../../services/OrganisationProfileService";
import DashBoard1 from "../DashBoard1/DashBoard1";
import MainOrgPic from "./MainOrgPic";
import OrgLogo from "./OrgLogo";
export default class OrganisationProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",

      OrgProfileDetails: {
        orgName: "",
        email: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        AboutOrg: "",
        //our reach
        States: "",
        project: "",
        village: "",
        //our work
        education: "",
        health: "",
        covid: "",
        //events nd updates
        update1: "",
        update2: "",
        update3: "",
        //awards and recognition
        acreditation: "",
        awards: "",
        suppSpeech: "",
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
        email: orgDetails.OrgProfileDetails.email,
        phone: orgDetails.OrgProfileDetails.phone,
        addressLine1: orgDetails.OrgProfileDetails.addressLine1,
        addressLine2: orgDetails.OrgProfileDetails.addressLine2,
        city: orgDetails.OrgProfileDetails.city,
        state: orgDetails.OrgProfileDetails.state,
        country: orgDetails.OrgProfileDetails.country,
        AboutOrg: orgDetails.OrgProfileDetails.AboutOrg,
        States: orgDetails.OrgProfileDetails.States,
        project: orgDetails.OrgProfileDetails.project,
        village: orgDetails.OrgProfileDetails.village,
        education: orgDetails.OrgProfileDetails.education,
        health: orgDetails.OrgProfileDetails.health,
        covid: orgDetails.OrgProfileDetails.covid,
        acreditation: orgDetails.OrgProfileDetails.acredential,
        awards: orgDetails.OrgProfileDetails.awards,
        suppSpeech: orgDetails.OrgProfileDetails.suppSpeech,
        update1: orgDetails.OrgProfileDetails.update1,
        update2: orgDetails.OrgProfileDetails.update2,
        update3: orgDetails.OrgProfileDetails.update3,
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
      AboutOrg: values.AboutOrg,
      States: values.States,
      project: values.project,
      village: values.village,
      education: values.education,
      health: values.health,
      covid: values.covid,
      acreditation: values.acredential,
      awards: values.awards,
      suppSpeech: values.suppSpeech,
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
      AboutOrg: Yup.string(),
      States: Yup.string(),
      project: Yup.string(),

      village: Yup.string(),
      acreditation: Yup.string(),
      awards: Yup.string(),
      suppSpeech: Yup.string(),
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
              <h1 className="regheading">Organisation Profile</h1>
              <Form>
                <Container>
                  <Card body className="orgname">
                    <MainOrgPic />
                    <h5>Organisation Cover Pic</h5>
                  </Card>
                  <Card body className="orgname1">
                    <OrgLogo />
                    <h5>Organisation logo</h5>
                  </Card>
                  <Card body className="Reach">
                    ORGANISATION NAME
                  </Card>
                  <Card className="text-center">
                    <CardBody className="orgacre">
                      <FormikControl
                        rows="3"
                        control="textarea"
                        label=""
                        name="orgName"
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
                        fullWidth
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
                        fullWidth
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
                        fullWidth
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
                            name="update1"
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
                            name="update2"
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
                            label="contact details"
                            name="update3"
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
                            label="City"
                            name="city"
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
                            label="City"
                            name="city"
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
