import React from 'react';
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
  margin: 10px; /* 이미지 간격 조절을 위해 추가 */
`;

const ProfileImage = ({ sprites }) => {
  return (
    <StyledProfileImage>
      {sprites.map(({ character, sprite }, index) => (
        <StyledImg key={index} src={sprite} alt={character} />
      ))}
    </StyledProfileImage>
  );
};

export default ProfileImage;
