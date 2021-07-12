import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, AboutUs, Contact, List, Blog, BlogHome } from "./Components";
import Post1 from "./Components/Blog/Post/Post1";
import RegistrationForm from "./Components/registrationForm/RegistrationForm";
import DonorForm from "./Components/donorForm/DonorForm";
import VolunteerForm from "./Components/volunteerForm/VolunteerForm";
import Login from "./Components/loginForm/Login";
import PhoneOtpVerification from "./Components/phoneNumberVerification/PhoneOtpVerification";
import OrganisationProfile from "./Components/Dashboard/Profile/OrganisationProfile";
import Sidebar from "./Components/Dashboard/sidebar/Sidebar";
import { DonorListTable } from "./Components/Dashboard/list/donorList/DonorListTable";
import { VolunteerListTable } from "./Components/Dashboard/list/volunteerList/VolunteerListTable";
import { history } from './redux/helpers/history';
import { connect } from "react-redux";
import SecurityForm from "./Components/Dashboard/security/SecurityForm";
import ForgotPasswordForm from "./Components/forgotPassword/ForgotPasswordForm";
import ResetPasswordForm from "./Components/forgotPassword/ResetPasswordForm";
import OrganisationEvents from "./Components/Dashboard/Events/OrganisationEvents";

import ListSearch from "./Components/List/ListSearch";

function App() {
  // const { tokendata } = this.props;

  return (


    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/dashboard" render={(props) => <Sidebar  {...props} />} />
          <Route exact path="/dashboard/profile/:id/:organisationName" render={(props) => <OrganisationProfile  {...props} />} />
          <Route exact path="/dashboard/events/:id/:organisationName" render={(props) => <OrganisationEvents  {...props} />} />
          <Route exact path="/dashboard/donorlist/:id/:organisationName" render={(props) => < DonorListTable {...props} />} />
          <Route exact path="/dashboard/volunteerlist/:id/:organisationName" render={(props) => <VolunteerListTable  {...props} />} />
          <Route exact path="/dashboard/security/:id/:organisationName" render={(props) => <SecurityForm  {...props} />} />
          <Route exact path="/registration" component={() => <RegistrationForm />} />
          <Route exact path="/donate/:organisationName/:id" render={(props) => <DonorForm {...props} />} />
          <Route exact path="/volunteer/:organisationName/:id" render={(props) => <VolunteerForm {...props} />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/forgotPassword" component={() => <ForgotPasswordForm />} />
          {/* <Route exact path={`resetPassword/confirmToken/${tokendata.token}`} component={() => <ResetPasswordForm />} /> */}
          <div>
            <Navigation />
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/about" component={() => <AboutUs />} />
            <Route exact path="/contact" component={() => <Contact />} />
            <Route exact path="/list" component={() => <List />} />
            <Route exact path="/list/search" render={(props) => <ListSearch  {...props} />} />
            <Route exact path="/blog" component={() => <BlogHome />} />
            <Route exact path="/blog/bloghome" component={() => <Blog />} />
            <Route exact path="/post/:postId" component={Post1} />
            <Route exact path="/OtpVerification" component={() => <PhoneOtpVerification />} />
            <Footer />
          </div>
        </Switch>
      </Router>
    </div>

  );
}

function mapStateToProps(state) {

  return {
    tokendata: state.forgotPassword,
  };
}

export default connect(mapStateToProps)(App);
