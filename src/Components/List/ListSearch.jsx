import React, { useState } from "react";
import "./List.css";
import Pagination from "./Pagination";
import { Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Row, Card } from "react-bootstrap";
import { CardText } from "reactstrap";
import SingleOrganisation from "./SingleOrganisation";
function ListSearch(props) {
  const dataList = [
    {
      id: 1,
      organisationName: "cerulean",
      year: 2000,
      color: "#98B2D1",
      pantone_value: "15-4020",
    },
    {
      id: 2,
      organisationName: "fuchsia rose",
      year: 2001,
      color: "#C74375",
      pantone_value: "17-2031",
    },
    {
      id: 3,
      organisationName: "true red",
      year: 2002,
      color: "#BF1932",
      pantone_value: "19-1664",
    },
    {
      id: 4,
      organisationName: "aqua sky",
      year: 2003,
      color: "#7BC4C4",
      pantone_value: "14-4811",
    },
    {
      id: 5,
      organisationName: "tigerlily",
      year: 2004,
      color: "#E2583E",
      pantone_value: "17-1456",
    },
    {
      id: 6,
      organisationName: "blue turquoise",
      year: 2005,
      color: "#53B0AE",
      pantone_value: "15-5217",
    },
    {
      id: 7,
      organisationName: "sand dollar",
      year: 2006,
      color: "#DECDBE",
      pantone_value: "13-1106",
    },
    {
      id: 8,
      organisationName: "chili pepper",
      year: 2007,
      color: "#9B1B30",
      pantone_value: "19-1557",
    },
    {
      id: 9,
      organisationName: "blue iris",
      year: 2008,
      color: "#5A5B9F",
      pantone_value: "18-3943",
    },
    {
      id: 10,
      organisationName: "mimosa",
      year: 2009,
      color: "#F0C05A",
      pantone_value: "14-0848",
    },
    {
      id: 11,
      organisationName: "turquoise",
      year: 2010,
      color: "#45B5AA",
      pantone_value: "15-5519",
    },
    {
      id: 12,
      organisationName: "honeysuckle",
      year: 2011,
      color: "#D94F70",
      pantone_value: "18-2120",
    },
    {
      id: 13,
      organisationName: "cerulean",
      year: 2000,
      color: "#98B2D1",
      pantone_value: "15-4020",
    },
    {
      id: 14,
      organisationName: "fuchsia rose",
      year: 2001,
      color: "#C74375",
      pantone_value: "17-2031",
    },
    {
      id: 15,
      organisationName: "true red",
      year: 2002,
      color: "#BF1932",
      pantone_value: "19-1664",
    },
    {
      id: 16,
      organisationName: "aqua sky",
      year: 2003,
      color: "#7BC4C4",
      pantone_value: "14-4811",
    },
    {
      id: 17,
      organisationName: "tigerlily",
      year: 2004,
      color: "#E2583E",
      pantone_value: "17-1456",
    },
    {
      id: 18,
      organisationName: "blue turquoise",
      year: 2005,
      color: "#53B0AE",
      pantone_value: "15-5217",
    },
    {
      id: 19,
      organisationName: "sand dollar",
      year: 2006,
      color: "#DECDBE",
      pantone_value: "13-1106",
    },
    {
      id: 20,
      organisationName: "chili pepper",
      year: 2007,
      color: "#9B1B30",
      pantone_value: "19-1557",
    },
    {
      id: 21,
      organisationName: "blue iris",
      year: 2008,
      color: "#5A5B9F",
      pantone_value: "18-3943",
    },
    {
      id: 22,
      organisationName: "mimosa",
      year: 2009,
      color: "#F0C05A",
      pantone_value: "14-0848",
    },
    {
      id: 23,
      organisationName: "turquoise",
      year: 2010,
      color: "#45B5AA",
      pantone_value: "15-5519",
    },
    {
      id: 24,
      organisationName: "honeysuckle",
      year: 2011,
      color: "#D94F70",
      pantone_value: "18-2120",
    },
  ];

  const viewOrganisation = (id, organisationName) => {
    props.history.push(`/view/${organisationName}/${id}`);
  };
  const volunteer = (id, organisationName) => {
    props.history.push(`/volunteer/${organisationName}/${id}`);
  };
  const donate = (id, organisationName) => {
    props.history.push(`/donate/${organisationName}/${id}`);
  };

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  // exclude column list from filter
  //   const excludeColumns = ["id", "color"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter((item) => {
        return Object.keys(item).some((key) =>
          //   excludeColumns.includes(key)
          //     ? false
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  return (
    <>
      <Container>
        <Container>
          <div body className="Reach">
            <h1>Organisation List</h1>
          </div>
          <hr />
          Search:{" "}
          <input
            style={{ marginLeft: 5 }}
            type="text"
            placeholder="Type to search..."
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
          />
          <hr />
          <div className="box-container">
            {data.map((d, i) => {
              return (
                <Card className="cardlist" key={i}>
                  <img
                    src="https://cdn.pixabay.com/photo/2018/08/16/11/36/mentor-3610255__340.jpg"
                    className="card-img-top"
                  />
                  <div className="listbuttons">
                    <CardText className="listTitle">
                      {d.organisationName}
                    </CardText>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras enim diam, bibendum eget ante semper, imperdiet
                      iaculis urna. Morbi risus tellus, bibendum ac sollicitudin
                      vitae, mollis quis tellus. Curabitur et odio a justo
                      mattis iaculis. In rhoncus ullamcorper porta. In vel ipsum
                      lorem. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                    <button
                      onClick={() => donate(d.id, d.organisationName)}
                      className="btn btn-info m-2"
                    >
                      Donate
                    </button>

                    <button
                      onClick={() => volunteer(d.id, d.organisationName)}
                      className="btn btn-danger m-2"
                    >
                      Volunteer
                    </button>
                    <button
                      onClick={() => viewOrganisation(d.id, d.organisationName)}
                      className="btn btn-success m-2"
                    >
                      view
                    </button>
                  </div>
                </Card>
              );
            })}
            <div className="clearboth"></div>
            {data.length === 0 && <span>No records found to display!</span>}
          </div>
        </Container>
      </Container>
    </>
  );
}

export default ListSearch;
