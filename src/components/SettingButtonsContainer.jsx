import styled from 'styled-components';

const StyledSettingButtonsContainer = styled.div`
  position: fixed;
  top: -10%; 
  right: -5%; 
  border-radius: 1rem;
  font-size: 0.7rem;
  z-index: 1000; 
`;


const SettingButtonsContainer = ({children}) => {
  return (
    <StyledSettingButtonsContainer>
      {children}
    </StyledSettingButtonsContainer>
  )
}

export default SettingButtonsContainer