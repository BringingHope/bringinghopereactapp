import React, { Component } from "react";
import { storage } from "../../Firebase/firebaseConfig";
import { FiPlusCircle } from "react-icons/fi";
import "./Profile.css";
import { Row } from "react-bootstrap";
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
    const uplo = {
      display: "none",
      visibility: "none",
    };
    return (
      <div>
        <br />
        <Row>
          <div>
            <img
              className="logongo"
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
          </div>

          <label htmlFor="custom" className="customers">
            <h2 className="orglogoo">
              <FiPlusCircle />
            </h2>
          </label>
          <div className="orgdiv">
            <button
              type="button"
              className="orgbtn1"
              onClick={this.handleUpload}
            >
              <i className="fas fa-cloud-upload-alt"></i>
              Upload
            </button>
          </div>
          <br />
        </Row>
      </div>
    );
  }
}

export default OrgLogo;
