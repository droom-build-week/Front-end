import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

//// Login an admin
//'/api/auth/login-admin'  POST

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

export default function CompanyLogin() {
  const [adminlogin, setAdminLogin] = useState(initialLoginValues);

  const history = useHistory();

  const companyLoginFormChange = e => {
    if (e.target.value === e.target.value.toLowerCase()) {
      console.log(e.target.value);
      setAdminLogin({
        ...adminlogin,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleCompanyLoginSubmit = e => {
    e.preventDefault();

    if (!companyLoginFormEmpty()) {
      axios
        .post("http://localhost:3300/api/auth/login-admin", adminlogin)
        .then(response => {
          //data we are getting back from server
          console.log(response.data);
          //if successful: refresh the form
          setAdminLogin(initialLoginValues);
          history.push("/companies-profile/:id");
        })
        .catch(e => console.log("loginError", e))
        .finally(() => {
          console.log("Axios request finished");
        });
    } else {
      console.log("Form is incomplete!!");
    }
  };

  //if form is empty function

  function companyLoginFormEmpty() {
    return adminlogin.email === "" || adminlogin.password === ""
  }

  return (
    <div className="companyloginformwrapper">
      <Form onSubmit={handleCompanyLoginSubmit}>
        <Label>
          Email: <br></br> <br></br>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={companyLoginFormChange}
            value={adminlogin.email}
          />
        </Label>

        <Label>
          Password: <br></br> <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={companyLoginFormChange}
            value={adminlogin.password}
          />
        </Label>

        {/* //need to map through data from POST to generate unique company profile for each admin logging in  */}

        <Input type="submit" />
      </Form>
    </div>
  );
}

const initialLoginValues = {
  email: "",
  password: ""
};

// {  "id": 6,  "full_name": "Hon",  "position": "manager",  "email": "hon@m.com"}