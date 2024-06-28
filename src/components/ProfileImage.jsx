import React from 'react';
import styled from 'styled-components';

const StyledProfileImage = styled.div`
  display: 'inline-block';
  margin-right: '10px';
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
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
