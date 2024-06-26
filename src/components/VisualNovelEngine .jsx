import React, { useState, useEffect } from 'react';
import jsonData from '../VNData.json';
import NameBox from './NameBox';
import TextBox from './TextBox';
import Background from './Background';
import ProfileImage from './ProfileImage';
import NameTextBox from './NameTextBox';
import Button from './Button';

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
    if (nextPage !== undefined) return;
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
  const sprites = Array.isArray(page.Sprite)
    ? page.Sprite.map((s) => {
        const character = Object.keys(s)[0];
        return {
          character,
          sprite: data.Characters[character][s[character]],
        };
      })
    : [
        {
          character: page.Character,
          sprite: data.Characters[page.Character][page.Sprite],
        },
      ];

  return (
    <Background data={data}>
      <ProfileImage sprites={sprites} />
      <NameTextBox>
        <NameBox name={page.Character} />
        <TextBox text={page.PageText} />
        {page.Options ? (
          <div>
            {Object.keys(page.Options).map((option, index) => (
              <Button
                key={index}
                onClick={() => handleOptionClick(page.Options[option])}
              >
                {option}
              </Button>
            ))}
          </div>
        ) : (
          <div>
            <Button
              onKeyDown={handleButtonAction}
              onClick={handleBeforePage}
            >
              Before
            </Button>
            <Button
              onKeyDown={handleButtonAction}
              onClick={handleNextPage}
            >
              Next
            </Button>
          </div>
        )}
      </NameTextBox>
    </Background>
  );
};

export default VisualNovelEngine;
