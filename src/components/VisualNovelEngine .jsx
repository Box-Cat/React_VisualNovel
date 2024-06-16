import React, { useState, useEffect } from 'react';
import jsonData from '../VNData.json';

const VisualNovelEngine = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(jsonData);
  }, []);

  if (!data) return <div>Loading...</div>;

  const handleNextPage = () => {
    const nextPage = data.Scene1.PAGES['Page' + currentPage].NextPage;
    if (nextPage !== undefined) {
      setCurrentPage(nextPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleOptionClick = (option) => {
    setCurrentPage(option);
  };

  const page = data.Scene1.PAGES['Page' + currentPage];
  const sprites = Array.isArray(page.Sprite)
    ? page.Sprite.map((s) => {
        const character = Object.keys(s)[0];
        return {
          character,
          sprite: data.Characters[character][s[character]]
        };
      })
    : [{
        character: page.Character,
        sprite: data.Characters[page.Character][page.Sprite]
      }];

  return (
    <div style={{ backgroundImage: `url(${data.Scene1.Background})`, padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        {sprites.map(({ character, sprite }, index) => (
          <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
            {sprite && <img src={sprite} alt={character} style={{ width: '150px', height: '150px' }} />}
            {/* <div>
              <h2>{character}</h2>
            </div> */}
          </div>
        ))}
        <div>
          <h2>{page.Character}</h2>
          <p>{page.PageText}</p>
        </div>
      </div>
      {page.Options ? (
        <div>
          {Object.keys(page.Options).map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(page.Options[option])}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <button onClick={handleNextPage}>Next</button>
      )}
    </div>
  );
};

export default VisualNovelEngine;
