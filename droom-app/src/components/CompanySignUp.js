import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Form = styled.form `
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 20px;
padding-left: 30px;
padding-right: 30px;
border: 2px red solid;
margin-left: 20px;
margin-right: 20px;
background: #acb6e5;
border: 1px #3A6073 solid;
align-items: center;
padding-bottom: 20px;


`

const Label = styled.label `
margin-top: 20px;
margin-bottom: 20px;

`

const Input = styled.input `
height: 30px;
width: 5rem;
border-radius: 30px;
border: 1px solid black;


`



//Admins sign up on behalf of company here first 
//change the form to the admin fields and use the removed fields for companyListing form

export default function CompanySignUp () {


    return (

<div className="companyformwrapper">
 <h3> Please Sign Up Here: </h3>
    

 <Form>
        <Label>
          Full Name: <br></br> <br></br>
          <input
            type="text"
            name="adminname"
            placeholder="Enter your name"
            // onChange={eventChangeHandler}
            // value={team.name}
          />
        </Label>
        <Label>
          Email: <br></br> <br></br>
          <input
            type="text"
            name="adminemail"
            placeholder="Enter your email"
            // onChange={eventChangeHandler}
            // value={team.email}
          />
        </Label>
        <Label>
          Position: <br></br> <br></br>
          <input
            type="text"
            name="adminposition"
            placeholder="Enter your position"
            // onChange={eventChangeHandler}
            // value={team.role}
          />
        </Label>

        <Label>
          Password: <br></br> <br></br>
          <input
            type="password"
            name="adminpassword"
            placeholder="Enter your password"
            // onChange={eventChangeHandler}
            // value={team.role}
          />
        </Label>
        
    
    <Link to="/companies-profile">
        <Input type="submit"/> </Link>
      </Form>



    
    
     </div>
    );
}