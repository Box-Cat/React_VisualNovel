import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover; 
  position: relative;
  background-image: url(${(props) => props.$backgroundImage});
`;

const StyledMainBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Background = React.memo(({ backgroundImage, children }) => {
  return (
    <StyledBackground $backgroundImage={backgroundImage}>
      <StyledMainBox>
        {children}
      </StyledMainBox>
    </StyledBackground>
  );
});

Background.displayName = 'Background';

export default Background;
