import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import JobSeekerLogin from "./JobSeekerLogin";
import CompanyLogin from "./CompanyLogin";


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



export default function Login() {



    return (



<div className="loginwrapper">


<h1>Login</h1>
<p>Please select from the following: </p>

<Div className="buttoncontainer">


<NavLink to="/login/jobseekers" replace >
    <Button> Job Seekers </Button>
    </NavLink>

<NavLink  to="/login/companies" replace >
    <Button> Companies </Button>
</NavLink>

</Div>



{/* // nested Routes */}


<Route exact path="/login/companies">
<CompanyLogin />
</Route>

<Route exact path="/login/jobseekers">
<JobSeekerLogin />
</Route>











        </div>
    );
}