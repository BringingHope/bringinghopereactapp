
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, AboutUs, Contact, List, Blog, BlogHome } from "./Components";
import Post1 from "./Components/Blog/Post/Post1";
import RegistrationForm from "./Components/registrationForm/RegistrationForm";
import DonorForm from "./Components/donorForm/DonorForm";
import VolunteerForm from "./Components/volunteerForm/VolunteerForm";
import LoginForm from "./Components/loginForm/LoginForm";
import PhoneOtpVerification from "./Components/phoneNumberVerification/PhoneOtpVerification";
import Profile from "./Components/Dashboard/Profile/OrganisationProfile";
import DashBoard1 from "./Components/Dashboard/DashBoard1/DashBoard1"
import Events from "./Components/Dashboard/Events/Events"

function App() {
  return (<>

    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <AboutUs />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/list" exact component={() => <List />} />
          <Route path="/blog" exact component={() => <BlogHome />} />
          <Route path="/blog/bloghome" exact component={() => <Blog />} />
          <Route path="/post/:postId" exact component={Post1} />
          <Route path="/dash" exact component={() => <DashBoard1 />} />
          <Route path="/dash/profile" exact component={() => <Profile />} />
          <Route path="/dash/events" exact component={() => <Events />} />
          {/* <Route path="/login" exact component={() => <Login />} /> */}
          <Route path="/dash" exact component={() => <DashBoard1 />} />
          <Route path="/dash/profile" exact component={() => <Profile />} />
          <Route path="/registration" exact component={() => <RegistrationForm />} />
          <Route path="/donorForm" exact component={() => <DonorForm />} />
          <Route path="/volunteerForm" exact component={() => <VolunteerForm />} />
          <Route path="/Login" exact component={() => <LoginForm />} />
          <Route path="/OtpVerification" exact component={() => <PhoneOtpVerification />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  </>
  );
}

export default App;
