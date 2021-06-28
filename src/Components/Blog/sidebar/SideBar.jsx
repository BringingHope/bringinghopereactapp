import React, { useState, useEffect } from "react";
import "./SideBar.css";
import Cards from "../Cards/Cards";
import blogPost from "../../../data/blog.json";
import { NavLink } from "react-router-dom";
// import { Card } from "reactstrap";

/**
 * @author
 * @function Sidebar
 **/

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div
      className="sidebarContainer"
      style={{
        width: "27%",
      }}
    >
      {/* <Cards
        style={{
          marginBottom: "20px",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer"></div>
        <div className="cardBody">
          <p className="personalBio">
            My name is sanjana I am a software developer specialization in Front
            end developement....:)
          </p>
        </div>
      </Cards> */}

      <Cards
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Cards>

      <Cards
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>trending Posts</span>
        </div>

        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink
                className="recentpostlink"
                key={post.id}
                to={`/post/${post.id}`}
              >
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Cards>
      <Cards
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink
                className="recentpostlink"
                key={post.id}
                to={`/post/${post.id}`}
              >
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Cards>
    </div>
  );
};

export default Sidebar;
