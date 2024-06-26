import { Icon } from "@material-ui/core";

import { Link } from "react-router-dom";
import { Container, Row, List } from "reactstrap";
import "./Footer.css";
import React, { Component } from "react";
import styled from "styled-components";
export default class Footer extends Component {
  render() {
    const FooterLink = styled.a``;
    return (
      <>
        <footer className="footer">
          <Container className="container">
            <Row className="row">
              <List className="footer-col">
                <List>
                  <h4>company</h4>
                </List>
                <ul>
                  <li>
                    <Link to="#">about us</Link>
                  </li>
                  <li>
                    <Link to="#">our services</Link>
                  </li>
                  <li>
                    <Link to="#">privacy policy</Link>
                  </li>
                  <li>
                    <Link to="#">affiliate program</Link>
                  </li>
                </ul>
              </List>
              <List className="footer-col">
                <List>
                  <h4>get help</h4>
                </List>

                <ul>
                  <li>
                    <Link to="#">FAQ</Link>
                  </li>
                  <li>
                    <Link to="#">abc</Link>
                  </li>
                  <li>
                    <Link to="#">order status</Link>
                  </li>
                  <li>
                    <Link to="#">payment options</Link>
                  </li>
                </ul>
              </List>
              <List className="footer-col">
                <List>
                  <h4>online shop</h4>
                </List>
                <ul>
                  <li>
                    <Link to="#">Donate</Link>
                  </li>
                  <li>
                    <Link to="#">Volunteer</Link>
                  </li>
                  <li>
                    <Link to="#">contact us</Link>
                  </li>
                  <li>
                    <Link to="#">bufaalo</Link>
                  </li>
                </ul>
              </List>
              <List className="footer-col">
                <List>
                  <h4>follow us</h4>
                </List>
                <List className="social-links">
                  <ul>
                    <li>
                      <FooterLink to="#">
                        <Icon className="fab fa-facebook-f"></Icon>
                      </FooterLink>
                    </li>
                    <li>
                      <FooterLink href="">
                        <Icon className="fab fa-twitter"></Icon>
                      </FooterLink>
                    </li>
                    <li>
                      <FooterLink href="https://instagram.com/kush.sanjana">
                        <Icon className="fab fa-instagram"></Icon>
                      </FooterLink>
                    </li>
                    <li>
                      <FooterLink to="#">
                        <Icon className="fab fa-linkedin-in"></Icon>
                      </FooterLink>
                    </li>
                  </ul>
                </List>
              </List>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}
