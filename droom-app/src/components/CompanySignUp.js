import React, { useState } from 'react';
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


  const [adminsignup, setAdminSignUp] = useState(initialValues);


  const companyFormChange = e => {
      if(e.target.value === e.target.value.toLowerCase()) {
        console.log(e.target.value);
        setAdminSignUp({
          ...adminsignup,
          [e.target.name] : e.target.value

        });
      }

  };


  const handleCompanySubmit = e => {
    e.preventDefault();

if(!formInputisEmpty()) {

console.log('hello from companysignin');

//axios in here 





}


  }


  //if form is empty function 

  function formInputisEmpty() {
    return (
      adminsignup.adminname === '' ||
      adminsignup.adminemail === '' ||
      adminsignup.adminposition === '' ||
      adminsignup.adminpassword === ''

    );
  }



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
            onChange={handleCompanySubmit}
            value={adminsignup.adminname}
          />
        </Label>
        <Label>
          Email: <br></br> <br></br>
          <input
            type="text"
            name="adminemail"
            placeholder="Enter your email"
            onChange={handleCompanySubmit}
            value={adminsignup.adminemail}
          />
        </Label>
        <Label>
          Position: <br></br> <br></br>
          <input
            type="text"
            name="adminposition"
            placeholder="Enter your position"
            onChange={handleCompanySubmit}
            value={adminsignup.adminposition}
          />
        </Label>

        <Label>
          Password: <br></br> <br></br>
          <input
            type="password"
            name="adminpassword"
            placeholder="Enter your password"
            onChange={handleCompanySubmit}
            value={adminsignup.adminpassword}
          />
        </Label>
        
    
    <Link to="/companies-profile">
        <Input type="submit"/> </Link>
      </Form>



    
    
     </div>
    );
}

const initialValues = {
  adminname: "",
  adminemail: "",
  adminposition: "",
  adminpassword: ""

}