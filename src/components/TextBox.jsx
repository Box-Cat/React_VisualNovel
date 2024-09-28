import { useState, useEffect } from 'react';
import styled from 'styled-components';


const StyledTextBox = styled.div`
  flex: 1;
  width: 100%;
  min-height: 5rem; 
  max-height: 10rem;
  overflow-y: auto; 
  padding: 1rem;
  background-color: #999999ff;
  border-radius: 1rem;
  font-size: 0.9rem;
  margin-top: 10px;
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


const TextBox = ({text, typingSpeed = 20}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  //타이핑 효과  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text, typingSpeed]);

  return (
    <StyledTextBox>{formatText(displayText)}</StyledTextBox>
  )
}

export default TextBox