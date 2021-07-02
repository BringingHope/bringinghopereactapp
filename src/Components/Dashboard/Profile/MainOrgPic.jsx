import React, { Component } from "react";
import { storage } from "../../Firebase/firebaseConfig";
import "./Profile.css";
import { FcPlus } from "react-icons/fc";

class MainOrgPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgimage: null,
      url: "",
      progress: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = (e) => {
    if (e.target.files[0]) {
      const orgimage = e.target.files[0];
      this.setState(() => ({ orgimage }));
    }
  };
  handleUpload = () => {
    const { orgimage } = this.state;
    const uploadTask = storage.ref(`orgimages/${orgimage.name}`).put(orgimage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("orgimages")
          .child(orgimage.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };
  render() {
    const style = {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };
    const upload = {
      display: "none",
      visibility: "none",
    };
    return (
      <div style={style}>
        <progress
          className="progress-bar"
          value={this.state.progress}
          max="100"
        />

        <label for="firstmain">
          <h1>
            <FcPlus />
          </h1>
        </label>
        <input
          type="file"
          id="firstmain"
          style={upload}
          onChange={this.handleChange}
        />
        <button className="buttonorg" onClick={this.handleUpload}>
          <i className="fas fa-cloud-upload-alt"></i>
          Upload
        </button>
        <br />
        <img
          src={this.state.url || "http://via.placeholder.com/700x500"}
          alt="Uploaded orgimages"
          height="500"
          width="700"
        />
      </div>
    );
  }
}

export default MainOrgPic;
