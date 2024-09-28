import styled from 'styled-components';

const StyledProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; 
  width: 100%;
  height: 100%; 
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px; 
  filter: brightness(${({ brightness }) => brightness}); 
`;

const ProfileImage = ({ sprites }) => {

  return (
    <StyledProfileImage>
      {sprites.map(({ character, sprite, brightness }, index) => {
        return(
          <StyledImg
            key={index}
            src={sprite}
            alt={character}
            brightness={brightness} 
          />
        )

      })}
    </StyledProfileImage>
  );
};

export default ProfileImage;
