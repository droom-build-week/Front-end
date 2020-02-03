import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import CompanySignUp from "./CompanySignUp";
import JobSeekerSignUp from "./JobSeekerSignUp";


const Div = styled.div `

display: flex;
/* border: 2px red solid; */
justify-content: center;
margin-top: 60px;


`

const Button = styled.button `
border: 3px solid lavender;
border-radius: 20px;
padding-top: 10px;
padding-bottom: 10px;
color: white;
background: #3A6073;
margin-left: 20px;
margin-right: 20px;


`





export default function SignUp() {

    return (

<div className="signupwrapper">

{/* //2 buttons: for jobseekers and for companies */}

<h1>Sign Up</h1>
<p>Please Select from the following: </p>

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