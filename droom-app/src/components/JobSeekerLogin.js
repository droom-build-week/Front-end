import React, { useState } from 'react';
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
padding-bottom: 20px; `

const Label = styled.label `
margin-top: 20px;
margin-bottom: 20px; `

const Input = styled.input `
height: 30px;
width: 5rem;
border-radius: 30px;
border: 1px solid black;
`



export default function JobSeekerLogin () {

    const [jobseekerlogin, setJobSeekerLogin] = useState(initialLoginValues);


    const jobLoginFormChange = e => {
        if(e.target.value === e.target.value.toLowerCase()) {
          console.log(e.target.value);
          setJobSeekerLogin({
            ...jobseekerlogin,
            [e.target.name] : e.target.value
    
          });
        }
    
    };


    const handleJobLoginSubmit = e => {

        e.preventDefault();
      
        if(!loginFormIsEmpty()) {
      
          console.log('hello from jobseekerslogin');
          
          //axios in here 
          
          
        
          
          }
      
      
      }


      function loginFormIsEmpty() {
        return (
          
          jobseekerlogin.email === '' ||
          jobseekerlogin.password === '' 
      
      
        );
      }


    return (
        <div className="jobseekerloginformwrapper">


<Form onSubmit={handleJobLoginSubmit}>
        
        
        <Label>
          Email: <br></br> <br></br>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={jobLoginFormChange}
            value={jobseekerlogin.email}
          />
        </Label>
        <Label>
          Password: <br></br> <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={jobLoginFormChange}
            value={jobseekerlogin.password}
          />
        </Label>
       
        <Input type="submit" /> 
      </Form>




















        </div>
    );
}


const initialLoginValues = {
    email: "",
    password: ""

  }