import React from 'react'
import styled from 'styled-components';

const StyledMainBox = styled.div`
    
  `;

const MainBox = ({children}) => {
  return (
    <StyledMainBox>{children}</StyledMainBox>
  )
}

export default MainBox