import React from 'react';
import styled from 'styled-components';

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


`







export default function Home() {


    return (

        <div className="home-wrapper">
            Hi from Home component


            <Div className="imagecontainer">
            <Img className="home-image"
				src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
				alt="header"
			/>

            </Div>









        </div>
    )

}