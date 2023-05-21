export const typeText = (text, setText, isTypingEffectEnabled, typingSpeed) => {
    let delay = 0; // Delay between typing each character
  
    if (isTypingEffectEnabled) {
      switch (typingSpeed) {
        case 'slow':
          delay = 100; // Adjust the delay for slow speed
          break;
        case 'medium':
          delay = 50; // Adjust the delay for medium speed
          break;
        case 'fast':
          delay = 25; // Adjust the delay for fast speed
          break;
        case 'off':
          // Set delay to 0 for instant typing without delay
          delay = 0;
          break;
        default:
          delay = 50; // Default to medium speed if no valid speed is provided
          break;
      }
    }
  
    let currentIndex = 0; // Index of the current character being typed
  
    const typingInterval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(typingInterval); // Stop typing when all characters are typed
      }
  
      setText(text.substring(0, currentIndex)); // Update the typed text with each character
  
      currentIndex++; // Move to the next character
  
    }, delay);
  
    // Return a function to stop the typing effect when the component unmounts or when typing is disabled
    return () => {
      clearInterval(typingInterval);
    };
  };