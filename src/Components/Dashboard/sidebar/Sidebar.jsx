import React, { Component } from "react";
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent} from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaUserAlt, FaHandsHelping } from "react-icons/fa";
import { BiMenu, BiLogOut } from "react-icons/bi";
import { GrShieldSecurity } from "react-icons/gr";
import { MdEvent } from "react-icons/md";
import { logout } from "../../../actions/auth";
import { clearMessage } from "../../../actions/message";
import { history } from '../../../helpers/history';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import OrganisationDashboardService from "../../../services/OrganisationDashboardService";

class Sidebar extends Component {


  constructor(props) {
    super(props)

    this.state = {
      menuCollapse: false,
      currentUser: undefined, 
      organisations:[]
    }
    this.logOut = this.logOut.bind(this);
    this.menuIconClick = this.menuIconClick.bind(this);

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }
  
  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
     OrganisationDashboardService.getOrganisationDetailsByToken().then((res)=>{
      this.setState({organisations: res.data})
    });
  
  }

  menuIconClick = () => {
    this.state.menuCollapse ? this.setState({menuCollapse: false}) : this.setState({menuCollapse: true}) ;
  };

  logOut() {
    this.props.dispatch(logout());
  }

 

  render() {

    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <div id="header">
          <ProSidebar collapsed={this.state.menuCollapse}>
            <SidebarHeader >
              <div className="logotext">
                <p >{this.state.menuCollapse ? "Logo" : "Big Logo"}</p>
              </div>
              <div className="closemenu" onClick={this.menuIconClick}>
               {this.state.menuCollapse ? <BiMenu /> : <BiMenu />}
              </div>
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem active={true} icon={<FaUserAlt />} >
                  <NavLink className="menulink" exact to={`dashboard/profile/${this.state.organisations.id}/${this.state.organisations.organisationName}`} >
                    Profile
                  </NavLink>
                </MenuItem>
                <MenuItem active={true} icon={<MdEvent />} >
                  <NavLink className="menulink" exact to={`dashboard/events/${this.state.organisations.id}/${this.state.organisations.organisationName}`} >
                    Events
                  </NavLink>
                </MenuItem>
                <MenuItem active={true} icon={<RiMoneyDollarBoxFill />} >
                  <NavLink className="menulink" exact to={`dashboard/donorlist/${this.state.organisations.id}/${this.state.organisations.organisationName}`}  >
                    Donor List
                  </NavLink>
                </MenuItem>
                <MenuItem active={true} icon={<FaHandsHelping />}>
                  <NavLink className="menulink" exact to={`dashboard/volunteerlist/${this.state.organisations.id}/${this.state.organisations.organisationName}`}>
                    Volunteer List
                  </NavLink>
                </MenuItem>
                <MenuItem active={true} icon={<GrShieldSecurity />} >
                  <NavLink className="menulink" exact to={`dashboard/volunteerlist/${this.state.organisations.id}/${this.state.organisations.organisationName}`} >
                    Security
                  </NavLink>
                </MenuItem>
                <MenuItem active={true} icon={<BiLogOut />} onClick={this.logOut}>
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
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Sidebar);