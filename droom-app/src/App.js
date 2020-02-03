import React from 'react';
import './App.css';
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* //Set up Routes and components i want to render on initial display */}
      

      


<Switch>
<Route exact path="/">
    <Home />
      </Route>
  <Route exact path="/signup">
    <SignUp />
      </Route>
      </Switch>

    </div>
  );
}

export default App;
