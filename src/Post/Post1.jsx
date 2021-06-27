import React from "react";
import "./Post1.css";
import Header from "../Components/Header/Header";
import BlogPost from "../Components/BlogPost/BlogPost";
import Layout from "../Components/Layout/Layout";

/**
 * @author
 * @function Post
 **/

const Post1 = (props) => {
  console.log(props);

  return (
    <>
      <Header />
      <Layout>
        <BlogPost {...props} />
      </Layout>
    </>
  );
};

export default Post1;
