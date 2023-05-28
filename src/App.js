import React, { useState, useEffect, useRef } from 'react';
import storyElements from './Story/storyElements';
import gif from './image/gif.webp';
import Draggable from 'react-draggable';
import { typeText } from './Components/utils';
import track1 from './music/track1.mp3';
import track2 from './music/track2.mp3';
import track3 from './music/track3.mp3';
import track4 from './music/track4.mp3';
import imageMap from './Components/imageMap';
import { Button, Navbar, Nav, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Songs
const songs = [track1, track2, track3, track4];

function App() {
  const [gameText, setGameText] = useState('Welcome to the game! Press "Start" to begin.');
  const [currentElement, setCurrentElement] = useState(null);
  const [userName, setUserName] = useState('');
  const [userInput, setUserInput] = useState('');
  const [inventory, setInventory] = useState([]);
  const [isInventoryVisible, setIsInventoryVisible] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [isTypingEffectEnabled, setIsTypingEffectEnabled] = useState(true);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isBGMPlaying, setIsBGMPlaying] = useState(true);
  const [volume, setVolume] = useState(0.1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [typingSpeed, setTypingSpeed] = useState('off');
  const [userCommand, setUserCommand] = useState('');
  const bgm = useRef();
  const [showHints, setShowHints] = useState(false);

  const toggleSettingsVisibility = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  // Music player
  useEffect(() => {
    bgm.current = new Audio(songs[currentSongIndex]);
    bgm.current.loop = false;
    bgm.current.play();
    bgm.current.volume = 0.1;

    bgm.current.onended = () => {
      setCurrentSongIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % songs.length;
        bgm.current = new Audio(songs[nextIndex]);
        bgm.current.play();
        return nextIndex;
      });
    };

    return () => {
      bgm.current.pause();
      bgm.current = null;
    };
  }, [currentSongIndex]);

  useEffect(() => {
    play();
  }, []);

  const play = () => {
    bgm.current.play();
    setIsPlaying(true);
  };

  const previousSong = () => {
    setIsPlaying(false);
    setCurrentSongIndex((prevIndex) => {
      const prevSongIndex = (prevIndex - 1 + songs.length) % songs.length;
      bgm.current.pause();
      bgm.current = new Audio(songs[prevSongIndex]);
      bgm.current.play();
      setIsPlaying(true);
      return prevSongIndex;
    });
  };

  const nextSong = () => {
    setIsPlaying(false);
    setCurrentSongIndex((prevIndex) => {
      const nextSongIndex = (prevIndex + 1) % songs.length;
      bgm.current.pause();
      bgm.current = new Audio(songs[nextSongIndex]);
      bgm.current.play();
      setIsPlaying(true);
      return nextSongIndex;
    });
  };

  const pause = () => {
    bgm.current.pause();
    setIsPlaying(false);
  };

  const playOrPauseSong = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const changeVolume = (e) => {
    let volume = e.target.value;
    bgm.current.volume = volume;
    setVolume(volume);
  };

  useEffect(() => {
    isBGMPlaying ? bgm.current.play() : bgm.current.pause();
  }, [isBGMPlaying]);
  // Music player above

  
  const addItemToInventory = (item) => {
    const isItemInInventory = inventory.some((existingItem) => existingItem.name === item.name);
    if (!isItemInInventory) {
      setInventory((prevInventory) => [...prevInventory, item]);
    }
  };
  const removeItemFromInventory = (itemToRemove) => {
    console.log("HEYYY I WAS USED");
    setInventory((prevInventory) => {
      console.log(prevInventory); // Check the previous inventory state
      const updatedInventory = prevInventory.filter((item) => item.name !== itemToRemove.name);
      console.log(updatedInventory); // Check the updated inventory state
      return updatedInventory;
    });
  };
  const inventoryActions = {
    add: addItemToInventory,
    remove: removeItemFromInventory
};

