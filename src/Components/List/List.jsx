import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ImageUpload from "../Dashboard/Profile/ImageUpload";
import OrganisationListService from "../../services/OrganisationListService";
import { Container } from "@material-ui/core";
import "./List.css";
import { Row, Card } from "react-bootstrap";
import { CardText } from "reactstrap";
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organisations: [],
    };
  }
  this.viewOrganisation = this.viewOrganisation.bind(this);
  this.volunteer = this.volunteer.bind(this);
  this.donate = this.donate.bind(this);

}

componentDidMount(){
  OrganisationListService.getOrganisations().then((res)=>{
    this.setState({organisations: res.data})
  });
}


  viewOrganisation(id, organisationName) {
    this.props.history.push(`/view/${organisationName}/${id}`);
  }
  volunteer(id, organisationName) {
    this.props.history.push(`/volunteer/${organisationName}/${id}`);
  }
  donate(id, organisationName) {
    this.props.history.push(`/donate/${organisationName}/${id}`);
  }

  render() {
    return (
      <>
        <Container>
          <Container>
            <div body className="Reach">
              <h1>Organisation List</h1>
            </div>

            {this.state.organisations.map((organisations) => (
              <Card key={organisations.id}>
                <img
                  src="./img/woman-5716038_1920.jpg"
                  className="card-img-top"
                />
                <div className="listbuttons">
                  <CardText className="listTitle">
                    {organisations.organisationName}
                  </CardText>

                  <button
                    onClick={() =>
                      this.donate(
                        organisations.id,
                        organisations.organisationName
                      )
                    }
                    className="btn btn-info m-2"
                  >
                    Donate
                  </button>

                  <button
                    onClick={() =>
                      this.volunteer(
                        organisations.id,
                        organisations.organisationName
                      )
                    }
                    className="btn btn-danger m-2"
                  >
                    Volunteer
                  </button>
                  <button
                    onClick={() =>
                      this.viewOrganisation(
                        organisations.id,
                        organisations.organisationName
                      )
                    }
                    className="btn btn-success m-2"
                  >
                    view
                  </button>
                </div>
              </Card>
            ))}
          </Container>
        </Container>
      </>
    );
  }
}
export default withRouter(List);
