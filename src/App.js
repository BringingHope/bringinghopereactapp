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
import Events from "./Components/Dashboard/Events/Events"
import {DonorListTable} from "./Components/Dashboard/list/donorList/DonorListTable";
import {VolunteerListTable} from "./Components/Dashboard/list/volunteerList/VolunteerListTable";
import { history } from './helpers/history';

function App() {
  return (<>

    <div className="App">
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <AboutUs />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/list" exact component={() => <List />} />
          <Route path="/blog" exact component={() => <BlogHome />} />
          <Route path="/blog/bloghome" exact component={() => <Blog />} />
          <Route path="/post/:postId" component={Post1} />
          <Route path="/dashboard" exact component={() => <Sidebar />} />
          <Route path="/dashboard/profile/:id/:organisationName" exact component={() => <OrganisationProfile />} />
          <Route path="/dashboard/events/:id/:organisationName" exact component={() => <Events />} />
          <Route path="/dashboard/donorlist/:id/:organisationName" exact component={() => < DonorListTable/>} />
          <Route path="/dashboard/volunteerlist/:id/:organisationName" exact component={() => <VolunteerListTable />} />
          <Route path="/registration" exact component={() => <RegistrationForm />} />
          <Route path="/donate/:organisationName/:id" exact component={() => <DonorForm />} />
          <Route path="/volunteer/:organisationName/:id" exact component={() => <VolunteerForm />} />
          <Route path="/Login" exact component={() => <Login />} />
          <Route path="/OtpVerification" exact component={() => <PhoneOtpVerification />} />

        </Switch>
        <Footer />
      </Router>
    </div>
  </>
  );
}

export default App;
