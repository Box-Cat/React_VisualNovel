import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTextBox = styled.div`
  flex: 1;
  width: 100%;
  min-height: 5rem; 
  max-height: 10rem;
  overflow-y: auto; 
  padding: 1rem;
  background-color: ${({ $text }) => ($text ? '#999999ff' : 'transparent')}; 
  border-radius: 1rem;
  font-size: 0.9rem;
  margin-top: 10px;
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  text-align: center; 
`;

// 텍스트를 줄바꿈 처리
const formatText = (text) => {
  return text.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};

const TextBox = React.memo(({ text, typingSpeed = 20 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 타이핑 효과  
  useEffect(() => {
    if (text && currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } 
  }, [currentIndex, text, typingSpeed]);

  return (
    <StyledTextBox $text={text}>
      {formatText(displayText)}
    </StyledTextBox>
  );
});

TextBox.displayName = 'TextBox';

export default TextBox;
