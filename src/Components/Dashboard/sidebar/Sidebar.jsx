import React, { Component } from "react";
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaUserAlt, FaHandsHelping } from "react-icons/fa";
import { BiMenu, BiLogOut } from "react-icons/bi";
import { GrShieldSecurity } from "react-icons/gr";
import { MdEvent } from "react-icons/md";
import { logout } from "../../../redux/authentication/authActions";
import { clearMessage } from "../../../redux/message/messageActions";
import { history } from '../../../redux/helpers/history';
import { connect } from "react-redux";
import { getOrganisationDetailsByToken } from "../../../redux";
import { Redirect } from 'react-router-dom';
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuCollapse: false,
    }
    this.LogOut = this.LogOut.bind(this);
    this.menuIconClick = this.menuIconClick.bind(this);

    history.listen((location) => {
      this.props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    this.props.dispatch(getOrganisationDetailsByToken());
  }

  menuIconClick = () => {
    this.state.menuCollapse
      ? this.setState({ menuCollapse: false })
      : this.setState({ menuCollapse: true });
  };

  LogOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { isLoggedIn, userdata } = this.props;
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return userdata.loading ? (
      <h2>Loading</h2>
    ) : userdata.error ? (
      <h2>{userdata.error}</h2>
    ) :(
      <>
        <div id="header">
          <ProSidebar collapsed={this.state.menuCollapse}>
            <SidebarHeader>
              <div className="logotext">
                <p>{this.state.menuCollapse ? "Logo" : "Big Logo"}</p>
              </div>
              <div className="closemenu" onClick={this.menuIconClick}>
                {this.state.menuCollapse ? <BiMenu /> : <BiMenu />}
              </div>
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem active={true} icon={<FaUserAlt />} >
                  <NavLink className="menulink" exact to={`dashboard/profile/${userdata.userdetails.id}/${userdata.userdetails.organisationName}`} >
                    Profile
                  </NavLink>
                </MenuItem>
                <MenuItem active={true} icon={<MdEvent />} >
                  <NavLink className="menulink" exact to={`dashboard/events/${userdata.userdetails.id}/${userdata.userdetails.organisationName}`} >
                    Events
                  </NavLink>
                </MenuItem>
                <MenuItem active={true} icon={<RiMoneyDollarBoxFill />} >
                  <NavLink className="menulink" exact to={`dashboard/donorlist/${userdata.userdetails.id}/${userdata.userdetails.organisationName}`}  >
                    Donor List
                  </NavLink>
                </MenuItem>
                <MenuItem active={true} icon={<FaHandsHelping />}>
                  <NavLink className="menulink" exact to={`dashboard/volunteerlist/${userdata.userdetails.id}/${userdata.userdetails.organisationName}`}>
                    Volunteer List
                  </NavLink>
                </MenuItem>
                <MenuItem active={true} icon={<GrShieldSecurity />} >
                  <NavLink className="menulink" exact to={`dashboard/security/${userdata.userdetails.id}/${userdata.userdetails.organisationName}`} >
                    Security
                  </NavLink>
                </MenuItem>
                <MenuItem active={true} icon={<BiLogOut />} onClick={this.LogOut}>
                  <NavLink className="menulink" exact to='/login' >
                    Logout
                  </NavLink>
                </MenuItem>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
      </>
    );
  }
};
const mapStateToProps = state => {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;

  return {
    userdata : state.organisationdetails,
    isLoggedIn,
    message,

  }
}

export default connect(mapStateToProps)(Sidebar);