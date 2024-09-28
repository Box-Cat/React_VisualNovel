import styled from 'styled-components';

const StyledNameBox = styled.h2`
  flex: 1;
  position: absolute;  
  top: 10px; 
  left: 10px;  
  z-index: 2;  
`;


const NameBox = ({name}) => {

  return (
    <>
      <StyledNameBox>{name}</StyledNameBox>
    </>
  );
};


export default NameBox;
