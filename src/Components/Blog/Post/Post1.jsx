import React, { Component } from "react";
import "./Post1.css";
import Header from "../Header/Header";
import BlogPost from "../BlogPost/BlogPost";
import Layout from "../Layout/Layout";

export default class Post1 extends Component {
  render() {
    return (
      <>
        <Header />
        <Layout>
          <BlogPost {...this.props} />
        </Layout>
      </>
    );
  }
}
