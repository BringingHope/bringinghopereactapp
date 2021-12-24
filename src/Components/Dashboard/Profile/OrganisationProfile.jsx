import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./Profile.css";
import { Col, Card, CardText, CardBody, Container, Row } from "reactstrap";
import ImageUpload from "./ImageUpload";
import FormikControl from "../../../formUiComponents/FormikControl";
import MainOrgPic from "./MainOrgPic";
import OrgLogo from "./OrgLogo";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { getOrganisationProfileDetailsById, updateOrganisationProfileDetailsById } from "../../../redux";


class OrganisationProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
    };
  }
  componentDidMount() {

    this.props.dispatch(getOrganisationProfileDetailsById(this.state.id));
  }

  onSubmit = (values, submitProps) => {
    let OrgProfileDetails = {
      organisationId: this.state.id,
      orgName: values.orgName,
      aboutOrg: values.aboutOrg,
      education: values.education,
      health: values.health,
      covid: values.covid,
      states: values.states,
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

    this.props
      .dispatch(
        
        updateOrganisationProfileDetailsById(this.state.id, OrgProfileDetails)
      )
      .then(() => {
        console.log("sent successfully");
        this.setState({
          successful: true,  
        });
        // window.location.reload();
      })
      .catch(() => {
        this.setState({
          successful: false,
        });
      });
      
    submitProps.setSubmitting(false)
  };

  render() {

    const { isLoggedIn, profiledata } = this.props;
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    const INITIAL_VALUES = {
      organisationId: profiledata.usersProfiledetails.organisationId!==null ? profiledata.usersProfiledetails.organisationId: "",
      orgName: profiledata.usersProfiledetails.orgName!==null ? profiledata.usersProfiledetails.orgName: "",
      aboutOrg: profiledata.usersProfiledetails.aboutOrg!==null ? profiledata.usersProfiledetails.aboutOrg: "",
      education: profiledata.usersProfiledetails.education!==null ? profiledata.usersProfiledetails.education: "",
      health: profiledata.usersProfiledetails.health!==null ? profiledata.usersProfiledetails.health: "",
      covid: profiledata.usersProfiledetails.covid!==null ? profiledata.usersProfiledetails.covid: "",
      states: profiledata.usersProfiledetails.states!==null ? profiledata.usersProfiledetails.states: "",
      project: profiledata.usersProfiledetails.project!==null ? profiledata.usersProfiledetails.project: "",
      village: profiledata.usersProfiledetails.village!==null ? profiledata.usersProfiledetails.village: "",
      update1: profiledata.usersProfiledetails.update1!==null ? profiledata.usersProfiledetails.update1: "",
      update2: profiledata.usersProfiledetails.update2!==null ? profiledata.usersProfiledetails.update2: "",
      update3: profiledata.usersProfiledetails.update3!==null ? profiledata.usersProfiledetails.update3: "",
      acreditation: profiledata.usersProfiledetails.acreditation!==null ? profiledata.usersProfiledetails.acreditation: "",
      awards: profiledata.usersProfiledetails.awards!==null ? profiledata.usersProfiledetails.awards: "",
      suppSpeech: profiledata.usersProfiledetails.suppSpeech!==null ? profiledata.usersProfiledetails.suppSpeech: "",
      volunteer1: profiledata.usersProfiledetails.volunteer1!==null ? profiledata.usersProfiledetails.volunteer1: "",
      volunteer2: profiledata.usersProfiledetails.volunteer2!==null ? profiledata.usersProfiledetails.volunteer2: "",
      volunteer3: profiledata.usersProfiledetails.volunteer3!==null ? profiledata.usersProfiledetails.volunteer3: "",
      phone: profiledata.usersProfiledetails.phone!==null ? profiledata.usersProfiledetails.phone: "",
      email: profiledata.usersProfiledetails.email!==null ? profiledata.usersProfiledetails.email: "",
      addressLine1: profiledata.usersProfiledetails.addressLine1!==null ? profiledata.usersProfiledetails.addressLine1: "",
      addressLine2: profiledata.usersProfiledetails.addressLine2!==null ? profiledata.usersProfiledetails.addressLine2: ' ',
      city: profiledata.usersProfiledetails.city!==null ? profiledata.usersProfiledetails.city: "",
      state: profiledata.usersProfiledetails.state!==null ? profiledata.usersProfiledetails.state: "",
      country: profiledata.usersProfiledetails.country!==null ? profiledata.usersProfiledetails.country: "",
    }

  

    const FORM_VALIDATION = Yup.object().shape({
      orgName: Yup.string().required("Required"),
      // aboutOrg: Yup.string(),
      // education: Yup.string(),
      // health: Yup.string(),
      // covid: Yup.string(),
      // states: Yup.string(),
      // project: Yup.string(),
      // village: Yup.string(),
      // update1: Yup.string(),
      // update2: Yup.string(),
      // update3: Yup.string(),
      // acreditation: Yup.string(),
      // awards: Yup.string(),
      // suppSpeech: Yup.string(),
      // volunteer1: Yup.string(),
      // volunteer2: Yup.string(),
      // volunteer3: Yup.string(),
      phone: Yup.number()
        .integer()
        .typeError("Please enter a valid phone number")
        .required("Required"),
      email: Yup.string().email("Invalid email.").required("Required"),
      addressLine1: Yup.string().required("Required"),
      // addressLine2: Yup.string(),
      // city: Yup.string(),
      // state: Yup.string(),
      // country: Yup.string(),
    });
    return profiledata.loading ? (
      <h2>Loading</h2>
    ) : profiledata.error ? (
      <h2>{profiledata.error}</h2>
    ) : (
      <>
        <Formik
          initialValues={INITIAL_VALUES}
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
                        name="aboutOrg"
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
                              name="states"
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
                  {profiledata.message && (
                    <div className="form-group">
                      <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                        {profiledata.message}
                      </div>
                    </div>
                  )}
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
  const { isLoggedIn } = state.auth;
  return {
    profiledata: state.orgProfileDetails,
    isLoggedIn,
  };
}

export default connect(mapStateToProps)(OrganisationProfile);
