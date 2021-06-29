import React, { Component } from "react";
import DashBoard1 from "../DashBoard1/DashBoard1";
import { Container } from "@material-ui/core";
import "./Profile.css";
export default class Profile extends Component {
  render() {
    return (
      <>
        <DashBoard1 />
        <Container className="Profilepage">
          hello profile Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati odit incidunt magnam reiciendis. Rerum officia, officiis,
          proiure debitis veritatis dignissimos tenetur vitae nemo perspiciatis!
          vident itaque facilis sunt omnis possimus
        </Container>
      </>
    );
  }
}
