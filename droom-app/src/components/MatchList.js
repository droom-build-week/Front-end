import React from 'react';
import styled from 'styled-components';

//Component is the displays the list of matches as cards following swiping for the companies job listings they want


const Div = styled.div `
background: #4389A2;
border: 3px solid lavender;

`


export default function MatchList () {


    return (

        <Div className="matchListWrapper">
           <h3>Check Out Your Job Matches </h3>
        
        
        </Div>
    )
}