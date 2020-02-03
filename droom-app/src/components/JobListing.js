//Form for each company gets to add a Job listing 

import React from 'react';
import styled from 'styled-components';

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
const Textarea = styled.textarea `

height: 100px;
width: 400px;
`








export default function JobListing() {


    return (

<div className="joblistingwrapper">

        <p> Create Your Company's Job Listing Here: </p>



        <Form>
        <Label>
          Company Name: <br></br> <br></br>
          <input
            type="text"
            name="companyname"
            placeholder="Enter the company name"
            // onChange={eventChangeHandler}
            // value={team.name}
          />
        </Label>
        <Label>
          Email: <br></br> <br></br>
          <input
            type="text"
            name="companyemail"
            placeholder="Enter your email"
            // onChange={eventChangeHandler}
            // value={team.email}
          />
        </Label>
        <Label>
          Location: <br></br> <br></br>
          <input
            type="text"
            name="location"
            placeholder="Enter your location"
            // onChange={eventChangeHandler}
            // value={team.role}
          />
        </Label>

        <Label>
          Job Opportunities: <br></br> <br></br>
          <Textarea
            type="text"
            name="jobopp"
            placeholder="Please tell us about this your job listings. Provide name of role and description."
            // onChange={eventChangeHandler}
            // value={team.role}
          />
        </Label>
        <Label>
          Criteria: <br></br> <br></br>
          <Textarea
            type="text"
            name="criteria"
            placeholder="Please tell us about the type of people you are looking for, to fufill your criteria."
            // onChange={eventChangeHandler}
            // value={team.role}
          />
        </Label>
    
    
        <Input type="submit"/> 
      </Form>







</div>

    );
}