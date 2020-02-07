import React from 'react';
import './App.css';
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { Route, Switch } from 'react-router-dom';
import CompanyProfile from './components/CompanyProfile';
import MatchList from "./components/MatchList";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";



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

      <Route path="/login">
    <Login />
      </Route>


      <Route exact path="/companies-profile/:id">
    <CompanyProfile />
      </Route>



  

      {/* //dynamic path- change URL */}


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
