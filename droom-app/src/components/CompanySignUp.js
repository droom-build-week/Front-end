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


`
const Textarea = styled.textarea `

height: 100px;
width: 400px;
`




export default function CompanySignUp () {



    return (

<div className="companyformwrapper">
 <h3> Please Sign Up Here: </h3>
    

 <Form>
        <Label>
          Company Name: <br></br>
          <input
            type="text"
            name="companyname"
            placeholder="Enter the company name"
            // onChange={eventChangeHandler}
            // value={team.name}
          />
        </Label>
        <Label>
          Email: <br></br>
          <input
            type="text"
            name="companyemail"
            placeholder="Enter your email"
            // onChange={eventChangeHandler}
            // value={team.email}
          />
        </Label>
        <Label>
          Location: <br></br>
          <input
            type="text"
            name="location"
            placeholder="Enter your location"
            // onChange={eventChangeHandler}
            // value={team.role}
          />
        </Label>

        <Label>
          Job Opportunities: <br></br>
          <Textarea
            type="text"
            name="jobopp"
            placeholder="Please tell us about your job listings. Provide name of role and description."
            // onChange={eventChangeHandler}
            // value={team.role}
          />
        </Label>
        <Label>
          Criteria: <br></br>
          <Textarea
            type="text"
            name="criteria"
            placeholder="Please tell us about the type of people you are looking for, to fufill your criteria."
            // onChange={eventChangeHandler}
            // value={team.role}
          />
        </Label>
    
        <Input type="submit" />
      </Form>


















    
    
    
    
    
     </div>
    );
}