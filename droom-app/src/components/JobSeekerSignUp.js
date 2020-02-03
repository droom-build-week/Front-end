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




export default function JobSeekerSignUp() {


    return (


        <div className="jobseekerformwrapper">
            <h3> Please Sign Up Here: </h3>


            <Form>
        <Label>
          Name: <br></br>
          <input
            type="text"
            name="name"
            placeholder="Enter your name here"
            // onChange={eventChangeHandler}
            // value={team.name}
          />
        </Label>
        <Label>
          Email: <br></br>
          <input
            type="text"
            name="email"
            placeholder="Enter your email here"
            // onChange={eventChangeHandler}
            // value={team.email}
          />
        </Label>
        <Label>
          Role: <br></br>
          <input
            type="text"
            name="role"
            placeholder="Enter your role here"
            // onChange={eventChangeHandler}
            // value={team.role}
          />
        </Label>
        <Input type="submit" />
      </Form>













            
        </div>
    )
}