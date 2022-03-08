import React from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';

function HeaderContent(){
    return(
             <HeaderContentStyled>
                 <div className='left-content'>
                    <h1>Felicia's Website</h1>
                     <p className="white">
                         <ul>
                         <li>Hi there!</li>
                         <li>GenZ UIUX Designer in warm sunny Singapore</li>
                         </ul>
                         </p>
                         <SecondaryButton name={'Message Us'}
                         />
                     </div>
                     <div className='right-content'></div>
             </HeaderContentStyled>
    )
}
const HeaderContentStyled=styled.div`
`;
export default HeaderContent;