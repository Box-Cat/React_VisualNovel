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

const VisualNovelEngine = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(jsonData);
  }, []);

  if (!data) return <div>Loading...</div>;

  const handleBeforePage = () => {
    if (currentPage === 0) return;
    else setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    const nextPage = data.Scene1.PAGES['Page' + currentPage].NextPage;
    if (nextPage !== undefined)
      return; //"NextPage": "END" 가 있으면 Next 버튼 비활성화
    else setCurrentPage(currentPage + 1);
  };

  const handleOptionClick = (option) => {
    setCurrentPage(option);
  };

  const handleButtonAction = (action) => {
    if (action === 'before') handleBeforePage();
    else if (action === 'next') handleNextPage();
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
        <div>
          <Button onKeyDown={handleButtonAction} onClick={handleBeforePage}>
            Before
          </Button>
          <Button onKeyDown={handleButtonAction} onClick={handleNextPage}>
            Next
          </Button>
        </div>
      </NameTextBox>
    </Background>
  );
};

export default VisualNovelEngine;
