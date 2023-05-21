import React, { useState, useEffect } from 'react';
import storyElements from './Story/storyElements';
import gif from './image/gif.webp';
import Draggable from 'react-draggable';
import {typeText} from './Components/utils';
const imageMap = {
  main: 'https://media.discordapp.net/attachments/1059614173031567402/1109330335717666846/0_1.png?width=521&height=521',
  // Add more image mappings here
};
function App() {
  const [gameText, setGameText] = useState('Welcome to the game! Press "Start" to begin.');
  const [currentElement, setCurrentElement] = useState(null);
  const [userName, setUserName] = useState('');
  const [userInput, setUserInput] = useState('');
  const [inventory, setInventory] = useState([{ name: 'this is the item', description: 'A small, furry friend.'},]);
  const [isInventoryVisible, setIsInventoryVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingEffectEnabled, setIsTypingEffectEnabled] = useState(true);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const toggleSettingsVisibility = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  
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
      setInventory((prevInventory) => [...prevInventory, firstElement.inventoryAction.item]);
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


  useEffect(() => {
    const typingStopper = typeText(gameText, setTypedText, isTypingEffectEnabled);
    return typingStopper;
  }, [gameText, isTypingEffectEnabled]);

  return (
    <div className="App" style={getBackgroundStyle()}>
      <div className="image-container">
        {currentElement?.image && (
         <img
         src={imageMap[currentElement.image]}
         alt={currentElement.image}
         className="image"
       />
        )}
      </div>
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
                      <h5>{item.description}</h5>
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
        <h1>Duncraw</h1>
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
           <div className="narrative-text">
               <p>{typedText}</p>
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
      </div> {isSettingsVisible && (
        <div className="settings-box">
          <h2>Settings</h2>
          <label>
            Enable Typing Effect:
            <input 
              type="checkbox" 
              checked={isTypingEffectEnabled} 
              onChange={() => setIsTypingEffectEnabled(!isTypingEffectEnabled)} 
            />
          </label>
          {/* Add more settings here as needed */}
        </div>
      )}
     <button className="button-settings" onClick={toggleSettingsVisibility}>
  {isSettingsVisible ? 'Hide Settings' : 'Show Settings'}
</button>
    </div>
  );
};

export default App;