import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaUserAlt, FaHandsHelping } from "react-icons/fa";
import { BiMenu, BiLogOut } from "react-icons/bi";
import { GrShieldSecurity } from "react-icons/gr";
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
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <BiMenu /> : <BiMenu />}
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
                <NavLink className="menulink" to="/dash/events" exact>
                  Events
                </NavLink>
              </MenuItem>
              <MenuItem active={true} icon={<RiMoneyDollarBoxFill />}>
                <NavLink className="menulink" to="/dash/profile" exact>
                  Donor List
                </NavLink>
              </MenuItem>
              <MenuItem active={true} icon={<FaHandsHelping />}>
                <NavLink className="menulink" to="/dash/profile" exact>
                  Volunteer List
                </NavLink>
              </MenuItem>
              <MenuItem active={true} icon={<GrShieldSecurity />}>
                <NavLink className="menulink" to="/dash/profile" exact>
                  Security
                </NavLink>
              </MenuItem>
              <MenuItem active={true} icon={<BiLogOut />}>
                <NavLink className="menulink" onClick={this.logOut} to="/login" exact>
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