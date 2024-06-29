import React from 'react';
import styled from 'styled-components';

const Background = ({ data, children }) => {

  const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    background-image: url(${data.Scene1.Background});
  `;

  const StyledMainBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <StyledBackground>
      <StyledMainBox>
        {children}
      </StyledMainBox>
    </StyledBackground>
  );
};

export default Background;
