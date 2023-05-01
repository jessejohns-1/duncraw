import React, { useState } from 'react';
import storyElements from './storyElements';
import landing from './image/start_background.png';

function App() {
  const [gameText, setGameText] = useState('Welcome to the game! Press "Start" to begin.');
  const [currentElement, setCurrentElement] = useState(null);
  const [userName, setUserName] = useState('');
  const [userInput, setUserInput] = useState('');

  const handleChoiceClick = (choice) => {
    const nextElement = storyElements.find((el) => el.id === choice.nextElement);
    setGameText(nextElement.text);
    setCurrentElement(nextElement);
  };

  const startGame = (name) => {
    setUserName(name);
    setGameText(`Welcome, ${name}! ${storyElements[0].text}`);
    setCurrentElement(storyElements[0]);
  };


  const getBackgroundStyle = () => {
    if (!currentElement || !currentElement.background) {
      return {
        backgroundImage: `url(${landing})`,
      };
    } else {
      return {
        backgroundImage: `url(${currentElement.background})`,
      };
    }
  };

  
  return (
    <div className="App">
      <div
        className="image-container"
        style={getBackgroundStyle()}
      ></div>
      <div className="content">
        <h1>Welcome to Duncraw</h1>
        {!userName ? (
          <div>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter your name..."
            />
            <button onClick={() => startGame(userInput)}>Submit</button>
          </div>
        ) : (
          <div>
            <p>{gameText}</p>
            {currentElement &&
              currentElement.choices.map((choice) => (
                <button key={choice.id} onClick={() => handleChoiceClick(choice)}>
                  {choice.text}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;