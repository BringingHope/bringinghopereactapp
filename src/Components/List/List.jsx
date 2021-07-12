import React, { Component } from "react";
import OrganisationListService from "../../services/OrganisationListService";
import "./List.css";
import Pagination from "./Pagination";

import SingleOrganisation from "./SingleOrganisation";
class List extends Component {
  state = {
    lists: [],
    loading: false,
    currentPage: 1,
    listsPerPage: 2,
  };

  componentDidMount() {
    OrganisationListService.getOrganisations().then((res) => {
      this.setState({ loading: true });
      this.setState({ lists: res.data });
      this.setState({ loading: false });
    });
  }

  render() {
    const { currentPage, listsPerPage, lists, loading } = this.state;

    const indexOfLastList = currentPage * listsPerPage;
    const indexOfFirstList = indexOfLastList - listsPerPage;
    const currentLists = lists.slice(indexOfFirstList, indexOfLastList);

    const paginate = (pageNum) => this.setState({ currentPage: pageNum });

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });
    return (
      <>
        <div className="container">
          <SingleOrganisation lists={currentLists} loading={loading} />
          <Pagination
            listsPerPage={listsPerPage}
            totalLists={lists.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </>
    );
  }
}
export default List;
