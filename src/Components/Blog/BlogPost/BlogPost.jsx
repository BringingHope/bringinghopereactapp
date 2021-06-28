import React, { useState, useEffect } from "react";
import "./BlogPost.css";
import Cards from "../Cards/Cards";
import blogPost from "../../../data/blog.json";
import { post } from "jquery";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  const [postId, setPostId] = useState("");
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find((post) => post.id == postId);
    setPost(post);
    setPostId(postId);
  }, [post, props.match.params.postId]);

  if (post.blogImage == "") return null;

  return (
    <>
      <div className="blogPostContainer">
        <Cards>
          <div className="blogHeader">
            <span className="blogCategory">{post.blogCategory}</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span className="postedBy">
              posted on {post.postedOn} by{post.author}
            </span>
          </div>

          <div className="postImageContainer">
            <img src={post.blogImage} alt="Post Image" />
          </div>

          <div className="postContent">
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
          </div>
        </Cards>
      </div>
    </>
  );
};

export default BlogPost;
