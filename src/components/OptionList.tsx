import React from 'react'
import styled from 'styled-components';
import useKeypress from 'react-use-keypress';

const StyledOptionList = styled.div`
  border-radius: 1rem;
  font-size: 0.7rem;
  background-color: blue;
  cursor: pointer;
`;


const OptionList = ({ onClick, onKeyDown, children }) => {
  useKeypress(['ArrowLeft', 'ArrowRight'], (e) => {
    if (e.key === 'ArrowLeft') onKeyDown('before');
    else if (e.key === 'ArrowRight') onKeyDown('next');
  });

  return (
    <StyledOptionList onClick={onClick} >
      {children}
    </StyledOptionList>
  );
};

export default OptionList;