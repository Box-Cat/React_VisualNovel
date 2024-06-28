import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  /* 버튼에 대한 스타일링을 추가할 수 있습니다. */
`;

const Button = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button;
