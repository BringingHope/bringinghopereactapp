import "./Blog.css";
import RecentPost from "./RecentPost/RecentPost";
import Header from "./Header/Header";
import Layout from "./Layout/Layout";
import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <>
        <Header />
        <Layout>
          <RecentPost style={{ width: "70%" }} />
        </Layout>
      </>
    );
  }
}
