import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
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
  border: 1px #3a6073 solid;
  align-items: center;
  padding-bottom: 20px;
`;

const Label = styled.label`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  height: 30px;
  width: 5rem;
  border-radius: 30px;
  border: 1px solid black;
`;

// const Textarea = styled.textarea `
// height: 100px;
// width: 400px;
// `

export default function JobSeekerSignUp() {
  const [jobseekersign, setJobSeekerSign] = useState(initialValues);

  const jobFormChange = e => {
    if (e.target.value === e.target.value.toLowerCase()) {
      console.log(e.target.value);
      setJobSeekerSign({
        ...jobseekersign,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleJobSubmit = e => {
    e.preventDefault();

    if (!formInputEmpty()) {
      axios
        .post("https://droom-jobs.herokuapp.com/api/auth/register", jobseekersign)
        .then(res => {
          console.log(res.data);
          //if successful, refresh the form
          setJobSeekerSign(initialValues);
        })

        .catch(e => console.log(e))
        .finally(() => {
          console.log("Axios request finished");
        });
    } else {
      console.log("form is incomplete, dont send");
    }
  };

  //if form is empty function

  function formInputEmpty() {
    return (
      jobseekersign.full_name === "" ||
      jobseekersign.username === "" ||
      jobseekersign.email === "" ||
      jobseekersign.password === "" ||
      jobseekersign.occupation === ""
    );
  }

  return (
    <div className="jobseekerformwrapper">
      <h3> Please Sign Up Here: </h3>

      <Form onSubmit={handleJobSubmit}>
        <Label>
          Full Name: <br></br> <br></br>
          <input
            type="text"
            name="full_name"
            placeholder="Enter your name"
            onChange={jobFormChange}
            value={jobseekersign.full_name}
          />
        </Label>
        <Label>
          Username: <br></br> <br></br>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={jobFormChange}
            value={jobseekersign.username}
          />
        </Label>
        <Label>
          Email: <br></br> <br></br>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={jobFormChange}
            value={jobseekersign.email}
          />
        </Label>
        <Label>
          Password: <br></br> <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={jobFormChange}
            value={jobseekersign.password}
          />
        </Label>
        <Label>
          Occupation: <br></br> <br></br>
          <input
            type="text"
            name="occupation"
            placeholder="Enter your occupation"
            onChange={jobFormChange}
            value={jobseekersign.occupation}
          />
        </Label>

        {/* <Label>
          Type of Employment: <br></br> <br></br>
          <select
            name="type"
           
        
            >
            <option value="short">Short-Term </option>
            <option value="mid">Mid-Term</option>
            <option value="long">Long-Term</option>
          </select>
        </Label> */}

        {/* <Label>
          Education: <br></br> <br></br>
          <Textarea
            type="text"
            name="education"
            placeholder="Please tell us about your relevant education."
            // onChange={}
            // value={}
          />
        </Label> */}
        {/* <Label>
          Previous Experiences: <br></br> <br></br>
          <Textarea
            type="text"
            name="experiences"
            placeholder="Please tell us your past experiences. These must be relevant for the position you are looking to apply for."
            
          />
        </Label> */}
        {/* <Label>
          Interests: <br></br> <br></br>
          <Textarea
            type="text"
            name="interests"
            placeholder="Please tell us about your relevant interests."
            
          />
        </Label> */}

        <Input type="submit" />
      </Form>
    </div>
  );
}

const initialValues = {
  full_name: "",
  username: "",
  email: "",
  password: "",
  occupation: ""
};
