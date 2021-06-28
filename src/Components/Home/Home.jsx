import "./Home.css";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  Container,
  Row,
} from "reactstrap";
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "700px",
            objectFit: "cover",

            zIndex: "-1",
          }}
        >
          <source src="./img/baby.mp4" type="video/mp4" />
        </video>
        <div>
          <Container className="containerh">
            <div className="cardh">
              <Card className="boxh">
                <CardBody className="contenth">
                  <CardText className="cardsh">Donars Donated</CardText>
                  <h2 className="btnh">233445</h2>
                </CardBody>
              </Card>
            </div>
            <div className="cardh">
              <Card className="boxh">
                <CardBody className="contenth">
                  <CardText className="cardsh">Volunteers joined</CardText>
                  <h2 className="btnh">12000</h2>
                </CardBody>
              </Card>
            </div>
            <div className="cardh">
              <Card className="boxh">
                <CardBody className="contenth">
                  <CardText className="cardsh">Oraganisations Joined</CardText>
                  <h2 className="btnh">1200</h2>
                </CardBody>
              </Card>
            </div>
          </Container>
        </div>

        <Container className="container1">
          <div className="card1">
            <Card className="box1">
              <CardBody className="content1">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-success"></i>
                  <i className="fas fa-tshirt fa-stack-1x fa-inverse"></i>
                </span>

                <CardText className="cards1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  quae natus adipisci excepturi facere,
                </CardText>
                <Button className="btn1">donate</Button>
              </CardBody>
            </Card>
          </div>
          <div className="card1">
            <Card className="box1">
              <CardBody className="content1">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-warning"></i>
                  <i className="fas fa-lightbulb fa-stack-1x fa-inverse"></i>
                </span>

                <CardText className="cards1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  quae natus adipisci excepturi facere,
                </CardText>
                <Button className="btn1">donate</Button>
              </CardBody>
            </Card>
          </div>

          <div className="card1">
            <Card className="box1">
              <CardBody className="content1">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-danger"></i>
                  <i className="fas fa-hand-holding-usd fa-stack-1x fa-inverse"></i>
                </span>

                <CardText className="cards1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  quae natus adipisci excepturi facere,
                </CardText>
                <Button className="btn1">donate</Button>
              </CardBody>
            </Card>
          </div>
        </Container>

        <Container className="about">
          <Container className="container">
            <Row className="row align-items-center my-5">
              <div className="col-lg-7">
                <CardImg
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src="./img/asia-1853267_1920.jpg"
                  alt=""
                />

                <Row></Row>
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">About Us</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div>
                  <Button className="button">Join as NGO</Button>
                </div>
              </div>
            </Row>
          </Container>
        </Container>
        <Container className="about">
          <Container className="container">
            <Row className="row align-items-center my-5">
              <div className="col-lg-5">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div>
                  <Button className="button">Join as NGO</Button>
                </div>
              </div>
              <div className="col-lg-7">
                <CardImg
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src="./img/children-2704878_1920.jpg"
                  alt=""
                />

                <Row></Row>
              </div>
            </Row>
          </Container>
        </Container>
        <Container className="about">
          <Container className="container">
            <Row className="row align-items-center my-5">
              <div className="col-lg-7">
                <CardImg
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src="./img/old-1701626_1920.jpg"
                  alt=""
                />

                <Row></Row>
              </div>
              <div className="col-lg-5">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div>
                  <Button className="button">Join as NGO</Button>
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}
