import React from "react";
import "./BlogHome.css";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import blogData from "../../data/blog.json";
import Layout from "../Layout/Layout";
import RecentPost from "../Blog/RecentPost/RecentPost";

const SideImage = (props) => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="" />
    </div>
  );
};

const ImageGallary = (props) => (
  <div className="gallaryPost" style={props.gallaryStyle}>
    <section style={{ width: props.largeWidth }}>
      <div className="mainImageWrapper">
        <img src={props.imagesArray[1]} alt="" />
      </div>
    </section>
    <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
      {props.imagesArray.map((image) => (
        <SideImage height={props.sideImageHeight} src={image} alt="" />
      ))}
    </section>
  </div>
);

const BlogHome = (props) => {
  const gallaryHeight = 450;
  const gallaryStyle = {
    height: gallaryHeight + "px",
    overflow: "hidden",
  };
  const sideImageHeight = gallaryHeight / 3;
  const imgAr = blogData.data.map((post) => post.blogImage);
  return (
    <div>
      <Header />
      <Cards>
        <ImageGallary
          largeWidth="70%"
          smallWidth="30%"
          sideImageHeight={sideImageHeight}
          gallaryStyle={gallaryStyle}
          imagesArray={imgAr}
        />
      </Cards>
      <Layout>
        <RecentPost style={{ width: "70%" }} />
      </Layout>
    </div>
  );
};
export default BlogHome;
