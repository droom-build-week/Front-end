import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


//Admin's Page: create companies they want and add job listenings to each company card
//each company is a card


const Div = styled.div `
border: 3px solid lavender;
margin-left: 30px;
margin-right: 30px;
display: flex;
justify-content: space-around;
align-items: center;
`

const Button = styled.button `
background: lavender;
border: 2px solid #4389A2;
border-radius: 6px;
padding: 5px 10px 5px 10px;
height: 40px;

`





export default function CompanyProfile () {

    return (

<div className="companyprofilewrapper">

<h2>Welcome To Your Droom Profile </h2>

<Div>
    <p>Your companies: </p>
    {/* //search feature? */}


    <Link to= "/companies-profile/add-your-company">
    <Button> Add Your Company</Button></Link>
</Div>







{/* //Once they submit their company listing form--> goes to another page where they can create job listings */}


</div>

    );
}