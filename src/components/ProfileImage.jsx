import styled from 'styled-components';

const StyledProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; 
  width: 100%;
  height: 100%; 
  min-height: 200px; 
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
      {sprites.length > 0 ? (
        sprites.map(({ character, sprite, brightness }, index) => (
          <StyledImg
            key={index}
            src={sprite}
            alt={character}
            brightness={brightness} 
          />
        ))
      ) : (
        <div style={{ width: '200px', height: '200px', visibility: 'hidden' }} /> // 비어 있을 경우 공간 유지
      )}
    </StyledProfileImage>
  );
};

export default ProfileImage;
