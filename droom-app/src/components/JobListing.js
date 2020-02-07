//Form for each company gets to add a Job listing 

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
  
  const [addListing, setAddListing] = useState(initialStateListing);

  const listingFormChange = e => {
    if (e.target.value === e.target.value.toLowerCase()) {
      // console.log(e.target.value);
      setAddListing({
        ...addListing,
        [e.target.name]: e.target.value 
       
      });
     
    } 
  };


  const listingHandleSubmit = e => {
    e.preventDefault();


    if(!listFormInputIsEmpty()) {

        //axios here 

    }


  }


  function listFormInputIsEmpty() {
    return (
      addListing.title === '' ||
      addListing.jobopp === '' ||
      addListing.salary === ''

    );
}





    return (

<div className="joblistingwrapper">

        <p> Create Your Company's Job Listing Here: </p>



        <Form onSubmit={listingHandleSubmit}>
        <Label>
          Company Name: <br></br> <br></br>
          <input
            type="text"
            name="title"
            placeholder="Enter the company name"
            onChange={listingFormChange}
            value={addListing.title}
          />
        </Label>
      
        {/* <Label>
          Location: <br></br> <br></br>
          <input
            type="text"
            name="location"
            placeholder="Enter your location"
            onChange={}
            value={}
          />
        </Label> */}

        <Label>
          Job Opportunities: <br></br> <br></br>
          <Textarea
            type="text"
            name="jobopp"
            placeholder="Please tell us about this your job listings. Provide name of role and description."
            onChange={listingFormChange}
            value={addListing.jobopp}
          />
        </Label>
       
        <Label>
          Salary: <br></br> <br></br>
          <select
            name="salary"
           
          onChange={listingFormChange}
            value={addListing.salary} 
            >
            <option value="low">£20-£50k </option>
            <option value="mid">£50k-80k</option>
            <option value="high">£80k+</option>
          </select>
        </Label>
    
    
        <Input type="submit"/> 
      </Form>


</div>

    );
}

const initialStateListing = {
  title: "",
  jobopp: "",
  salary: ""
  
}