import styled from 'styled-components';

const Background = ({ backgroundImage, children }) => {

  const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover; 
    position: relative;
    background-image: url(${backgroundImage});
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
