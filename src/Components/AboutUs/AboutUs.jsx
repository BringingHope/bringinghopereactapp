import "./AboutUs.css";
import { CardBody, CardImg } from "reactstrap";
import { Card, CardTitle, CardText, Container, Row, Col } from "reactstrap";
import { Carousel } from "react-bootstrap";
import ImageSlider from "./Slider/ImageSlider";
import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="Corlog"
              src="./img/children-2704878_1920.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Corlog"
              src="./img/old-1701626_1920.jpg"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Corlog"
              src="./img/woman-5716038_1920.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="clients">
          <div className="containerd">
            <div className="row">
              <div className="col-3">
                <div className="client">
                  <h1>120</h1>
                  <p>No of NGOs</p>
                </div>
              </div>
              <div className="col-3">
                <div className="client">
                  <h1>58</h1>
                  <p>Donars</p>
                </div>
              </div>
              <div className="col-3">
                <div className="client">
                  <h1>14868</h1>
                  <p>Reach/States</p>
                </div>
              </div>
              <div className="col-3">
                <div className="client">
                  <h1>2031</h1>
                  <p>Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row>
          <Col className="card-body" sm="6">
            <Card body className="card-ab">
              <CardTitle tag="h5">WHO WE ARE?</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content.With supporting text below as a natural
                lead-in to additional content.With supporting text below as a
                natural lead-in to additional content.With supporting text below
                as a natural lead-in to additional content.With supporting text
                below as a natural lead-in to additional content.With supporting
                text below as a natural lead-in to additional content.
              </CardText>
            </Card>
          </Col>
          <Col className="card-body" sm="6">
            <Card body className="card-ab">
              <CardTitle tag="h5">OUR VISION</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="card-body" sm="6">
            <Card body className="card-ab">
              <CardTitle tag="h5">OUR MISSION</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content.With supporting text below as a natural
                lead-in to additional content.With supporting text below as a
                natural lead-in to additional content.With supporting text below
                as a natural lead-in to additional content.With supporting text
                below as a natural lead-in to additional content.With supporting
                text below as a natural lead-in to additional content.
              </CardText>
            </Card>
          </Col>
          <Col className="card-body" sm="6">
            <Card body className="card-ab">
              <CardTitle tag="h5">HOW WE DO?</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
        </Row>
        <Container className="team-section mt-5" id="team">
          <Container className="container">
            <Row className="text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </Row>

            <Row className="row">
              <Row className="col-lg-6">
                <Card className="team-member box">
                  <Card className="img-box">
                    <CardImg src="./img/girl.png" alt="" />
                  </Card>
                  <CardBody className="content">
                    <h4 className="text-dark">Jessica Chan</h4>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Rerum, tempora!
                    </p>
                  </CardBody>
                </Card>
              </Row>
              {/* <Row></Row> */}
              <Row className="col-lg-6">
                <Card className="team-member box">
                  <Card className="img-box">
                    <CardImg src="./img/boy.png" alt="" />
                  </Card>
                  <CardBody className="content">
                    <h4 className="text-color">Jack smith</h4>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Rerum, tempora!
                    </p>
                  </CardBody>
                </Card>
              </Row>
            </Row>
          </Container>
        </Container>
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
