import React, { useState } from 'react';
import storyElements from './storyElements';
import landing from './image/start_background.png';

function App() {
  const [gameText, setGameText] = useState('Welcome to the game! Press "Start" to begin.');
  const [currentElement, setCurrentElement] = useState(null);
  const [userName, setUserName] = useState('');
  const [userInput, setUserInput] = useState('');
  const [inventory, setInventory] = useState([]);

  const handleChoiceClick = (choice) => {
    const nextElement = storyElements.find((el) => el.id === choice.nextElement);
    setGameText(nextElement.text);
    setCurrentElement(nextElement);
    if (nextElement.inventoryAction) {
      setInventory((prevInventory) => [...prevInventory, nextElement.inventoryAction.item]);
    }
  };

  const startGame = (name) => {
    setUserName(name);
    const firstElement = storyElements[0];
    if (firstElement.inventoryAction) {
      setInventory((prevInventory) => {
        const newInventory = [...prevInventory, firstElement.inventoryAction.item];
        return newInventory;
      });
    }
    setGameText(`Welcome, ${name}! ${firstElement.text}`);
    setCurrentElement(firstElement);
  };

  const addItemToInventory = (item) => {
    setInventory((prevInventory) => [...prevInventory, item]);
  };

  const getBackgroundStyle = () => ({
    backgroundImage: `url(${currentElement?.background || landing})`,
  });

  return (
    <div className="App">
      <div className="image-container" style={getBackgroundStyle()} />
      <div className="content">
        <div className="inventory-box">
          <p>Inventory:</p>
          <ul>
            {inventory.map((item, index) => (
              <li key={index}>
              <div>
                <strong>{item.name}</strong>
              </div>
            </li>
            ))}
          </ul>
        </div>
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
            {currentElement?.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => {
                  if (choice.item) {
                    addItemToInventory(choice.item);
                  }
                  handleChoiceClick(choice);
                }}
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;