import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { NavLink, withRouter } from "react-router-dom";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";

import { FaUserAlt } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import "react-pro-sidebar/dist/css/styles.css";
import "./DashBoard1.css";

const DashBoard1 = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FaUserAlt />}>
                <NavLink className="menulink" to="/dash/profile" exact>
                  Profile
                </NavLink>
              </MenuItem>
              <MenuItem active={true} icon={<MdEvent />}>
                <NavLink className="menulink" to="/dash/profile" exact>
                  Events
                </NavLink>
              </MenuItem>
              <MenuItem active={true} icon={<FaUserAlt />}>
                <NavLink className="menulink" to="/dash/profile" exact>
                  Donar List
                </NavLink>
              </MenuItem>
              <MenuItem active={true} icon={<FaUserAlt />}>
                <NavLink className="menulink" to="/dash/profile" exact>
                  Volunteer List
                </NavLink>
              </MenuItem>
              <MenuItem active={true} icon={<FaUserAlt />}>
                <NavLink className="menulink" to="/dash/profile" exact>
                  Security
                </NavLink>
              </MenuItem>
              <MenuItem active={true} icon={<FaUserAlt />}>
                <NavLink className="menulink" to="/dash/profile" exact>
                  Logout
                </NavLink>
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default DashBoard1;
