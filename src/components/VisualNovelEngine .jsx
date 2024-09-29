import { useState, useEffect } from 'react';
import jsonData from '../VNData.json';
import NameBox from './NameBox';
import TextBox from './TextBox';
import Background from './Background';
import ProfileImage from './ProfileImage';
import NameTextBox from './NameTextBox';
import Button from './Button';
import OptionListContainer from './OptionListContainer';
import OptionList from './OptionList';
import ButtonContainer from './ButtonContainer';

const VisualNovelEngine = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState(null);
  const [audio, setAudio] = useState(null);
  const [currentBGM, setCurrentBGM] = useState(null);
  const BGM_VOLUME = 0.3; 

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (data) {
      const page = data.Scene1.PAGES['Page' + currentPage];
      const pageBGM = page.BGM;

      // 현재 페이지의 BGM이 있고, 현재 BGM과 다를 경우
      if (pageBGM && pageBGM !== currentBGM) {
        if (audio) {
          audio.pause();  
        }

        const newAudio = new Audio(pageBGM);  
        newAudio.loop = true;
        newAudio.volume = BGM_VOLUME; 
        newAudio.play();
        setAudio(newAudio);
        setCurrentBGM(pageBGM); 
      } 
      // 페이지에 BGM이 없고, 현재 BGM이 있을 경우
      else if (!pageBGM && currentBGM) {
        return;
      }
    }

    // 컴포넌트가 언마운트될 때 오디오 정지
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [data, currentPage]);

  if (!data) return <div>Loading...</div>;

  const handleBeforePage = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    const nextPage = data.Scene1.PAGES['Page' + currentPage].NextPage;
    if (nextPage !== undefined) return;  // "NextPage"가 있으면 Next 버튼 비활성화
    setCurrentPage(currentPage + 1);
  };

  const handleOptionClick = (option) => {
    setCurrentPage(option);
  };

  const page = data.Scene1.PAGES['Page' + currentPage];

  const sprites = page.Sprite.map((s) => {
    const character = Object.keys(s)[0];
    const brightness = Object.values(s)[1];

    return {
      character,
      sprite: data.Characters[character][s[character]],
      brightness,
    };
  });

  return (
    <Background backgroundImage={page.Background}>
      {page.Options && (
        <OptionListContainer>
          {Object.keys(page.Options).map((option, index) => (
            <OptionList
              key={index}
              onClick={() => handleOptionClick(page.Options[option])}
            >
              {option}
            </OptionList>
          ))}
        </OptionListContainer>
      )}
      <ProfileImage sprites={sprites} />
      <NameTextBox>
        <NameBox name={page.Character} />
        <TextBox text={page.PageText} />
        <ButtonContainer>
          <Button onClick={handleBeforePage}>
            Before
          </Button>
          <Button onClick={handleNextPage}>
            Next
          </Button>
        </ButtonContainer>
      </NameTextBox>
    </Background>
  );
};

export default VisualNovelEngine;
