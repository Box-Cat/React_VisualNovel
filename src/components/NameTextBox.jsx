import React from 'react'
import styled from 'styled-components';

const StyledNameTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;
  min-width: 20rem;
  min-height: 10rem;
  border-radius: 1rem;
  position: relative;
`;


const NameTextBox = React.memo(({children}) => {
  return (
    <StyledNameTextBox>{children}</StyledNameTextBox>
  )
});

NameTextBox.displayName = 'NameTextBox';

export default NameTextBox