import React, { useState, useEffect, useRef } from 'react';
import storyElements from './Story/storyElements';
import gif from './image/gif.webp';
import Draggable from 'react-draggable';
import {typeText} from './Components/utils';
import track1 from './music/track1.mp3';
import track2 from  './music/track2.mp3';
import track3 from './music/track3.mp3';
import track4  from './music/track4.mp3';
import dreads from './Components/characters/dreads.png';
//songs//
const songs = [
  track1,
  track2,
  track3,
  track4
]
//songs//
const imageMap = {
  main: 'https://media.discordapp.net/attachments/1059614173031567402/1109330335717666846/0_1.png?width=521&height=521',
  dreads: dreads,
  // Add more image mappings here
};
function App() {
  const [gameText, setGameText] = useState('Welcome to the game! Press "Start" to begin.');
  const [currentElement, setCurrentElement] = useState(null);
  const [userName, setUserName] = useState('');
  const [userInput, setUserInput] = useState('');
  //{ name: 'this is the item', description: 'A small, furry friend.'},// for inventory
  const [inventory, setInventory] = useState([]);
  const [isInventoryVisible, setIsInventoryVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingEffectEnabled, setIsTypingEffectEnabled] = useState(true);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isBGMPlaying, setIsBGMPlaying] = useState(true);
  const [volume, setVolume] = useState(0.1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [typingSpeed, setTypingSpeed] = useState('off');
  const bgm = useRef();


  const toggleSettingsVisibility = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  //music player//

  useEffect(() => {
    bgm.current = new Audio(songs[currentSongIndex]);
    bgm.current.loop = false; // Stop looping so we can play the next song
    bgm.current.play();
    bgm.current.volume = 0.1;
    // When the song ends, increment the song index and start the next song
    bgm.current.onended = () => {
      setCurrentSongIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % songs.length;
        bgm.current = new Audio(songs[nextIndex]);
        bgm.current.play();
        return nextIndex;
      });
    };
  
    return () => {
      // Clean up the audio when the component unmounts
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
    setIsPlaying(false); // Pause the current song
    setCurrentSongIndex((prevIndex) => {
      const prevSongIndex = (prevIndex - 1 + songs.length) % songs.length; // Calculate the index of the previous song
      bgm.current.pause(); // Pause the current song
      bgm.current = new Audio(songs[prevSongIndex]); // Load the previous song
      bgm.current.play(); // Play the previous song
      setIsPlaying(true); // Set the state to playing
      return prevSongIndex; // Update the current song index
    });
  };
 const nextSong = () => {
  setIsPlaying(false); // Pause the current song
  setCurrentSongIndex((prevIndex) => {
    const nextSongIndex = (prevIndex + 1) % songs.length; // Calculate the index of the next song
    bgm.current.pause(); // Pause the current song
    bgm.current = new Audio(songs[nextSongIndex]); // Load the next song
    bgm.current.play(); // Play the next song
    setIsPlaying(true); // Set the state to playing
    return nextSongIndex; // Update the current song index
  });
};
const pause = () => {
  bgm.current.pause();
  setIsPlaying(false);
};
const playOrPauseSong = () => {
  if (isPlaying) {
    pause(); // Pause the currently playing song
  } else {
    play(); // Play the currently paused song
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
  //music
  const handleChoiceClick = (choice) => {
    const nextElement = storyElements.find((el) => el.id === choice.nextElement);
    if (nextElement) {
      setGameText(nextElement.text);
      setCurrentElement(nextElement);
      if (nextElement.inventoryAction) {
        setInventory((prevInventory) => [...prevInventory, nextElement.inventoryAction.item]);
      }
    } else {
      console.error(`Next element with ID '${choice.nextElement}' not found.`);
    }
  };
//music player above//
useEffect(() => {
  const typingStopper = typeText(currentElement?.text || '', setTypedText, isTypingEffectEnabled, typingSpeed);
  return typingStopper;
}, [currentElement, isTypingEffectEnabled, typingSpeed]);

const startGame = (name) => {
  setUserName(name);
  const firstElement = storyElements[0];
  if (firstElement.inventoryAction) {
    setInventory((prevInventory) => [...prevInventory, firstElement.inventoryAction.item]);
  }
  // Here you replace '${userName}' with the actual 'userName'
  const firstElementText = firstElement.text.replace('${userName}', name);
  setGameText(firstElementText);
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
  const changeTypingSpeed = (speed) => {
    setTypingSpeed(speed);
    if (speed === 'off') {
      setIsTypingEffectEnabled(false);
    } else {
      setIsTypingEffectEnabled(true);
    }
  };

  useEffect(() => {
    const typingStopper = typeText(currentElement?.text || '', setTypedText, isTypingEffectEnabled, typingSpeed);
    return typingStopper;
  }, [currentElement, isTypingEffectEnabled, typingSpeed]);

  return (
    <div className="App" style={getBackgroundStyle()}>
      <div className="image-container">
      {isImageVisible && currentElement?.image && (
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
  <p>{typedText.replace('userName', userName)}</p>
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
      </div>  {isSettingsVisible && (
  <div className="settings-box">
    <h2>Settings</h2>
    <div className="typing-speed-controls">
  <h3>Typing Speed:</h3>
  <label>
    <input
      type="radio"
      value="slow"
      checked={typingSpeed === 'slow'}
      onChange={() => changeTypingSpeed('slow')}
    />
    Slow
  </label>
  <label>
    <input
      type="radio"
      value="medium"
      checked={typingSpeed === 'medium'}
      onChange={() => changeTypingSpeed('medium')}
    />
    Medium
  </label>
  <label>
    <input
      type="radio"
      value="fast"
      checked={typingSpeed === 'fast'}
      onChange={() => changeTypingSpeed('fast')}
    />
    Fast
  </label>
  <label>
    <input
      type="radio"
      value="off"
      checked={typingSpeed === 'off'}
      onChange={() => changeTypingSpeed('off')}
    />
    Off
  </label>
</div>
<div className="image-settings">
          <h3>Image Settings</h3>
          <button onClick={() => setIsImageVisible(!isImageVisible)}>
            {isImageVisible ? 'Hide Image' : 'Show Image'}
          </button>
        </div>

    {/* Music player */}
      <div className="music-controls">
        <h3>Background Music</h3>
        <button onClick={previousSong}>Previous</button>
        <button onClick={playOrPauseSong}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={nextSong}>Next</button>
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={changeVolume} />
      </div>
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