import React from 'react'
import styled from 'styled-components';


const StyledOptionListContainer = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width: 50%;
  height: 40%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1; 
`;

const OptionListContainer = ({children}) => {
  return (
    <StyledOptionListContainer>{children}</StyledOptionListContainer>
  )
}

export default OptionListContainer