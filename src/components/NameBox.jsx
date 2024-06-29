import React from 'react';
import styled from 'styled-components';

const StyledNameBox = styled.h2`
    flex: 1;
  `;


const NameBox = ({name}) => {
  // props로부터 name 속성을 추출

  return (
    <>
      <StyledNameBox>{name}</StyledNameBox>
    </>
  );
};



export default NameBox;
