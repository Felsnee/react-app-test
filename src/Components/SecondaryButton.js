import React from 'react';
import styled from 'styled-components';

function SecondaryButton({name}){
    return (
        <SecondaryButtonStyled>
        {name}
    </SecondaryButtonStyled>
    )
}
const SecondaryButtonStyled=styled.button`

background-color: var(--accent-pink);
padding: .7rem 2rem;
font-family: inherit;
font-size: inherit;
color: inherit;
border-radius: 20px;
outline: none;
border: none;
`;

                    
export default SecondaryButton;