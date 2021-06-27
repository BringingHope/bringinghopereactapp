import { Icon } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../Slider/ImageSlider";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Container,
} from "reactstrap";
import "./ContactUs.css";
export default class Contact extends Component {
  render() {
    return (
      <>
        <img className="mainpicab" src="./img/asia-1853267_1920.jpg" alt="" />
        <div className="contactc">
          <Container className="contactcontentc">
            <h2>Contact us</h2>
            <p>
              wrewtert fyuy djakf his is a longer card with supporting text
              below as a natural lead-in to additional content. This content is
              a little bit longer.his is a longer card with supporting text
              below as a natural lead-in to additional content. This is a longer
              card with supporting text below as
            </p>
          </Container>
          <Container className="containerc">
            <Row className="contactinfo">
              <Container className="boxc">
                <Container>
                  <img className="iconc" src="./img/location.png" alt="" />
                </Container>
                <Row className="textc">
                  <h3>Address</h3>
                  <p>
                    wrewrtry ,<br />
                    yuufreg ,<br />
                    adhuhre dHJ
                  </p>
                </Row>
              </Container>
              <Container className="boxc">
                <Container>
                  <img className="iconc" src="./img/phn.png" alt="" />
                  <Row className="textc">
                    <h3>Phone</h3>
                    <p>
                      wrewrtry ,<br />
                      yuufreg ,<br />
                      adhuhre dHJ
                    </p>
                  </Row>
                </Container>
              </Container>
              <Container className="boxc">
                <Container>
                  <img className="iconc" src="./img/mail.png" alt="" />
                </Container>
                <Row className="textc">
                  <h3>Email</h3>
                  <p>
                    wrewrtry ,<br />
                    yuufreg ,<br />
                    adhuhre dHJ
                  </p>
                </Row>
              </Container>
            </Row>
            <Container className="contactform">
              <Form>
                <h2>Send message</h2>
                <FormGroup>
                  <Label className="inputbox" for="inputbox">
                    Full Name
                  </Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                  <Label className="inputbox" for="inputbox">
                    Email
                  </Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                  <Label className="inputbox" for="inputbox">
                    Message
                  </Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>

                <Button className="btnc">Submit</Button>

                <Row className="social-links">
                  <div>
                    <Link to="#">
                      <Icon className="fab fa-facebook-f"></Icon>
                    </Link>
                    <Link to="#">
                      <Icon className="fab fa-twitter"></Icon>
                    </Link>
                    <Link to="#">
                      <Icon className="fab fa-instagram"></Icon>
                    </Link>
                    <Link to="#">
                      <Icon className="fab fa-linkedin-in"></Icon>
                    </Link>
                  </div>
                </Row>
              </Form>
            </Container>
          </Container>
        </div>
        <div className="sliderab">
          <Container>
            <h2 className="mission">Join Our Mission</h2>
            <ImageSlider />
          </Container>
        </div>
      </>
    );
  }
}
