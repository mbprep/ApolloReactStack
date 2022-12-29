import React from 'react';
import styled from '@emotion/styled';
//create a component for the company logo image
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
