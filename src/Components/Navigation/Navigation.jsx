import React, { useEffect } from "react";
import "./Navigation.css";
import { NavLink, withRouter } from "react-router-dom";
import $ from "jquery";
import { Icon } from "@material-ui/core";

function Navigation(props) {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <>
      <div className="head">.</div>
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <NavLink className="navbar-brand navbar-logo" to="/" exact>
          <img className="img1" src="./img/lg.jpg" alt=" BHO " />
        </NavLink>

        <button
          className="navbar-toggler"
          onClick={function () {
            setTimeout(function () {
              animation();
            });
          }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon className="fas fa-bars text-black"></Icon>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i className="fas fa-tachometer-alt"></i>Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i className="far fa-address-book"></i>About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/list" exact>
                <i className="far fa-address-book"></i>List
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i className="far fa-chart-bar"></i>Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" exact>
                <i className="far fa-copy"></i>Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login" exact>
                <i className="far fa-copy"></i>Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div></div>
    </>
  );
}

export default withRouter(Navigation);
