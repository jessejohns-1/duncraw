import React, { useState } from 'react';
import storyElements from './storyElements';
import landing from '/images/landing.jpg';

function App() {
  const [gameText, setGameText] = useState('Welcome to the game! Press "Start" to begin.');
  const [currentElement, setCurrentElement] = useState(null);
  const [userInput, setUserInput] = useState('');

  const handleChoiceClick = (choice) => {
    const nextElement = storyElements.find((el) => el.id === choice.nextElement);
    setGameText(nextElement.text);
    setCurrentElement(nextElement);
  };

  const startGame = () => {
    setGameText(storyElements[0].text);
    setCurrentElement(storyElements[0]);
  };


  const getBackgroundStyle = () => {
    if (!currentElement) {
      return landing;
    }
    return {
      backgroundImage: `url(${currentElement.background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  };


  return (
    <div className="App" style={getBackgroundStyle()}>
      <div className="content">
        <h1>Text-based Game</h1>
        <div>
          <p>{gameText}</p>
          {currentElement &&
            currentElement.choices.map((choice) => (
              <button key={choice.id} onClick={() => handleChoiceClick(choice)}>
                {choice.text}
              </button>
            ))}
          {!currentElement && (
            <button onClick={startGame}>Start</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;