
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, AboutUs, Contact, List, Blog, Login, BlogHome } from "./Components";
import Post1 from "./Post/Post1";

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

          {/* <Route path="/post/:id">
                        <SinglePost />
                    </Route> */}


          <Route path="/login" exact component={() => <Login />} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;