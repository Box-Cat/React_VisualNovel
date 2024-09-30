import { useState } from 'react';
import styled from 'styled-components';
import muteImage from '../assets/mute.png';
import volumeImage from '../assets/volume.png';

const StyledButton = styled.div`
  border-radius: 1rem;
  font-size: 0.7rem;
  cursor: pointer;
  background-image: url(${(props) => props.$buttonImage});
  background-size: cover;
  width: 40px; 
  height: 40px;
`;

const SettingButton = ({ toggleAudio, isMuted }) => {
  return (
    <StyledButton 
      $buttonImage={isMuted ? muteImage : volumeImage} 
      onClick={toggleAudio}
    />
  );
};

export default SettingButton;
