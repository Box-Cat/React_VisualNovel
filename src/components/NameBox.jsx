import React from 'react';
import styled from 'styled-components';

const StyledNameBox = styled.h2`
  flex: 1;
  position: absolute;  
  top: 10px; 
  left: 10px;  
  z-index: 2;  
`;


const NameBox = React.memo(({name}) => {

  return (
    <>
      <StyledNameBox>{name}</StyledNameBox>
    </>
  );
});

NameBox.displayName = 'NameBox';

export default NameBox;
