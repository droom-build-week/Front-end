import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import CompanySignUp from "./CompanySignUp";
import JobSeekerSignUp from "./JobSeekerSignUp";


const Div = styled.div `

display: flex;
justify-content: center;
margin-top: 30px;


`

const Button = styled.button `
border: 3px solid lavender;
border-radius: 20px;
padding-top: 20px;
padding-bottom: 20px;
color: white;
background: #4389A2;
margin-left: 15px;
margin-right: 15px;


`


export default function SignUp() {

    return (

<div className="signupwrapper">

{/* //2 buttons: for jobseekers and for companies */}

<h1>Sign Up</h1>
<p>Please select from the following: </p>

<Div className="buttoncontainer">


<NavLink to="/signup/jobseekers" replace >
    <Button>Job Seekers </Button>
    </NavLink>

<NavLink  to="/signup/companies" replace >
    <Button>Companies </Button>
</NavLink>

</Div>



{/* //Creating nested Routes */}


<Route exact path="/signup/companies">
<CompanySignUp />
</Route>

<Route exact path="/signup/jobseekers">
<JobSeekerSignUp />
</Route>




</div>

    );

}