import React, { Component } from "react";
import { storage } from "../../Firebase/firebaseConfig";
import { RiImageAddFill } from "react-icons/ri";
class OrgLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orglogo: null,
      url: "",
      progress: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = (e) => {
    if (e.target.files[0]) {
      const orglogo = e.target.files[0];
      this.setState(() => ({ orglogo }));
    }
  };
  handleUpload = () => {
    const { orglogo } = this.state;
    const uploadTask = storage.ref(`orglogos/${orglogo.name}`).put(orglogo);
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
          .ref("orglogos")
          .child(orglogo.name)
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
      // height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };
    const uplo = {
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
        <br />

        <img
          src={this.state.url || "http://via.placeholder.com/100x100"}
          alt="Uploaded orglogos"
          height="100"
          width="100"
        />
        <input
          type="file"
          name=""
          id="custom"
          style={uplo}
          onChange={this.handleChange}
        />
        <label for="custom" className="customers">
          <h2>
            <RiImageAddFill />
          </h2>
        </label>
        {/* <input type="file" onChange={this.handleChange} /> */}
        <button className="buttonorg" onClick={this.handleUpload}>
          <i className="fas fa-cloud-upload-alt"></i>
          Upload
        </button>
        <br />
      </div>
    );
  }
}

export default OrgLogo;
