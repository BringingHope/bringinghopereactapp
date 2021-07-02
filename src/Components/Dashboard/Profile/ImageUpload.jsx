import React, { Component } from "react";
import { storage } from "../../Firebase/firebaseConfig";
import "./Profile.css";
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventimage: null,
      url: "",
      progress: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = (e) => {
    if (e.target.files[0]) {
      const eventimage = e.target.files[0];
      this.setState(() => ({ eventimage }));
    }
  };
  handleUpload = () => {
    const { eventimage } = this.state;
    const uploadTask = storage
      .ref(`eventimages/${eventimage.name}`)
      .put(eventimage);
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
          .ref("eventimages")
          .child(eventimage.name)
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
    return (
      <div style={style}>
        <progress
          className="progress-bar"
          value={this.state.progress}
          max="100"
        />
        <br />

        <input type="file" onChange={this.handleChange} />
        <button className="buttonorg" onClick={this.handleUpload}>
          <i className="fas fa-cloud-upload-alt"></i>
          Upload
        </button>
        <br />
        <img
          src={this.state.url || "http://via.placeholder.com/400x300"}
          alt="Uploaded eventimages"
          height="300"
          width="300"
        />
      </div>
    );
  }
}

export default ImageUpload;
