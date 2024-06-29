import React from 'react';
import styled from 'styled-components';
import useKeypress from 'react-use-keypress';

const StyledButton = styled.div`
  border-radius: 1rem;
  font-size: 0.7rem;
  background-color: red;
  display: inline-block;
  cursor: pointer;
`;

const Button = ({ onClick, onKeyDown, children }) => {
  useKeypress(['ArrowLeft', 'ArrowRight'], (e) => {
    if (e.key === 'ArrowLeft') onKeyDown('before');
    else if (e.key === 'ArrowRight') onKeyDown('next');
  });

  return (
    <StyledButton onClick={onClick} >
      {children}
    </StyledButton>
  );
};

export default Button;