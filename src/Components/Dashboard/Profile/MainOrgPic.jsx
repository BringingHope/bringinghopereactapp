import React, { Component } from "react";
import { storage } from "../../Firebase/firebaseConfig";
import "./Profile.css";
import { FiPlusCircle } from "react-icons/fi";

class MainOrgPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgcoverimage: null,
      url: "",
      progress: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = (e) => {
    if (e.target.files[0]) {
      const orgcoverimage = e.target.files[0];
      this.setState(() => ({ orgcoverimage }));
    }
  };
  handleUpload = () => {
    const { orgcoverimage } = this.state;
    const uploadTask = storage
      .ref(`orgcoverimages/${orgcoverimage.name}`)
      .put(orgcoverimage);
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
          .ref("orgcoverimages")
          .child(orgcoverimage.name)
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    };
    const upload = {
      display: "none",
      visibility: "none",
    };
    return (
      <div style={style}>
        <img
          src={this.state.url || "http://via.placeholder.com/1140x300"}
          alt="Uploaded orgcoverimages"
          height="300"
          width="100%"
        />
        <input
          type="file"
          id="firstmain"
          style={upload}
          onChange={this.handleChange}
        />
        <div className="covorg">
          <label htmlFor="firstmain">
            <h1 className="orglogoo1">
              <FiPlusCircle />
            </h1>
          </label>
          <button className="covbtn" onClick={this.handleUpload}>
            <i className="fas fa-cloud-upload-alt"></i>
            Upload
          </button>
        </div>
      </div>
    );
  }
}

export default MainOrgPic;
