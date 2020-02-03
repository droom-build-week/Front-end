import React from 'react';
import './App.css';
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { Route, Switch } from 'react-router-dom';
import CompanyProfile from './components/CompanyProfile';
import JobListing from "./components/JobListing";



function App() {
  return (
    <div className="App">
      {/* //Set up Routes and components i want to render on initial display */}
      

      


<Switch>
<Route exact path="/">
    <Home />
      </Route>
  <Route path="/signup">
    <SignUp />
      </Route>

{/* //make dynamic? */}
      <Route exact path="/companies-profile">
    <CompanyProfile />
      </Route>

{/* //make dynamic */}

      <Route exact path="/companies-profile/add-your-company">
    <JobListing />
      </Route>

      </Switch>

    </div>
  );
}

export default App;
