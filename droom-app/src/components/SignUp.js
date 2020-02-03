import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


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

<h2>Sign Up Here</h2>
<p>Please Select from the following: </p>

<Div className="buttoncontainer">
<Button>Job Seekers </Button>
<Button>Companies </Button>
</Div>


{/* //need to add navlinks and nested routes */}















</div>

    );

}