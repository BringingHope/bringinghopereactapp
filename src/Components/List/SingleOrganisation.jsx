import React, { Component } from "react";

import { Container } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CardText } from "reactstrap";
import "./List.css";
export class SingleOrganisation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      // filter: "",
    };

    this.viewOrganisation = this.viewOrganisation.bind(this);
    this.volunteer = this.volunteer.bind(this);
    this.donate = this.donate.bind(this);
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
  searchTxt(e) {
    this.setState({ filter: e.target.value });
  }
  render() {
    // let { filter, list } = this.state;
    // let DataSearch = list.filter((lists) => {
    //   return Object.keys(lists).some((key) =>
    //     lists[key].toLowerCase().includes(filter.toLowerCase())
    //   );
    // });
    const { lists, loading } = this.props;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div>
        <Container>
          <Container>
            <div body className="Reach">
              <h1>Organisation List</h1>
            </div>
            <hr />
            <ul className="navbarMenu">
              <ul>
                <li>
                  <Link to="/list/search">Search</Link>
                </li>
              </ul>
            </ul>

            {/* Search:{" "}
            <input
              type="text"
              onChange={this.searchTxt.bind(this)}
              placeholder="Search..."
            /> */}
            <hr />
            {lists.map((lists) => (
              <Card className="cardlist" key={lists.id}>
                <img
                  src="./img/woman-5716038_1920.jpg"
                  alt=""
                  className="card-img-top"
                />
                <div className="listbuttons">
                  <CardText className="listTitle">
                    {lists.organisationName}
                  </CardText>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras enim diam, bibendum eget ante semper, imperdiet iaculis
                    urna. Morbi risus tellus, bibendum ac sollicitudin vitae,
                    mollis quis tellus. Curabitur et odio a justo mattis
                    iaculis. In rhoncus ullamcorper porta. In vel ipsum lorem.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button
                    onClick={() =>
                      this.donate(lists.id, lists.organisationName)
                    }
                    className="btn btn-info m-2"
                  >
                    Donate
                  </button>

                  <button
                    onClick={() =>
                      this.volunteer(lists.id, lists.organisationName)
                    }
                    className="btn btn-danger m-2"
                  >
                    Volunteer
                  </button>
                  <button
                    onClick={() =>
                      this.viewOrganisation(lists.id, lists.organisationName)
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
      </div>
    );
  }
}

export default withRouter(SingleOrganisation);
