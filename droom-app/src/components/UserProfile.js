import React from 'react';
import styled from 'styled-components';

//Cards display here: where user can swipe 


const Div = styled.div `
display: flex;
justify-content:space-between;
align-items: center;


`

const Button = styled.button `
border: 3px solid lavender;
border-radius: 20px;
padding: 15px 20px 15px 20px;
color: white;
background: #4389A2;
font-size: 1rem;
margin-right: 60px;
margin-top: 10px;

`

const H2 = styled.h2 `
width: 100%;
margin-left: 150px;


`



export default function UserProfile () {

    return (

        <div className="userProfileWrapper">



            <Div>
            <H2>Welcome To Your Droom User Profile</H2>
            <Button> Matches </Button>
            </Div>

       
            <p>Start swiping for your perfect job here!</p>
          









        </div>
    )
}