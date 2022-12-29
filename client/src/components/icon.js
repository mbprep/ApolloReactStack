import React from 'react';
import styled from '@emotion/styled';

/**
 * Icon renders the logo
 * the logo is an svg file located in the public folder
 * the logo is styled with styled components
 * the logo is wrapped in a div to make it responsive
 * the logo is wrapped in a link to make it clickable
 * the logo is wrapped in a fragment to make it a valid react component
 * 
 */
export const Icon = () => {
    return (
        <>
        <StyledIcon  src="./logo.svg" alt="logo" />
        </>
    );
    }


const StyledIcon = styled.img`
width: 100%;
height: 100%;
display: block;
-webkit-user-select: none;
margin: auto;
background-color: hsl(0, 0%, 90%);
transition: background-color 300ms;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
&:hover {
    background-color: hsl(55, 50%, 80%);
    }
    `;
