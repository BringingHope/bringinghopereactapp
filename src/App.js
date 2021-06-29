
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, AboutUs, Contact, List, Blog, Login, BlogHome } from "./Components";
import Post1 from "./Components/Blog/Post/Post1";
import Profile from "./Components/Dashboard/Profile/Profile";
import DashBoard1 from "./Components/Dashboard/DashBoard1/DashBoard1"

function App() {
  return (
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
          <Route path="/post/:postId" component={Post1} />
          <Route path="/dash" exact component={() => <DashBoard1 />} />
          <Route path="/dash/profile" exact component={() => <Profile />} />



          <Route path="/login" exact component={() => <Login />} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;