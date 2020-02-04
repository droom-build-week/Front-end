import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

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

const Textarea = styled.textarea `
height: 100px;
width: 400px;
`

export default function JobSeekerSignUp() {

  const [jobseekersign, setJobSeekerSign] = useState(initialValues);


  const jobFormChange = e => {
    if(e.target.value === e.target.value.toLowerCase()) {
      console.log(e.target.value);
      setJobSeekerSign({
        ...jobseekersign,
        [e.target.name] : e.target.value

      });
    }

};


const handlejobSubmit = e => {

  e.preventDefault();

  if(!formInputEmpty()) {

    console.log('hello from jobseekersignin');
    
    //axios in here 
    
    
  
    
    }


}

//if form is empty function 

function formInputEmpty() {
  return (
    jobseekersign.name === '' ||
    jobseekersign.username === '' ||
    jobseekersign.email === '' ||
    jobseekersign.password === '' ||
    jobseekersign.role === ''

  );
}




    return (


        <div className="jobseekerformwrapper">
            <h3> Please Sign Up Here: </h3>


            <Form>
        <Label>
          Full Name: <br></br> <br></br>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handlejobSubmit}
            value={jobseekersign.name}
          />
        </Label>
        <Label>
          Username: <br></br> <br></br>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handlejobSubmit}
            value={jobseekersign.username}
          />
        </Label>
        <Label>
          Email: <br></br> <br></br>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={handlejobSubmit}
            value={jobseekersign.email}
          />
        </Label>
        <Label>
          Password: <br></br> <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handlejobSubmit}
            value={jobseekersign.password}
          />
        </Label>
        <Label>
          Occupation: <br></br> <br></br>
          <input
            type="text"
            name="role"
            placeholder="Enter your occupation"
            onChange={handlejobSubmit}
            value={jobseekersign.role}
          />
        </Label>

        <Label>
          Type of Employment: <br></br> <br></br>
          <select
            name="type"
           
          // onChange={}
            // value={jobseekersign.type} 
            >
            <option value="short">Short-Term </option>
            <option value="mid">Mid-Term</option>
            <option value="long">Long-Term</option>
          </select>
        </Label>

        <Label>
          Education: <br></br> <br></br>
          <Textarea
            type="text"
            name="education"
            placeholder="Please tell us about your relevant education."
            // onChange={}
            // value={team.role}
          />
        </Label>
        <Label>
          Previous Experiences: <br></br> <br></br>
          <Textarea
            type="text"
            name="experiences"
            placeholder="Please tell us your past experiences. These must be relevant for the position you are looking to apply for."
            // onChange={}
            // value={team.role}
          />
        </Label>
        <Label>
          Interests: <br></br> <br></br>
          <Textarea
            type="text"
            name="interests"
            placeholder="Please tell us about your relevant interests."
            // onChange={}
            // value={}
          />
        </Label>
        <Link to="/jobseekers-profile">
        <Input type="submit" /> </Link>
      </Form>



            
        </div>
    )
}


const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  role: ""

}