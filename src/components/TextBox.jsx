import React from 'react'
import styled from 'styled-components';


const StyledTextBox = styled.div`
    flex: 1;
    min-width: 100%;
    min-height: 100%;
    background-color: #999999ff;
    border-radius: 1rem;
    padding: 3%;
    padding-left:3%;
    font-size:0.7rem;
`;

const TextBox = ({text}) => {

  
  return (
    <StyledTextBox>{text}</StyledTextBox>
  )
}

export default TextBox