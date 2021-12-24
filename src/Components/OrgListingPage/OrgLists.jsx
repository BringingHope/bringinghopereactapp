import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import JsonData from "../../data/orgData.json";
import "./List.css";
import ReactPaginate from "react-paginate";
import { Container } from "@material-ui/core";
import { Card } from "react-bootstrap";
import { CardText } from "reactstrap";


export const OrgLists = (props) => {

//     const organisations = useSelector(state => state.orgList.organisations)
//   const dispatchcall = useDispatch()
  
//   useEffect(() => {
//     dispatchcall(getOrganisations());
//   }, [])

    const [organisations, setOrganisations] = useState(JsonData.slice(0, 50));
    
    
    const [pageNumber, setPageNumber] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;
    const viewOrganisation = (id, organisationName) => {
        props.history.push(`/view/${organisationName}/${id}`);
    }
    const volunteer = (id, organisationName) => {
        props.history.push(`/volunteer/${organisationName}/${id}`);
    }
    const donate = (id, organisationName) => {
        props.history.push(`/donate/${organisationName}/${id}`);
    }

    const pageCount = Math.ceil(organisations.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <div>
            <Container>
                <Container>
                    <div body className="Reach">
                        <h1>Organisation List</h1>
                    </div>
                    <hr />
                    <input
                        type="text"
                        placeholder="search"
                        onChange={(e) => { setSearchTerm(e.target.value) }}
                    />
                    {organisations
                        .slice(pagesVisited, pagesVisited + usersPerPage)
                        .filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.orgName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }
                        )
                        .map((organisations) =>
                            <Card className="cardlist" key={organisations.id}>
                                <img
                                    src={organisations.orgImage}
                                    alt=""
                                    className="card-img-top"
                                />
                                <div className="listbuttons">
                                    <CardText className="listTitle">
                                        {organisations.orgName}
                                    </CardText>
                                    <p>
                                        {organisations.aboutOrg}
                                    </p>
                                    <button
                                        onClick={() =>
                                            donate(organisations.organisationId, organisations.orgName)
                                        }
                                        className="btn btn-info m-2"
                                    >
                                        Donate
                                    </button>

                                    <button
                                        onClick={() =>
                                            volunteer(organisations.organisationId, organisations.orgName)
                                        }
                                        className="btn btn-danger m-2"
                                    >
                                        Volunteer
                                    </button>
                                    <button
                                        onClick={() =>
                                            viewOrganisation(organisations.organisationId, organisations.orgName)
                                        }
                                        className="btn btn-success m-2"
                                    >
                                        view
                                    </button>
                                </div>
                            </Card>
                        )}
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </Container>
            </Container>
        </div>
    )
}

export default OrgLists

