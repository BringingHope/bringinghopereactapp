import React from "react";
import "./Blog.css";
import { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Sidebar from "../sidebar/SideBar";
import RecentPost from "./RecentPost/RecentPost";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import blogData from "../../data/blog.json";
import Layout from "../Layout/Layout";

const Blog = (props) => {
  return (
    <>
      <Header />
      <Layout>
        <RecentPost style={{ width: "70%" }} />
      </Layout>
    </>
  );
};

export default Blog;
