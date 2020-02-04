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




export default function CompanyLogin() {


    const [adminlogin, setAdminLogin] = useState(initialLoginValues);


    const companyLoginFormChange = e => {
        if(e.target.value === e.target.value.toLowerCase()) {
          console.log(e.target.value);
          setAdminLogin({
            ...adminlogin,
            [e.target.name] : e.target.value
  
          });
        }
  
    };


    const handleCompanyLoginSubmit = e => {
        e.preventDefault();
    
    if(!companyLoginFormEmpty()) {
    
    console.log('hello from companylogin');
    
    //axios in here 
    
    
    
    }
    
    
      }

//if form is empty function 

function companyLoginFormEmpty() {
    return (
      adminlogin.adminemail === '' ||
      adminlogin.adminpassword === ''

    );
  }



    return (
        <div className="companyloginformwrapper">


<Form onSubmit={handleCompanyLoginSubmit}>

        <Label>
          Email: <br></br> <br></br>
          <input
            type="text"
            name="adminemail"
            placeholder="Enter your email"
            onChange={companyLoginFormChange}
            value={adminlogin.adminemail}
          />
        </Label>
    

        <Label>
          Password: <br></br> <br></br>
          <input
            type="password"
            name="adminpassword"
            placeholder="Enter your password"
            onChange={companyLoginFormChange}
            value={adminlogin.adminpassword}
          />
        </Label>
        
    
        <Input type="submit"/> 
      </Form>


        </div>
    );
}

const initialLoginValues = {
    adminemail: "",
    adminpassword: ""
  
  }