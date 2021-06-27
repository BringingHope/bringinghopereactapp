import React from "react";
import "./Layout.css";
import Sidebar from "../sidebar/SideBar";
import { Container } from "@material-ui/core";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <React.Fragment>
      <Container>
        <div className="containerl">
          {props.children}
          <Sidebar />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
