import { Icon } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

/**
 * @author
 * @function Navbar
 **/

const Header = (props) => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Searhed");
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <div>
      <div className="navbarh">
        <ul className="navbarMenu">
          <ul>
            <li>
              <NavLink to="/blog">Home</NavLink>
            </li>

            <li>
              <NavLink to="/blog/bloghome">Posts</NavLink>
            </li>
          </ul>
        </ul>
        <div className="search">
          <form onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="Search" />

            <Icon
              onClick={openSearch}
              className="fa fa-search"
              area-hidden="true"
            ></Icon>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
