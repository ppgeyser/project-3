import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from "./components/About";
import { noMatch } from "./components/noMatch/";
import { CheeseDetail } from "./pages/CheeseDetail";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
// import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <header>
        {/* <NavBar /> */}
      </header>
      <Switch>
        <Route exact path="/">
          <About />
          <Login />  
        </Route>
        <Route exact path="/cheese/:id" component={CheeseDetail} />
        <Route path="/profile" component={Profile} />
        <Route component={noMatch} />
      </Switch>
    </Router>
  );
}

export default App;
