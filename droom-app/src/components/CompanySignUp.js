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

//Admins sign up on behalf of company here first
//change the form to the admin fields and use the removed fields for companyListing form

export default function CompanySignUp() {
  const [adminsignup, setAdminSignUp] = useState(initialValues);

  const companyFormChange = e => {
    if (e.target.value === e.target.value.toLowerCase()) {
      console.log(e.target.value);
      setAdminSignUp({
        ...adminsignup,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleCompanySubmit = e => {
    e.preventDefault();

    if (!formInputisEmpty()) {
      console.log("hello from companysignin");


      axios
      .post('http://localhost:3300/api/auth/register-admin', adminsignup)
      .then(response => {
        console.log(response.data);
        setAdminSignUp(initialValues);
      })
      .catch(e => console.log(e))
      

    } else {
      console.log('Error');
    }
  };

  //if form is empty function

  function formInputisEmpty() {
    return (
      adminsignup.full_name === "" ||
      adminsignup.email === "" ||
      adminsignup.position === "" ||
      adminsignup.password === ""
    );
  }

  return (
    <div className="companyformwrapper">
      <h3> Please Sign Up Here: </h3>

      <Form onSubmit={handleCompanySubmit}>
        <Label>
          Full Name: <br></br> <br></br>
          <input
            type="text"
            name="full_name"
            placeholder="Enter your name"
            onChange={companyFormChange}
            value={adminsignup.full_name}
          />
        </Label>
        <Label>
          Email: <br></br> <br></br>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={companyFormChange}
            value={adminsignup.email}
          />
        </Label>
        <Label>
          Position: <br></br> <br></br>
          <input
            type="text"
            name="position"
            placeholder="Enter your position"
            onChange={companyFormChange}
            value={adminsignup.position}
          />
        </Label>

        <Label>
          Password: <br></br> <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={companyFormChange}
            value={adminsignup.password}
          />
        </Label>

        <Input type="submit" />
      </Form>
    </div>
  );
}

const initialValues = {
  full_name: "",
  email: "",
  position: "",
  password: ""
};
