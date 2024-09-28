import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  min-height: 50px; 
`;


const ButtonContainer = ({children}) => {
  return (
    <StyledButtonContainer>{children}</StyledButtonContainer>
  )
}

export default ButtonContainer