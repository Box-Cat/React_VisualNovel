import React from 'react'
import styled from 'styled-components';


const StyledTextBox = styled.div`
  flex: 1;
  width: 100%;
  min-height: 5rem; 
  max-height: 10rem;
  overflow-y: auto; 
  padding: 1rem;
  background-color: #999999ff;
  border-radius: 1rem;
  font-size: 0.9rem;
`;



const TextBox = ({text}) => {

  
  return (
    <StyledTextBox>{text}</StyledTextBox>
  )
}

export default TextBox