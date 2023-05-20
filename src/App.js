import React, { useState } from 'react';
import storyElements from './Story/storyElements';
import gif from './image/gif.webp';
import Draggable from 'react-draggable';

function App() {
  const [gameText, setGameText] = useState('Welcome to the game! Press "Start" to begin.');
  const [currentElement, setCurrentElement] = useState(null);
  const [userName, setUserName] = useState('');
  const [userInput, setUserInput] = useState('');
  const [inventory, setInventory] = useState([{ name: 'Companion', description: 'A small, furry friend.'}]);
  const [isInventoryVisible, setIsInventoryVisible] = useState(true);

  
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
    if (!inventory.some((existingItem) => existingItem.name === item.name)) {
      setInventory((prevInventory) => [...prevInventory, item]);
    }
  };

  const getBackgroundStyle = () => ({
    backgroundImage: `url(${currentElement?.background || gif})`,
  });

  return (
    <div className="App" style={getBackgroundStyle()}>
      <div className="image-container" style={getBackgroundStyle()} />
      {isInventoryVisible && (
      <Draggable>
      <div className="draggable-inventory">
        <div className="inventory-box">
          <button
            className="toggle-inventory-button"
            onClick={() => setIsInventoryVisible(!isInventoryVisible)}
            onTouchStart={() => setIsInventoryVisible(!isInventoryVisible)}
          >
            <i className="fas fa-window-minimize"></i>
          </button>
          <div className="inventory-content">
            <p>Inventory & Companion:</p>
            <ul>
              {inventory.length === 0 ? (
                <p className="empty-inventory">Your inventory is currently empty.</p>
              ) : (
                inventory.map((item, index) => (
                  <li key={index}>
                    <div>
                      <strong>{item.name}</strong>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </Draggable>
      )}
      {!isInventoryVisible && (
        <button
          className="toggle-inventory-button"
          onClick={() => setIsInventoryVisible(!isInventoryVisible)}
          onTouchStart={() => setIsInventoryVisible(!isInventoryVisible)}
        >
          <i className="fas fa-window-maximize"> inventory</i>
        </button>
      )}
      <div className="content">
        <h1>Welcome to Duncraw</h1>
        {!userName ? (
          <div className="game-title">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter your name..."
            />
            <button onClick={() => startGame(userInput)}>Start Game</button>
          </div>
        ) : (
          <div>
            <div className="narrative">
              <p>{gameText}</p>
            </div>
            <div className="choices">
              {currentElement?.choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => {
                    if (choice.item) {
                      addItemToInventory(choice.item);
                    }
                    handleChoiceClick(choice);
                  }}
                  onTouchStart={() => {
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
          </div>
        )}
      </div>
    </div>
  );
};

export default App;