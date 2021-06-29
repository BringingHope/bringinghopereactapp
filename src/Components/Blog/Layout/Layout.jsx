import "./Layout.css";
import Sidebar from "../sidebar/SideBar";
import { Container } from "@material-ui/core";

import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="containerl">
            {this.props.children}
            <Sidebar />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
