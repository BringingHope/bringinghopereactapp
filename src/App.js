
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, AboutUs, Contact, List, Blog, Login, BlogHome } from "./Components";
import Post1 from "./Components/Blog/Post/Post1";
<<<<<<< HEAD

import Profile from "./Components/Dashboard/Profile/Profile";
import DashBoard1 from "./Components/Dashboard/DashBoard1/DashBoard1"
import DashBoard from "./Components/Dashboard/DashBoard";


=======
import Profile from "./Components/Dashboard/Profile/Profile";
import DashBoard1 from "./Components/Dashboard/DashBoard1/DashBoard1"
import Events from "./Components/Dashboard/Events/Events"
>>>>>>> e1a82f7 (commit)
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
          <Route path="/post/:postId" component={Post1} />
<<<<<<< HEAD
=======
          <Route path="/dash" exact component={() => <DashBoard1 />} />
          <Route path="/dash/profile" exact component={() => <Profile />} />
          <Route path="/dash/events" exact component={() => <Events />} />



>>>>>>> e1a82f7 (commit)
          <Route path="/login" exact component={() => <Login />} />
          < Route path="/dash" exact component={() => <DashBoard1 />} />
          <Route path="/dash/profile" exact component={() => <Profile />} />


        </Switch>
        <Footer />
      </Router>
    </div>
  </>
  );
}

export default App;