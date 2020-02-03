import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


//Styling the page

const Div = styled.div `
/* border: 1px red solid; */
padding-top: 40px;
margin-left: 20px;
margin-right: 20px;



`
const Img = styled.img `
object-fit: cover;
width: 100%;
height: 300px;
border: 3px solid lavender;

`


const Button = styled.button `
border: 3px solid lavender;
border-radius: 20px;
padding-top: 10px;
padding-bottom: 10px;
margin-top: 20px;
color: white;
background: #3A6073;


`



export default function Home() {


    return (

        <div className="home-wrapper">
        
        <h1>Welcome to Droom</h1>
        <p>...the place to find your dream job by swiping right</p>


            <Div className="imagecontainer">
            <Img className="home-image"
				src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
				alt="header"
			/>

            </Div>


{/* //Sign up button here, wrapped in navlink  */}

<NavLink to="/signup">
<Button className="signupButton">Sign Up Now</Button>
</NavLink>


        </div>
    )

}