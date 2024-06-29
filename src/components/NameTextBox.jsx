import React from 'react'
import styled from 'styled-components';

const StyledNameTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 65vw;
  height: 27vh;
`;

const NameTextBox = ({children}) => {
  return (
    <StyledNameTextBox>{children}</StyledNameTextBox>
  )
}

export default NameTextBox