const handleChoiceClick = (choice) => {
  if (choice.id === 'freeform') return handleUserCommand(userCommand);

  const nextElement = storyElements.find((el) => el.id === choice.nextElement);

  if (!nextElement) return console.error(`Next element with ID '${choice.nextElement}' not found.`);

  console.log('Next Element:', nextElement);

  if (nextElement.inventoryAction) {
    console.log('Inventory Action:', nextElement.inventoryAction);
    if (nextElement.inventoryAction.type === 'add') {
      console.log('Adding item:', nextElement.inventoryAction.item);
      inventoryActions.add(nextElement.inventoryAction.item);
    } else if (nextElement.inventoryAction.type === 'remove') {
      console.log('Removing item:', nextElement.inventoryAction.item);
      inventoryActions.remove(nextElement.inventoryAction.item);
    }
  }

  setGameText(nextElement.text);
  setCurrentElement(nextElement);
};

  const handleUserCommand = (userCommand) => {
    const lowerCaseUserCommand = userCommand.toLowerCase();

    if (currentElement.validCommands.includes(lowerCaseUserCommand)) {
      const nextElement = storyElements.find((el) => el.id === lowerCaseUserCommand);
      if (nextElement) {
        setGameText(nextElement.text);
        setCurrentElement(nextElement);
        if (nextElement.inventoryAction) {
          const itemToAdd = nextElement.inventoryAction.item;
          const isItemInInventory = inventory.some((existingItem) => existingItem.name === itemToAdd.name);
          if (!isItemInInventory) {
            setInventory((prevInventory) => [...prevInventory, itemToAdd]);
          }
        }
      } else {
        console.error(`Next element with ID '${lowerCaseUserCommand}' not found.`);
      }
    } else {
      setGameText("You don't know how to do that.");
    }
  };

  useEffect(() => {
    const typingStopper = typeText(
      currentElement?.text || '',
      setTypedText,
      isTypingEffectEnabled,
      typingSpeed,
      currentElement?.validCommands || []
    );
    return typingStopper;
  }, [currentElement, isTypingEffectEnabled, typingSpeed]);

  const startGame = (name) => {
    setUserName(name);
    const firstElement = storyElements[0];
    if (firstElement.inventoryAction) {
      setInventory((prevInventory) => [...prevInventory, firstElement.inventoryAction.item]);
    }
    const firstElementText = firstElement.text.replace('userName', name);
    firstElement.text = firstElementText;
    setGameText(firstElementText);
    setCurrentElement(firstElement);
  };

  const getBackgroundStyle = () => ({
    backgroundImage: `url(${currentElement?.background || gif})`,
  });

  const changeTypingSpeed = (speed) => {
    setTypingSpeed(speed);
    setIsTypingEffectEnabled(speed !== 'off');
  };

  useEffect(() => {
    const typingStopper = typeText(currentElement?.text || '', setTypedText, isTypingEffectEnabled, typingSpeed);
    return typingStopper;
  }, [currentElement, isTypingEffectEnabled, typingSpeed]);

  const handleInventoryMinimize = () => {
    setIsInventoryVisible(!isInventoryVisible);
  };

  const handleInventoryTouchMinimize = () => {
    setIsInventoryVisible(!isInventoryVisible);
  };

  return (
    <div className="App" style={getBackgroundStyle()}>
      <div className="image-container">
        {isImageVisible && currentElement?.image && (
          <img src={imageMap[currentElement.image]} alt={currentElement.image} className="image" />
        )}
      </div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#">Duncraw</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav>
            <Button variant="primary" onClick={toggleSettingsVisibility}>
              {isSettingsVisible ? 'Hide Settings' : 'Show Settings'}
            </Button>
            {!isInventoryVisible && (
              <Button
                variant="primary"
                className="toggle-inventory-button"
                onClick={() => setIsInventoryVisible(!isInventoryVisible)}
                onTouchEnd={handleInventoryTouchMinimize}
              >
                <i className="fas fa-window-maximize"></i> Inventory
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="content">
        {!userName ? (
          <div className="game-title mt-5">
            <h1>Duncraw</h1>
            <Form.Control
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter your name..."
            />
            <Button className="mt-2" onClick={() => startGame(userInput)}>
              Start Game
            </Button>
          </div>
        ) : (
          <div>
            <div className="narrative-text mt-5">
              <p>
                {typedText
                  .split(/\b(\w+)\b/)
                  .map((word, index) => {
                    const isKeyword =
                      currentElement &&
                      currentElement.validCommands &&
                      currentElement.validCommands.includes(word.toLowerCase());
                    return (
                      <span key={index} className={isKeyword ? 'valid-command' : ''}>
                        {word}
                      </span>
                    );
                  })}
              </p>
            </div>
            <div className="choices mt-4">
              {currentElement?.choices.map((choice) =>
                choice.id === 'freeform' ? (
                  <div key={choice.id} className="mt-3">
                    <Form.Control
                      type="text"
                      value={userCommand}
                      onChange={(e) => setUserCommand(e.target.value)}
                    />
                    <Button className="mt-2" onClick={() => handleChoiceClick(choice)}>
                      Submit
                    </Button>
                  </div>
                ) : (
                  <Button
                    key={choice.id}
                    className="mt-3"
                    onClick={() => {
                      if (choice.item) {
                        addItemToInventory(choice.item);
                      }
                      handleChoiceClick(choice);
                    }}
                  >
                    {choice.text}
                  </Button>
                )
              )}
            </div>
          </div>
        )}
      </div>
      {isInventoryVisible && (
        <Draggable>
          <div className="draggable-inventory">
            <div className="inventory-box">
              <Button
                className="toggle-inventory-button"
                onClick={() => setIsInventoryVisible(!isInventoryVisible)}
                onTouchEnd={handleInventoryTouchMinimize}
              >
                <i className="fas fa-window-minimize"></i>
              </Button>
              <div className="inventory-content">
                <p>Inventory & Companion:</p>
                <ul>
                  {inventory.length === 0 ? (
                    <p className="empty-inventory">No items in inventory.</p>
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
      {isSettingsVisible && (
        <div className="settings-box">
          <h2>Settings</h2>
          <div className="typing-speed-controls">
            <h3>Typing Speed:</h3>
            <Form.Check
              type="radio"
              id="slow"
              label="Slow"
              checked={typingSpeed === 'slow'}
              onChange={() => changeTypingSpeed('slow')}
            />
            <Form.Check
              type="radio"
              id="medium"
              label="Medium"
              checked={typingSpeed === 'medium'}
              onChange={() => changeTypingSpeed('medium')}
            />
            <Form.Check
              type="radio"
              id="fast"
              label="Fast"
              checked={typingSpeed === 'fast'}
              onChange={() => changeTypingSpeed('fast')}
            />
            <Form.Check
              type="radio"
              id="off"
              label="Off"
              checked={typingSpeed === 'off'}
              onChange={() => changeTypingSpeed('off')}
            />
          </div>
          <div className="image-settings">
            <h3>Image Settings</h3>
            <Button onClick={() => setIsImageVisible(!isImageVisible)}>
              {isImageVisible ? 'Hide Image' : 'Show Image'}
            </Button>
          </div>

          <div className="music-controls">
            <h3>Background Music</h3>
            <Button onClick={previousSong}>Previous</Button>
            <Button onClick={playOrPauseSong}>{isPlaying ? 'Pause' : 'Play'}</Button>
            <Button onClick={nextSong}>Next</Button>
            <Form.Control type="range" min="0" max="1" step="0.01" value={volume} onChange={changeVolume} />
          </div>
          <div className="hints-controls">{/* Add your hints controls here */}</div>
        </div>
      )}
    </div>
  );
}

export default App;