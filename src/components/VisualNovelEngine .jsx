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
import SettingButtonsContainer from './SettingButtonsContainer';
import SettingButton from './SoundButton';

const VisualNovelEngine = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState(null);
  const [audio, setAudio] = useState(null);
  const [effectAudio, setEffectAudio] = useState(null);
  const [currentBGM, setCurrentBGM] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const BGM_VOLUME = 0.3; 

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (data) {
      const page = data.Scene1.PAGES['Page' + currentPage];
      const pageBGM = page.BGM;

      // BGM이 바뀌면 새로 실행
      if (isMuted === false && pageBGM && pageBGM !== currentBGM) {
        if (audio) {
          audio.pause();  
        }

        const newAudio = new Audio(pageBGM);  
        newAudio.loop = true;
        newAudio.volume = BGM_VOLUME; 
        newAudio.play();
        setAudio(newAudio);
        setCurrentBGM(pageBGM); 
      } else {
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

  const toggleAudio = () => {
    setIsMuted((prev) => {
      if (audio) {
        audio.volume = prev ? BGM_VOLUME : 0; //노래가 끊기면 안되니, pause가 아님
      }
      return !prev;
    });
  };

  
  const playEffectBGM = (effectBGM) => {
    if (effectBGM) {
      if (effectAudio) {
        effectAudio.pause(); 
      }
      const newEffectAudio = new Audio(effectBGM);
      newEffectAudio.play();
      setEffectAudio(newEffectAudio); 
    }
  };

  if (!data) return <div>Loading...</div>;

  const handleBeforePage = () => {
    if (currentPage === 0) return;

    const prevPage = currentPage - 1;
    const effectBGM = data.Scene1.PAGES['Page' + prevPage]?.EffectBGM;
    
    // 효과음 재생
    playEffectBGM(effectBGM);

    setCurrentPage(prevPage);
  };

  const handleNextPage = () => {
    const nextPage = data.Scene1.PAGES['Page' + currentPage].NextPage;
    if (nextPage !== undefined) return;  // "NextPage"가 있으면 Next 버튼 비활성화

    const effectBGM = data.Scene1.PAGES['Page' + (currentPage + 1)]?.EffectBGM;
 
    playEffectBGM(effectBGM);

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
    <>
      <Background backgroundImage={page.Background}>
        <SettingButtonsContainer>
          <SettingButton toggleAudio={toggleAudio} isMuted={isMuted} />
        </SettingButtonsContainer>
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
          {
              !page.Options && (
                <ButtonContainer>
                <Button onClick={handleBeforePage}>Before</Button>
                <Button onClick={handleNextPage}>Next</Button>
              </ButtonContainer>
              )
          }
        </NameTextBox>
      </Background>
    </>
  );
};

export default VisualNovelEngine;
