import React, { Component } from "react";
import "./Login.css";
export default class Login extends Component {
  render() {
    return (
      <>
        <div className="login">
          <div className="container">
            <div CassName="row align-items-center my-5">
              <div CassName="col-lg-7">
                <img
                  CassName="img-fluid rounded mb-4 mb-lg-0"
                  src="http://placehold.it/900x400"
                  alt=""
                />
              </div>
              <div CassName="col-lg-5">
                <h1 CassName="font-weight-light">Login</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
