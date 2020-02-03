import React from 'react';
import './App.css';
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { Route, Switch } from 'react-router-dom';
import CompanyProfile from './components/CompanyProfile';
import JobListing from "./components/JobListing";
import MatchList from "./components/MatchList";
import UserProfile from "./components/UserProfile";



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

      {/* //dynamic path- change URL */}

{/* //add this route path as a link somewhere!!! */}
      <Route exact path="/jobseekers-profile-matches">
    <MatchList />
      </Route>

      <Route exact path="/jobseekers-profile">
    <UserProfile />
      </Route>


      </Switch>

    </div>
  );
}

export default App;
